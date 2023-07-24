/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../common";

export interface JayDerivFeeSplitterInterface extends utils.Interface {
  functions: {
    "JAY_WALLET()": FunctionFragment;
    "LP_WALLET()": FunctionFragment;
    "MIN()": FunctionFragment;
    "NFT_WALLET()": FunctionFragment;
    "TEAM_WALLET()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "setJAYWallet(address)": FunctionFragment;
    "setLPWallet(address)": FunctionFragment;
    "setNFTWallet(address)": FunctionFragment;
    "setTEAMWallet(address)": FunctionFragment;
    "splitFees()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "JAY_WALLET"
      | "LP_WALLET"
      | "MIN"
      | "NFT_WALLET"
      | "TEAM_WALLET"
      | "owner"
      | "renounceOwnership"
      | "rewardToken"
      | "setJAYWallet"
      | "setLPWallet"
      | "setNFTWallet"
      | "setTEAMWallet"
      | "splitFees"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "JAY_WALLET",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "LP_WALLET", values?: undefined): string;
  encodeFunctionData(functionFragment: "MIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "NFT_WALLET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TEAM_WALLET",
    values?: undefined
  ): string;
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
    functionFragment: "setJAYWallet",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setLPWallet", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setNFTWallet",
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

  decodeFunctionResult(functionFragment: "JAY_WALLET", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "LP_WALLET", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MIN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "NFT_WALLET", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TEAM_WALLET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setJAYWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLPWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNFTWallet",
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
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

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

export interface JayDerivFeeSplitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JayDerivFeeSplitterInterface;

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
    JAY_WALLET(overrides?: CallOverrides): Promise<[string]>;

    LP_WALLET(overrides?: CallOverrides): Promise<[string]>;

    MIN(overrides?: CallOverrides): Promise<[BigNumber]>;

    NFT_WALLET(overrides?: CallOverrides): Promise<[string]>;

    TEAM_WALLET(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    setJAYWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setLPWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setNFTWallet(
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

  JAY_WALLET(overrides?: CallOverrides): Promise<string>;

  LP_WALLET(overrides?: CallOverrides): Promise<string>;

  MIN(overrides?: CallOverrides): Promise<BigNumber>;

  NFT_WALLET(overrides?: CallOverrides): Promise<string>;

  TEAM_WALLET(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  setJAYWallet(
    _address: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setLPWallet(
    _address: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setNFTWallet(
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
    JAY_WALLET(overrides?: CallOverrides): Promise<string>;

    LP_WALLET(overrides?: CallOverrides): Promise<string>;

    MIN(overrides?: CallOverrides): Promise<BigNumber>;

    NFT_WALLET(overrides?: CallOverrides): Promise<string>;

    TEAM_WALLET(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    setJAYWallet(_address: string, overrides?: CallOverrides): Promise<void>;

    setLPWallet(_address: string, overrides?: CallOverrides): Promise<void>;

    setNFTWallet(_address: string, overrides?: CallOverrides): Promise<void>;

    setTEAMWallet(_address: string, overrides?: CallOverrides): Promise<void>;

    splitFees(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    JAY_WALLET(overrides?: CallOverrides): Promise<BigNumber>;

    LP_WALLET(overrides?: CallOverrides): Promise<BigNumber>;

    MIN(overrides?: CallOverrides): Promise<BigNumber>;

    NFT_WALLET(overrides?: CallOverrides): Promise<BigNumber>;

    TEAM_WALLET(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    setJAYWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setLPWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setNFTWallet(
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
    JAY_WALLET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LP_WALLET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NFT_WALLET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TEAM_WALLET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setJAYWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setLPWallet(
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setNFTWallet(
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
