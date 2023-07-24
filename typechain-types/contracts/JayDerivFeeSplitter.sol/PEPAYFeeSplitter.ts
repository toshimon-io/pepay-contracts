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

export interface PEPAYFeeSplitterInterface extends utils.Interface {
  functions: {
    "FEE_BASE_1000()": FunctionFragment;
    "MIN()": FunctionFragment;
    "OP_FEE()": FunctionFragment;
    "STAKER_FEE()": FunctionFragment;
    "TEAM_FEE()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "setMin(uint256)": FunctionFragment;
    "setOPWallet(address)": FunctionFragment;
    "setSTAKERWallet(address)": FunctionFragment;
    "setTEAMWallet(address)": FunctionFragment;
    "splitFees()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FEE_BASE_1000"
      | "MIN"
      | "OP_FEE"
      | "STAKER_FEE"
      | "TEAM_FEE"
      | "owner"
      | "renounceOwnership"
      | "rewardToken"
      | "setMin"
      | "setOPWallet"
      | "setSTAKERWallet"
      | "setTEAMWallet"
      | "splitFees"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "FEE_BASE_1000",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MIN", values?: undefined): string;
  encodeFunctionData(functionFragment: "OP_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "STAKER_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TEAM_FEE", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMin",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOPWallet", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setSTAKERWallet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTEAMWallet",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "splitFees", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "FEE_BASE_1000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MIN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "OP_FEE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "STAKER_FEE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TEAM_FEE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOPWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSTAKERWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTEAMWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "splitFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "MinValueChanged(uint256)": EventFragment;
    "OPWalletChanged(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "StakeWalletChanged(address)": EventFragment;
    "TeamWalletChanged(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MinValueChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OPWalletChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeWalletChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TeamWalletChanged"): EventFragment;
}

export interface MinValueChangedEventObject {
  min: BigNumber;
}
export type MinValueChangedEvent = TypedEvent<
  [BigNumber],
  MinValueChangedEventObject
>;

export type MinValueChangedEventFilter = TypedEventFilter<MinValueChangedEvent>;

export interface OPWalletChangedEventObject {
  teamWallet: string;
}
export type OPWalletChangedEvent = TypedEvent<
  [string],
  OPWalletChangedEventObject
>;

export type OPWalletChangedEventFilter = TypedEventFilter<OPWalletChangedEvent>;

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

export interface StakeWalletChangedEventObject {
  teamWallet: string;
}
export type StakeWalletChangedEvent = TypedEvent<
  [string],
  StakeWalletChangedEventObject
>;

export type StakeWalletChangedEventFilter =
  TypedEventFilter<StakeWalletChangedEvent>;

export interface TeamWalletChangedEventObject {
  teamWallet: string;
}
export type TeamWalletChangedEvent = TypedEvent<
  [string],
  TeamWalletChangedEventObject
>;

export type TeamWalletChangedEventFilter =
  TypedEventFilter<TeamWalletChangedEvent>;

export interface PEPAYFeeSplitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PEPAYFeeSplitterInterface;

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
    FEE_BASE_1000(overrides?: CallOverrides): Promise<[number]>;

    MIN(overrides?: CallOverrides): Promise<[BigNumber]>;

    OP_FEE(overrides?: CallOverrides): Promise<[number]>;

    STAKER_FEE(overrides?: CallOverrides): Promise<[number]>;

    TEAM_FEE(overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    setMin(
      min: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setOPWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setSTAKERWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setTEAMWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    splitFees(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  FEE_BASE_1000(overrides?: CallOverrides): Promise<number>;

  MIN(overrides?: CallOverrides): Promise<BigNumber>;

  OP_FEE(overrides?: CallOverrides): Promise<number>;

  STAKER_FEE(overrides?: CallOverrides): Promise<number>;

  TEAM_FEE(overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  setMin(
    min: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setOPWallet(
    _address: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setSTAKERWallet(
    _address: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setTEAMWallet(
    _address: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  splitFees(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    FEE_BASE_1000(overrides?: CallOverrides): Promise<number>;

    MIN(overrides?: CallOverrides): Promise<BigNumber>;

    OP_FEE(overrides?: CallOverrides): Promise<number>;

    STAKER_FEE(overrides?: CallOverrides): Promise<number>;

    TEAM_FEE(overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    setMin(min: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setOPWallet(_address: string, overrides?: CallOverrides): Promise<void>;

    setSTAKERWallet(_address: string, overrides?: CallOverrides): Promise<void>;

    setTEAMWallet(_address: string, overrides?: CallOverrides): Promise<void>;

    splitFees(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MinValueChanged(uint256)"(min?: null): MinValueChangedEventFilter;
    MinValueChanged(min?: null): MinValueChangedEventFilter;

    "OPWalletChanged(address)"(teamWallet?: null): OPWalletChangedEventFilter;
    OPWalletChanged(teamWallet?: null): OPWalletChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "StakeWalletChanged(address)"(
      teamWallet?: null
    ): StakeWalletChangedEventFilter;
    StakeWalletChanged(teamWallet?: null): StakeWalletChangedEventFilter;

    "TeamWalletChanged(address)"(
      teamWallet?: null
    ): TeamWalletChangedEventFilter;
    TeamWalletChanged(teamWallet?: null): TeamWalletChangedEventFilter;
  };

  estimateGas: {
    FEE_BASE_1000(overrides?: CallOverrides): Promise<BigNumber>;

    MIN(overrides?: CallOverrides): Promise<BigNumber>;

    OP_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    STAKER_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    TEAM_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    setMin(
      min: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setOPWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setSTAKERWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setTEAMWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    splitFees(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FEE_BASE_1000(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OP_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STAKER_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TEAM_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMin(
      min: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setOPWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setSTAKERWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setTEAMWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    splitFees(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}