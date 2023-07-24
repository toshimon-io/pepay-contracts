/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  JayFeeSplitter,
  JayFeeSplitterInterface,
} from "../../contracts/JayFeeSplitter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "MIN",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setLPWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setNFTWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setTEAMWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "splitFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003960201b60201c565b61004160201b60201c565b60018081905550610105565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610ac9806101146000396000f3fe60806040526004361061007f5760003560e01c80637425beed1161004e5780637425beed1461011f5780638da5cb5b14610148578063f2fde38b14610173578063f61510891461019c57610086565b806329de6d201461008b57806337a7f2b7146100b45780633b0aacbc146100df578063715018a61461010857610086565b3661008657005b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad919061077b565b6101b3565b005b3480156100c057600080fd5b506100c9610238565b6040516100d691906107c1565b60405180910390f35b3480156100eb57600080fd5b506101066004803603810190610101919061077b565b610243565b005b34801561011457600080fd5b5061011d6102c8565b005b34801561012b57600080fd5b506101466004803603810190610141919061077b565b6102dc565b005b34801561015457600080fd5b5061015d610361565b60405161016a91906107eb565b60405180910390f35b34801561017f57600080fd5b5061019a6004803603810190610195919061077b565b61038a565b005b3480156101a857600080fd5b506101b161040d565b005b6101bb6104c5565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101f457600080fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b66038d7ea4c6800081565b61024b6104c5565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361028457600080fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6102d06104c5565b6102da6000610543565b565b6102e46104c5565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361031d57600080fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6103926104c5565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610401576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f890610889565b60405180910390fd5b61040a81610543565b50565b610415610607565b600060034761042491906108d8565b905066038d7ea4c680008111156104ba57610461600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682610656565b61048d600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682610656565b6104b9600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682610656565b5b506104c3610707565b565b6104cd610710565b73ffffffffffffffffffffffffffffffffffffffff166104eb610361565b73ffffffffffffffffffffffffffffffffffffffff1614610541576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053890610955565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60026001540361064c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610643906109c1565b60405180910390fd5b6002600181905550565b60008273ffffffffffffffffffffffffffffffffffffffff168260405161067c90610a12565b60006040518083038185875af1925050503d80600081146106b9576040519150601f19603f3d011682016040523d82523d6000602084013e6106be565b606091505b5050905080610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f990610a73565b60405180910390fd5b505050565b60018081905550565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107488261071d565b9050919050565b6107588161073d565b811461076357600080fd5b50565b6000813590506107758161074f565b92915050565b60006020828403121561079157610790610718565b5b600061079f84828501610766565b91505092915050565b6000819050919050565b6107bb816107a8565b82525050565b60006020820190506107d660008301846107b2565b92915050565b6107e58161073d565b82525050565b600060208201905061080060008301846107dc565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610873602683610806565b915061087e82610817565b604082019050919050565b600060208201905081810360008301526108a281610866565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006108e3826107a8565b91506108ee836107a8565b9250826108fe576108fd6108a9565b5b828204905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061093f602083610806565b915061094a82610909565b602082019050919050565b6000602082019050818103600083015261096e81610932565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006109ab601f83610806565b91506109b682610975565b602082019050919050565b600060208201905081810360008301526109da8161099e565b9050919050565b600081905092915050565b50565b60006109fc6000836109e1565b9150610a07826109ec565b600082019050919050565b6000610a1d826109ef565b9150819050919050565b7f455448205472616e73666572206661696c65642e000000000000000000000000600082015250565b6000610a5d601483610806565b9150610a6882610a27565b602082019050919050565b60006020820190508181036000830152610a8c81610a50565b905091905056fea264697066735822122052da916b7ce79040a01e40534b71b35730a2471776239beaa953b8a79266573864736f6c63430008100033";

type JayFeeSplitterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JayFeeSplitterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JayFeeSplitter__factory extends ContractFactory {
  constructor(...args: JayFeeSplitterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<JayFeeSplitter> {
    return super.deploy(overrides || {}) as Promise<JayFeeSplitter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): JayFeeSplitter {
    return super.attach(address) as JayFeeSplitter;
  }
  override connect(signer: Signer): JayFeeSplitter__factory {
    return super.connect(signer) as JayFeeSplitter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JayFeeSplitterInterface {
    return new utils.Interface(_abi) as JayFeeSplitterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JayFeeSplitter {
    return new Contract(address, _abi, signerOrProvider) as JayFeeSplitter;
  }
}