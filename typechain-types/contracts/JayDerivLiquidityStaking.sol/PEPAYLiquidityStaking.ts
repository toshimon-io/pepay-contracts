/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface PEPAYLiquidityStakingInterface extends utils.Interface {
  functions: {
    "FEE_ADDRESS()": FunctionFragment;
    "START_DATE()": FunctionFragment;
    "backingToken()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "getAPY()": FunctionFragment;
    "getBal()": FunctionFragment;
    "getReward(address)": FunctionFragment;
    "getRewardPerTokenStored()": FunctionFragment;
    "getStaked(address)": FunctionFragment;
    "getTotalStaked()": FunctionFragment;
    "init()": FunctionFragment;
    "initalize(uint256,address[],uint256[])": FunctionFragment;
    "liquidityToken()": FunctionFragment;
    "owner()": FunctionFragment;
    "previusRewardTotal()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardPerTokenStored()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "setFeeAddress(address)": FunctionFragment;
    "setStart()": FunctionFragment;
    "start()": FunctionFragment;
    "totalAmountStaked()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FEE_ADDRESS"
      | "START_DATE"
      | "backingToken"
      | "deposit"
      | "getAPY"
      | "getBal"
      | "getReward"
      | "getRewardPerTokenStored"
      | "getStaked"
      | "getTotalStaked"
      | "init"
      | "initalize"
      | "liquidityToken"
      | "owner"
      | "previusRewardTotal"
      | "renounceOwnership"
      | "rewardPerTokenStored"
      | "rewardToken"
      | "setFeeAddress"
      | "setStart"
      | "start"
      | "totalAmountStaked"
      | "transferOwnership"
      | "userInfo"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "FEE_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "START_DATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "backingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getAPY", values?: undefined): string;
  encodeFunctionData(functionFragment: "getBal", values?: undefined): string;
  encodeFunctionData(functionFragment: "getReward", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getRewardPerTokenStored",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getStaked", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getTotalStaked",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "init", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initalize",
    values: [BigNumberish, string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "previusRewardTotal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setStart", values?: undefined): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalAmountStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "userInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "FEE_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "START_DATE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "backingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAPY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStaked", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initalize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "previusRewardTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setStart", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAmountStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "Harvest(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface DepositEventObject {
  user: string;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface HarvestEventObject {
  user: string;
  harvestedAmount: BigNumber;
}
export type HarvestEvent = TypedEvent<[string, BigNumber], HarvestEventObject>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface WithdrawEventObject {
  user: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface PEPAYLiquidityStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PEPAYLiquidityStakingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FEE_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    START_DATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    backingToken(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getAPY(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBal(overrides?: CallOverrides): Promise<[BigNumber]>;

    getReward(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStaked(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    init(overrides?: CallOverrides): Promise<[boolean]>;

    initalize(
      _initialLPs: BigNumberish,
      _addresses: string[],
      _balances: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    liquidityToken(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    previusRewardTotal(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    setFeeAddress(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setStart(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    start(overrides?: CallOverrides): Promise<[boolean]>;

    totalAmountStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        shares: BigNumber;
        rewardPerTokenOnEntry: BigNumber;
      }
    >;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  FEE_ADDRESS(overrides?: CallOverrides): Promise<string>;

  START_DATE(overrides?: CallOverrides): Promise<BigNumber>;

  backingToken(overrides?: CallOverrides): Promise<string>;

  deposit(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getAPY(overrides?: CallOverrides): Promise<BigNumber>;

  getBal(overrides?: CallOverrides): Promise<BigNumber>;

  getReward(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

  getRewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

  getStaked(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

  getTotalStaked(overrides?: CallOverrides): Promise<BigNumber>;

  init(overrides?: CallOverrides): Promise<boolean>;

  initalize(
    _initialLPs: BigNumberish,
    _addresses: string[],
    _balances: BigNumberish[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  liquidityToken(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  previusRewardTotal(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  setFeeAddress(
    _address: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setStart(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  start(overrides?: CallOverrides): Promise<boolean>;

  totalAmountStaked(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      shares: BigNumber;
      rewardPerTokenOnEntry: BigNumber;
    }
  >;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    FEE_ADDRESS(overrides?: CallOverrides): Promise<string>;

    START_DATE(overrides?: CallOverrides): Promise<BigNumber>;

    backingToken(overrides?: CallOverrides): Promise<string>;

    deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getAPY(overrides?: CallOverrides): Promise<BigNumber>;

    getBal(overrides?: CallOverrides): Promise<BigNumber>;

    getReward(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    getStaked(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTotalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    init(overrides?: CallOverrides): Promise<boolean>;

    initalize(
      _initialLPs: BigNumberish,
      _addresses: string[],
      _balances: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    liquidityToken(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    previusRewardTotal(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    setFeeAddress(_address: string, overrides?: CallOverrides): Promise<void>;

    setStart(overrides?: CallOverrides): Promise<void>;

    start(overrides?: CallOverrides): Promise<boolean>;

    totalAmountStaked(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        shares: BigNumber;
        rewardPerTokenOnEntry: BigNumber;
      }
    >;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Deposit(address,uint256)"(
      user?: string | null,
      amount?: null
    ): DepositEventFilter;
    Deposit(user?: string | null, amount?: null): DepositEventFilter;

    "Harvest(address,uint256)"(
      user?: string | null,
      harvestedAmount?: null
    ): HarvestEventFilter;
    Harvest(user?: string | null, harvestedAmount?: null): HarvestEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Withdraw(address,uint256)"(
      user?: string | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(user?: string | null, amount?: null): WithdrawEventFilter;
  };

  estimateGas: {
    FEE_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    START_DATE(overrides?: CallOverrides): Promise<BigNumber>;

    backingToken(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getAPY(overrides?: CallOverrides): Promise<BigNumber>;

    getBal(overrides?: CallOverrides): Promise<BigNumber>;

    getReward(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    getStaked(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTotalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    init(overrides?: CallOverrides): Promise<BigNumber>;

    initalize(
      _initialLPs: BigNumberish,
      _addresses: string[],
      _balances: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    liquidityToken(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    previusRewardTotal(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeAddress(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setStart(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    totalAmountStaked(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FEE_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    START_DATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    backingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getAPY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReward(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardPerTokenStored(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStaked(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initalize(
      _initialLPs: BigNumberish,
      _addresses: string[],
      _balances: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    liquidityToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    previusRewardTotal(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    rewardPerTokenStored(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeAddress(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setStart(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    start(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAmountStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
