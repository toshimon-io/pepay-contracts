// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { expect } from "chai";
import hre, { ethers, network } from 'hardhat';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { PEPAY } from "../typechain/jayDerivSolSol";

import { BigNumber, BigNumberish } from "ethers";

import { PEPAYLiquidityStaking } from "../typechain/JayDerivLiquidityStaking";
import { PEPAYFeeSplitter } from "../typechain/JayDerivFeeSplitter";
import { balances } from "../migData/balances";
import { ERC } from "../typechain/MockERC20";
import * as dotenv from "dotenv";
var fs = require('fs');
dotenv.config();

function rng(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const verify = async (addr: string, contract: string, args: any[]) => {
  try {
    await hre.run('verify:verify', {
      address: addr,
      contract: contract,
      constructorArguments: args
    });
  } catch (ex: any) {
    if (ex.toString().indexOf('Already Verified') == -1) {
      throw ex;
    }
  }
};

async function main() {
  const addressFile = 'address.md';

  let LPTOKEN: ERC;
  let PEPE: ERC;
  let PEPAY: PEPAY;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addr3: SignerWithAddress;
  let addr4: SignerWithAddress;
  let PEPAYLiquidityStaking: PEPAYLiquidityStaking;
  fs.readFile('env.json', 'utf8', async function readFileCallback(err: any, data: string | Buffer){
    if (err){
        console.log(err);
    } else {
    
      [owner] = await ethers.getSigners();

  const MockPEPEFact = await ethers.getContractFactory('MockERC20');

  PEPE = (await MockPEPEFact.connect(
    owner
  ).deploy())
  await PEPE.deployed();
  
  // LP
  const MockLPTOKENFact = await ethers.getContractFactory('MockERC20');

  LPTOKEN = (await MockLPTOKENFact.connect(
    owner
  ).deploy());
  await LPTOKEN.deployed();

  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  
  PEPAY = //await 
  await (
    await ethers.getContractFactory("PEPAY", owner)
  ).deploy("10000000000000000000000000", PEPE.address);

  const PEPAYFeeSplitter = await (
    await ethers.getContractFactory("PEPAYFeeSplitter", owner)
  ).deploy(PEPE.address, { gasLimit: '3000000'});

  console.log("Deployed Jay");

 const PEPAYLiquidityStaking = await (
    await ethers.getContractFactory("PEPAYLiquidityStaking", owner)
  ).deploy(LPTOKEN.address, PEPE.address, PEPAY.address, { gasLimit: '3000000' });
  console.log("Deployed PEPAYLiquidityStaking");

  await (
    await LPTOKEN.connect(owner).approve(
      PEPAYLiquidityStaking.address,
      "10000000000000000000000000000000000",
      { gasLimit: '3000000' }
    )
    
  ).wait();
  console.log("APPROVED: UNIV2");

  await (
    await PEPAY.connect(owner).setFeeAddress(PEPAYFeeSplitter.address, { gasLimit: '3000000' })
  ).wait();
  console.log("FEE ADDRESS SET: JAY > Jay Fee Splitter");
  await (
    await PEPAYFeeSplitter.connect(owner).setSTAKERWallet(
      PEPAYLiquidityStaking.address,
      { gasLimit: '3000000' }
    )
  ).wait();

  await (
    await PEPAYFeeSplitter.connect(owner).setOPWallet('0x4D4A6aff095F40070A072FC877d9293D1341E628', { gasLimit: '3000000' })
  ).wait();
  console.log("FEE ADDRESS SET: Jay Fee Splitter > Jay Liquidity Staking");

  await (
    await PEPAYLiquidityStaking.connect(owner).setFeeAddress(
      PEPAYFeeSplitter.address,
      { gasLimit: '3000000' }
    )
  ).wait();
  await (
    await PEPAYFeeSplitter.connect(owner).setTEAMWallet(
      '0x4D4A6aff095F40070A072FC877d9293D1341E628',
      { gasLimit: '3000000' }
    )
  ).wait();
  let tx;
  const erc20MintAmount = await ethers.utils.parseEther("10000000000000000000.0");
  const erc20AllowanceAmount = await ethers.utils.parseEther("10000000000000000000.0");

  tx = await PEPE.connect(owner).freeMint(erc20MintAmount);
  await tx.wait();
  tx = await LPTOKEN.connect(owner).freeMint(erc20MintAmount);
  await tx.wait();
  tx = await PEPE.connect(owner).freeMint(erc20MintAmount);
  await tx.wait();

  tx = await PEPE.connect(owner).transfer(PEPAY.address, erc20AllowanceAmount);
  await tx.wait();

  tx = await PEPE
      .connect(owner)
      .approve(PEPAY.address, erc20AllowanceAmount);
  await tx.wait();

  tx = await PEPAY.setFeeAddress(PEPAYFeeSplitter.address);
  await tx.wait();

  tx = await PEPAYLiquidityStaking.connect(owner).setStart();
  await tx.wait();


  tx = await PEPAYLiquidityStaking.setFeeAddress(PEPAYFeeSplitter.address);
  await tx.wait();

  tx = await PEPAYFeeSplitter.connect(owner).setTEAMWallet(owner.address);
  await tx.wait();
  tx = await PEPAYFeeSplitter.connect(owner).setSTAKERWallet(PEPAYLiquidityStaking.address);
  await tx.wait();
  tx = await PEPAYFeeSplitter.connect(owner).setOPWallet(owner.address);
  await tx.wait();

  tx = await LPTOKEN.connect(owner).approve(PEPAYLiquidityStaking.address, erc20AllowanceAmount);
  await tx.wait();

  tx = await PEPAY.connect(owner).setStart();
  await tx.wait();
  console.log("FEE ADDRESS SET: Jay Liquidity Staking > Jay Fee Splitter");

 const writeAddr = (addr: string, name: string) => {
    fs.appendFileSync(
      addressFile,
      `${name}: ${addr}<br/>`
    );
  };

  if (fs.existsSync(addressFile)) {
    fs.rmSync(addressFile);
  }

  fs.appendFileSync(
    addressFile,
    'This file contains the latest test deployment addresses in the Goerli network<br/>'
  );
  writeAddr(PEPE.address, 'MockPEPE');
  writeAddr(LPTOKEN.address, 'MockLPTOKEN');
  writeAddr(PEPAY.address, 'PEPAY');
  writeAddr(PEPAYFeeSplitter.address, 'PEPAYFeeSplitter');
  writeAddr(PEPAYLiquidityStaking.address, 'PEPAYLiquidityStaking');

  console.log('Deployments done, waiting for etherscan verifications');
  // Wait for the contracts to be propagated inside Etherscan
  await new Promise((f) => setTimeout(f, 20000));

  await verify(PEPE.address, 'contracts/MockERC20.sol:MockERC20', []);
  await verify(LPTOKEN.address, 'contracts/MockERC20.sol:MockERC20', []);
  await verify(PEPAY.address, 'contracts/JayDeriv.sol:PEPAY', ["10000000000000000000000000", PEPE.address]);
  await verify(PEPAYFeeSplitter.address, 'contracts/JayDerivFeeSplitter.sol:PEPAYFeeSplitter', [PEPE.address]);
  await verify(PEPAYLiquidityStaking.address, 'contracts/JayDerivLiquidityStaking.sol:PEPAYLiquidityStaking', [LPTOKEN.address, PEPE.address, PEPAY.address]);

  await (
    await PEPAYLiquidityStaking.connect(owner).setStart()
  ).wait();

  console.log("___________________________");
    }});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
