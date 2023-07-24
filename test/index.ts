import '@nomiclabs/hardhat-waffle';

import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import { expect } from 'chai';
import { ethers } from 'hardhat';

import {
  PEPAY,
  MockERC20,
  PEPAYFeeSplitter,
  PEPAYLiquidityStaking,
} from '../typechain/src';


describe('Pepay whole logic testing', async () => {
    const erc20MintAmount = await ethers.utils.parseEther("10000000000000000000.0");
    const erc20AllowanceAmount = await ethers.utils.parseEther("10000000000000000000.0");
    const initialSupply = await ethers.utils.parseEther("1000000.0");
    const BUY_FEE = 900;
    const FEE_BASE_1000 = 1000;

    let pepay: PEPAY,
        pepayFeeSpliter: PEPAYFeeSplitter,
        pepayLiquidityStaking: PEPAYLiquidityStaking,
        lpToken: MockERC20,
        pepeToken: MockERC20;
    let deployer: SignerWithAddress,
        user: SignerWithAddress,
        teamAccount: SignerWithAddress,
        stakerAccount: SignerWithAddress,
        opAccount: SignerWithAddress;
    let tx;

    before(async function () {
        const accounts = await ethers.getSigners();
        deployer = accounts[0];
        user = accounts[1];
        teamAccount = accounts[2];
        stakerAccount = accounts[3];
        opAccount = accounts[4];

        const PEPAYFact = await ethers.getContractFactory('PEPAY');
        const PEPETokenFact = await ethers.getContractFactory('MockERC20');
        const LPTokenFact = await ethers.getContractFactory('MockERC20');
        const PEPAYFeeSpliterFact = await ethers.getContractFactory('PEPAYFeeSplitter');
        const PEPAYLiquidityStakingFact = await ethers.getContractFactory('PEPAYLiquidityStaking');

        pepeToken = (await PEPETokenFact.connect(deployer).deploy()) as MockERC20;
        lpToken = (await LPTokenFact.connect(deployer).deploy()) as MockERC20;
        pepay = (await PEPAYFact.connect(deployer).deploy(
            initialSupply,
            pepeToken.address
        )) as PEPAY;
        console.log("AAA " + pepay);

        pepayFeeSpliter = (await PEPAYFeeSpliterFact.connect(deployer).deploy(pepeToken.address)) as PEPAYFeeSplitter;
        pepayLiquidityStaking = (await PEPAYLiquidityStakingFact.connect(deployer).deploy(lpToken.address, pepeToken.address, pepay.address)) as PEPAYLiquidityStaking;
       
        tx = await pepeToken.connect(user).freeMint(erc20MintAmount);
        await tx.wait();
        tx = await lpToken.connect(user).freeMint(erc20MintAmount);
        await tx.wait();
        tx = await pepeToken.connect(deployer).freeMint(erc20MintAmount);
        await tx.wait();

        tx = await pepeToken.connect(deployer).transfer(pepay.address, erc20AllowanceAmount);
        await tx.wait();

        tx = await pepeToken
            .connect(user)
            .approve(pepay.address, erc20AllowanceAmount);
        await tx.wait();

        tx = await pepay.setFeeAddress(pepayFeeSpliter.address);
        await tx.wait();

        tx = await pepayLiquidityStaking.connect(deployer).setStart();
        await tx.wait();


        tx = await pepayLiquidityStaking.setFeeAddress(pepayFeeSpliter.address);
        await tx.wait();

        tx = await pepayFeeSpliter.connect(deployer).setTEAMWallet(teamAccount.address);
        await tx.wait();
        tx = await pepayFeeSpliter.connect(deployer).setSTAKERWallet(stakerAccount.address);
        await tx.wait();
        tx = await pepayFeeSpliter.connect(deployer).setOPWallet(opAccount.address);
        await tx.wait();

        tx = await lpToken.connect(user).approve(pepayLiquidityStaking.address, erc20AllowanceAmount);
        await tx.wait();

        tx = await pepay.connect(deployer).setStart();
        await tx.wait();
    });

    it("Check the inital balance of pepay", async () => {
        console.log("Pepay: " + pepay)
        const totalBalance = await pepay.totalSupply();
        expect(totalBalance).to.equal(initialSupply);
        const pepeBalance = await pepeToken.balanceOf(pepay.address);
        expect(pepeBalance).to.equal(erc20MintAmount);
    });

    it("Check Pepay Price", async () => {
        const amount = await ethers.utils.parseEther("1.0");
        const totalPEPAYBalance = await pepay.totalSupply();
        const totalPEPEPBalance = await pepeToken.balanceOf(pepay.address);
        const pepayAmount = await pepay.getBuyJay(amount);
        expect(pepayAmount).to.equal(amount.mul(totalPEPAYBalance).div(totalPEPEPBalance).mul(BUY_FEE).div(FEE_BASE_1000));
    });

    it("Check buy working properly", async () => {
        const pepeAmount = "20000000000000000000";
        const lastPepeAmount = await pepeToken.balanceOf(user.address);
        const expectedPepayAmount = await pepay.getBuyJay(pepeAmount);
        const lastPepayAmount = await pepay.balanceOf(user.address);

        tx = await pepay.connect(user).buy(user.address, pepeAmount);
        await tx.wait();

        const currentPepayAmount = await pepay.balanceOf(user.address);
        const currentPepeAmount = await pepeToken.balanceOf(user.address);
        console.log(currentPepeAmount, lastPepeAmount);
        console.log(currentPepayAmount, lastPepayAmount, expectedPepayAmount);
        expect(Math.abs(currentPepayAmount.toNumber() - lastPepayAmount.toNumber())).to.equal(expectedPepayAmount);
    });

    it("Check sell working properly", async () => {
        const pepayAmount = '900000179999';

        tx = await pepay.connect(user).buy(user.address , ethers.utils.parseEther("100000000.0"));
        await tx.wait();

        const lastPepayBalance = await pepay.balanceOf(user.address);
        console.log(lastPepayBalance);
        const lastPepeBalance = await pepeToken.balanceOf(user.address);
        const expectedPepeAmount = await pepay.getSellJay(pepayAmount);

        tx = await pepay.connect(user).sell(pepayAmount);
        await tx.wait();

        const currentPepayAmount = await pepay.balanceOf(user.address);
        const currentPepeBalance = await pepeToken.balanceOf(user.address);
        expect(lastPepayBalance.sub(currentPepayAmount)).to.equal(pepayAmount);
        expect(currentPepeBalance.sub(lastPepeBalance).lt(expectedPepeAmount));
    });

    it("Check the fee sent correctly", async () => {
        const lastPepeAmount = await pepeToken.balanceOf(pepayFeeSpliter.address);

        tx = await pepay.connect(user).buy(user.address, await ethers.utils.parseEther("20000000000.0"));
        await tx.wait();

        const currentPepeAmount = await pepeToken.balanceOf(pepayFeeSpliter.address);
        expect(currentPepeAmount.sub(lastPepeAmount)).to.equal(await ethers.utils.parseEther("800000000.0"));
    });

    it('Check if pepayFeeSplitter working correctly', async () => {
        const lastPepeAmount = await pepeToken.balanceOf(pepayFeeSpliter.address);

        tx = await pepayFeeSpliter.connect(deployer).splitFees();
        await tx.wait();

        const currentPepeAmount = await pepeToken.balanceOf(pepayFeeSpliter.address);
        console.log({lastPepeAmount, currentPepeAmount});
        expect(lastPepeAmount.gt(0));
        expect(currentPepeAmount.lt(10));
    });

    it("Check liquidityStaking deposit function working correctly", async () => {
        const depositAmount = await ethers.utils.parseEther("100.0");
        tx = await pepayLiquidityStaking.connect(user).deposit(depositAmount);
        await tx.wait();
        const rewardAmount = await pepayLiquidityStaking.getReward(user.address);
        expect(rewardAmount.gt(0));
    });

    it("Check liquidityStaking withdraw function working correctly", async () => {
        const withdrawAmount = await ethers.utils.parseEther("50.0");
        tx = await pepayLiquidityStaking.connect(user).withdraw(withdrawAmount);
        await tx.wait();
        const rewardAmount = await pepayLiquidityStaking.getReward(user.address);
        expect(rewardAmount.gt(0));
    });
});