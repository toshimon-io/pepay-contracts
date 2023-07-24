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

export interface JayFeeSplitterInterface extends utils.Interface {
  functions: {
    "MIN()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setLPWallet(address)": FunctionFragment;
    "setNFTWallet(address)": FunctionFragment;
    "setTEAMWallet(address)": FunctionFragment;
    "splitFees()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MIN"
      | "owner"
      | "renounceOwnership"
      | "setLPWallet"
      | "setNFTWallet"
      | "setTEAMWallet"
      | "splitFees"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "MIN", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
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

  decodeFunctionResult(functionFragment: "MIN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
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

export interface JayFeeSplitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JayFeeSplitterInterface;

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
    MIN(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
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

  MIN(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
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
    MIN(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

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
    MIN(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
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
    MIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
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
