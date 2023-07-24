/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PEPAYLiquidityStaking,
  PEPAYLiquidityStakingInterface,
} from "../../../contracts/JayDerivLiquidityStaking.sol/PEPAYLiquidityStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_liquidityToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_backingToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "harvestedAmount",
        type: "uint256",
      },
    ],
    name: "Harvest",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "FEE_ADDRESS",
    outputs: [
      {
        internalType: "contract PEPAYFeeSplitter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "START_DATE",
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
    name: "backingToken",
    outputs: [
      {
        internalType: "contract PEPAY",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAPY",
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
    name: "getBal",
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
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getReward",
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
    name: "getRewardPerTokenStored",
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
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getStaked",
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
    name: "getTotalStaked",
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
    name: "init",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialLPs",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_balances",
        type: "uint256[]",
      },
    ],
    name: "initalize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
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
    name: "previusRewardTotal",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerTokenStored",
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
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "setFeeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setStart",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "start",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAmountStaked",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerTokenOnEntry",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
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
  "0x6101006040523480156200001257600080fd5b506040516200316e3803806200316e83398181016040528101906200003891906200039b565b600160008190555062000060620000546200026360201b60201c565b6200026b60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620000d2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000c99062000458565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000144576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200013b9062000458565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001b6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001ad9062000458565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff168152505042608081815250505050506200047a565b600033905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003638262000336565b9050919050565b620003758162000356565b81146200038157600080fd5b50565b60008151905062000395816200036a565b92915050565b600080600060608486031215620003b757620003b662000331565b5b6000620003c78682870162000384565b9350506020620003da8682870162000384565b9250506040620003ed8682870162000384565b9150509250925092565b600082825260208201905092915050565b7f63616e6e6f742073657420746f20307830206164647265737300000000000000600082015250565b600062000440601983620003f7565b91506200044d8262000408565b602082019050919050565b60006020820190508181036000830152620004738162000431565b9050919050565b60805160a05160c05160e051612c516200051d600039600081816108cd0152818161129c01526113e60152600081816105e001528181610c2b01528181610cfb01528181610f9f0152818161106f015281816115880152818161168701526119ee015260008181610761015281816108a901528181610a9501528181610eb70152818161120901526112d801526000818161083901526113860152612c516000f3fe60806040526004361061016a5760003560e01c80638d869342116100d1578063df136d651161008a578063eb1edd6111610064578063eb1edd6114610504578063f2fde38b1461052f578063f7c618c114610558578063fe961f611461058357610171565b8063df136d6514610483578063e1c7392a146104ae578063e34d5d27146104d957610171565b80638d869342146103715780638da5cb5b1461039c578063b6b55f25146103c7578063be9a6555146103f0578063c00007b01461041b578063d2cbf7ad1461045857610171565b8063399080ec11610123578063399080ec1461027557806343cd8f7e146102b257806347e621b7146102dd57806354cde9f814610308578063715018a6146103315780638705fcd41461034857610171565b80630917e776146101765780631959a002146101a157806325caa262146101df5780632e1a7d4d1461020a57806335975a3714610233578063372c65331461024a57610171565b3661017157005b600080fd5b34801561018257600080fd5b5061018b6105ae565b6040516101989190611ec2565b60405180910390f35b3480156101ad57600080fd5b506101c860048036038101906101c39190611f4f565b6105b8565b6040516101d6929190611f7c565b60405180910390f35b3480156101eb57600080fd5b506101f46105dc565b6040516102019190611ec2565b60405180910390f35b34801561021657600080fd5b50610231600480360381019061022c9190611fd1565b61067d565b005b34801561023f57600080fd5b50610248610812565b005b34801561025657600080fd5b5061025f610837565b60405161026c9190611ec2565b60405180910390f35b34801561028157600080fd5b5061029c60048036038101906102979190611f4f565b61085b565b6040516102a99190611ec2565b60405180910390f35b3480156102be57600080fd5b506102c76108a7565b6040516102d4919061205d565b60405180910390f35b3480156102e957600080fd5b506102f26108cb565b6040516102ff9190612099565b60405180910390f35b34801561031457600080fd5b5061032f600480360381019061032a91906122d0565b6108ef565b005b34801561033d57600080fd5b50610346610b3b565b005b34801561035457600080fd5b5061036f600480360381019061036a9190611f4f565b610b4f565b005b34801561037d57600080fd5b50610386610c0a565b6040516103939190611ec2565b60405180910390f35b3480156103a857600080fd5b506103b1610dd7565b6040516103be919061236a565b60405180910390f35b3480156103d357600080fd5b506103ee60048036038101906103e99190611fd1565b610e01565b005b3480156103fc57600080fd5b50610405610f69565b60405161041291906123a0565b60405180910390f35b34801561042757600080fd5b50610442600480360381019061043d9190611f4f565b610f7c565b60405161044f9190611ec2565b60405180910390f35b34801561046457600080fd5b5061046d6111fe565b60405161047a9190611ec2565b60405180910390f35b34801561048f57600080fd5b506104986114be565b6040516104a59190611ec2565b60405180910390f35b3480156104ba57600080fd5b506104c36114c4565b6040516104d091906123a0565b60405180910390f35b3480156104e557600080fd5b506104ee6114d7565b6040516104fb9190611ec2565b60405180910390f35b34801561051057600080fd5b506105196114dd565b60405161052691906123dc565b60405180910390f35b34801561053b57600080fd5b5061055660048036038101906105519190611f4f565b611503565b005b34801561056457600080fd5b5061056d611586565b60405161057a919061205d565b60405180910390f35b34801561058f57600080fd5b506105986115aa565b6040516105a59190611ec2565b60405180910390f35b6000600454905090565b60066020528060005260406000206000915090508060000154908060010154905082565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610637919061236a565b602060405180830381865afa158015610654573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610678919061240c565b905090565b6106856115b0565b600760019054906101000a900460ff166106d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cb90612496565b60405180910390fd5b60006106de6115ff565b905081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825461073291906124e5565b9250508190555061074161187e565b816004600082825461075391906124e5565b925050819055506107a533837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166119619092919063ffffffff16565b60008111156107b8576107b7816119e7565b5b3373ffffffffffffffffffffffffffffffffffffffff167f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364836040516107fe9190611ec2565b60405180910390a25061080f611a35565b50565b61081a611a3f565b6001600760016101000a81548160ff021916908315150217905550565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6108f7611a3f565b600760009054906101000a900460ff1615610947576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093e90612565565b60405180910390fd5b6001600760006101000a81548160ff0219169083151502179055506000808351905060005b81811015610a4957604051806040016040528085838151811061099257610991612585565b5b602002602001015181526020016000815250600660008784815181106109bb576109ba612585565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010155905050838181518110610a2757610a26612585565b5b602002602001015183610a3a91906125b4565b9250808060010191505061096c565b50848214610a8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8390612634565b60405180910390fd5b816004819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b8152600401610af093929190612654565b6020604051808303816000875af1158015610b0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3391906126b7565b505050505050565b610b43611a3f565b610b4d6000611abd565b565b610b57611a3f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610bc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bbd90612730565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806004541115610dcf57600454670de0b6b3a7640000600554600460027f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401610ca4919061236a565b602060405180830381865afa158015610cc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce5919061240c565b610cef9190612750565b610cf991906127d9565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610d52919061236a565b602060405180830381865afa158015610d6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d93919061240c565b610d9d91906125b4565b610da791906124e5565b610db19190612750565b610dbb91906127d9565b600354610dc891906125b4565b9050610dd4565b600090505b90565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610e096115b0565b6000806004541115610e2457610e1d6115ff565b9050610e35565b600060038190555060006005819055505b81600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610e8791906125b4565b92505081905550610e9661187e565b8160046000828254610ea891906125b4565b92505081905550610efc3330847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611b83909392919063ffffffff16565b6000811115610f0f57610f0e816119e7565b5b3373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c83604051610f559190611ec2565b60405180910390a250610f66611a35565b50565b600760019054906101000a900460ff1681565b60008060045411156111f4576000600454670de0b6b3a7640000600554600460027f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401611018919061236a565b602060405180830381865afa158015611035573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611059919061240c565b6110639190612750565b61106d91906127d9565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016110c6919061236a565b602060405180830381865afa1580156110e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611107919061240c565b61111191906125b4565b61111b91906124e5565b6111259190612750565b61112f91906127d9565b60035461113c91906125b4565b9050670de0b6b3a7640000600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548261119591906124e5565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546111e29190612750565b6111ec91906127d9565b9150506111f9565b600090505b919050565b6000806001905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611272573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611296919061240c565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a082317f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b8152600401611313919061236a565b602060405180830381865afa158015611330573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611354919061240c565b9050600082848360026113679190612750565b6113719190612750565b61137b91906127d9565b905060006018603c807f0000000000000000000000000000000000000000000000000000000000000000426113b091906124e5565b6113ba91906127d9565b6113c491906127d9565b6113ce91906127d9565b90506001816113dd91906125b4565b905060008582847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f5755747611428610c0a565b6040518263ffffffff1660e01b81526004016114449190611ec2565b602060405180830381865afa158015611461573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611485919061240c565b618e946114929190612750565b61149c91906127d9565b6114a691906127d9565b6114b091906127d9565b905080965050505050505090565b60035481565b600760009054906101000a900460ff1681565b60055481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61150b611a3f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361157a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115719061287c565b60405180910390fd5b61158381611abd565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60045481565b6002600054036115f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ec906128e8565b60405180910390fd5b6002600081905550565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f61510896040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561166b57600080fd5b505af115801561167f573d6000803e3d6000fd5b5050505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016116de919061236a565b602060405180830381865afa1580156116fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061171f919061240c565b9050600454670de0b6b3a76400006005548361173b91906124e5565b6117459190612750565b61174f91906127d9565b60035461175c91906125b4565b6003819055506000670de0b6b3a7640000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546003546117bd91906124e5565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461180a9190612750565b61181491906127d9565b9050808261182291906124e5565b6005819055503373ffffffffffffffffffffffffffffffffffffffff167fc9695243a805adb74c91f28311176c65b417e842d5699893cef56d18bfa48cba8260405161186e9190611ec2565b60405180910390a2809250505090565b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015403611915576000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555061195f565b600354600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055505b565b6119e28363a9059cbb60e01b8484604051602401611980929190612908565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611c0c565b505050565b611a3233827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166119619092919063ffffffff16565b50565b6001600081905550565b611a47611cd4565b73ffffffffffffffffffffffffffffffffffffffff16611a65610dd7565b73ffffffffffffffffffffffffffffffffffffffff1614611abb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ab29061297d565b60405180910390fd5b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611c06846323b872dd60e01b858585604051602401611ba493929190612654565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611c0c565b50505050565b6000611c6e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cdc9092919063ffffffff16565b9050600081511480611c90575080806020019051810190611c8f91906126b7565b5b611ccf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cc690612a0f565b60405180910390fd5b505050565b600033905090565b6060611ceb8484600085611cf4565b90509392505050565b606082471015611d39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d3090612aa1565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d629190612b32565b60006040518083038185875af1925050503d8060008114611d9f576040519150601f19603f3d011682016040523d82523d6000602084013e611da4565b606091505b5091509150611db587838387611dc1565b92505050949350505050565b60608315611e23576000835103611e1b57611ddb85611e36565b611e1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e1190612b95565b60405180910390fd5b5b829050611e2e565b611e2d8383611e59565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082511115611e6c5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ea09190612bf9565b60405180910390fd5b6000819050919050565b611ebc81611ea9565b82525050565b6000602082019050611ed76000830184611eb3565b92915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611f1c82611ef1565b9050919050565b611f2c81611f11565b8114611f3757600080fd5b50565b600081359050611f4981611f23565b92915050565b600060208284031215611f6557611f64611ee7565b5b6000611f7384828501611f3a565b91505092915050565b6000604082019050611f916000830185611eb3565b611f9e6020830184611eb3565b9392505050565b611fae81611ea9565b8114611fb957600080fd5b50565b600081359050611fcb81611fa5565b92915050565b600060208284031215611fe757611fe6611ee7565b5b6000611ff584828501611fbc565b91505092915050565b6000819050919050565b600061202361201e61201984611ef1565b611ffe565b611ef1565b9050919050565b600061203582612008565b9050919050565b60006120478261202a565b9050919050565b6120578161203c565b82525050565b6000602082019050612072600083018461204e565b92915050565b60006120838261202a565b9050919050565b61209381612078565b82525050565b60006020820190506120ae600083018461208a565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612102826120b9565b810181811067ffffffffffffffff82111715612121576121206120ca565b5b80604052505050565b6000612134611edd565b905061214082826120f9565b919050565b600067ffffffffffffffff8211156121605761215f6120ca565b5b602082029050602081019050919050565b600080fd5b600061218961218484612145565b61212a565b905080838252602082019050602084028301858111156121ac576121ab612171565b5b835b818110156121d557806121c18882611f3a565b8452602084019350506020810190506121ae565b5050509392505050565b600082601f8301126121f4576121f36120b4565b5b8135612204848260208601612176565b91505092915050565b600067ffffffffffffffff821115612228576122276120ca565b5b602082029050602081019050919050565b600061224c6122478461220d565b61212a565b9050808382526020820190506020840283018581111561226f5761226e612171565b5b835b8181101561229857806122848882611fbc565b845260208401935050602081019050612271565b5050509392505050565b600082601f8301126122b7576122b66120b4565b5b81356122c7848260208601612239565b91505092915050565b6000806000606084860312156122e9576122e8611ee7565b5b60006122f786828701611fbc565b935050602084013567ffffffffffffffff81111561231857612317611eec565b5b612324868287016121df565b925050604084013567ffffffffffffffff81111561234557612344611eec565b5b612351868287016122a2565b9150509250925092565b61236481611f11565b82525050565b600060208201905061237f600083018461235b565b92915050565b60008115159050919050565b61239a81612385565b82525050565b60006020820190506123b56000830184612391565b92915050565b60006123c68261202a565b9050919050565b6123d6816123bb565b82525050565b60006020820190506123f160008301846123cd565b92915050565b60008151905061240681611fa5565b92915050565b60006020828403121561242257612421611ee7565b5b6000612430848285016123f7565b91505092915050565b600082825260208201905092915050565b7f636f6e7472616374206e6f7420696e6974696174656400000000000000000000600082015250565b6000612480601683612439565b915061248b8261244a565b602082019050919050565b600060208201905081810360008301526124af81612473565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006124f082611ea9565b91506124fb83611ea9565b9250828203905081811115612513576125126124b6565b5b92915050565b7f436f6e747261637420616c726561647920696e697469616c697a656400000000600082015250565b600061254f601c83612439565b915061255a82612519565b602082019050919050565b6000602082019050818103600083015261257e81612542565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006125bf82611ea9565b91506125ca83611ea9565b92508282019050808211156125e2576125e16124b6565b5b92915050565b7f546f74616c7320646f6e74206d61746368000000000000000000000000000000600082015250565b600061261e601183612439565b9150612629826125e8565b602082019050919050565b6000602082019050818103600083015261264d81612611565b9050919050565b6000606082019050612669600083018661235b565b612676602083018561235b565b6126836040830184611eb3565b949350505050565b61269481612385565b811461269f57600080fd5b50565b6000815190506126b18161268b565b92915050565b6000602082840312156126cd576126cc611ee7565b5b60006126db848285016126a2565b91505092915050565b7f63616e6e6f742073657420746f20307830206164647265737300000000000000600082015250565b600061271a601983612439565b9150612725826126e4565b602082019050919050565b600060208201905081810360008301526127498161270d565b9050919050565b600061275b82611ea9565b915061276683611ea9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561279f5761279e6124b6565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006127e482611ea9565b91506127ef83611ea9565b9250826127ff576127fe6127aa565b5b828204905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612866602683612439565b91506128718261280a565b604082019050919050565b6000602082019050818103600083015261289581612859565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006128d2601f83612439565b91506128dd8261289c565b602082019050919050565b60006020820190508181036000830152612901816128c5565b9050919050565b600060408201905061291d600083018561235b565b61292a6020830184611eb3565b9392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612967602083612439565b915061297282612931565b602082019050919050565b600060208201905081810360008301526129968161295a565b9050919050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b60006129f9602a83612439565b9150612a048261299d565b604082019050919050565b60006020820190508181036000830152612a28816129ec565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000612a8b602683612439565b9150612a9682612a2f565b604082019050919050565b60006020820190508181036000830152612aba81612a7e565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015612af5578082015181840152602081019050612ada565b60008484015250505050565b6000612b0c82612ac1565b612b168185612acc565b9350612b26818560208601612ad7565b80840191505092915050565b6000612b3e8284612b01565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612b7f601d83612439565b9150612b8a82612b49565b602082019050919050565b60006020820190508181036000830152612bae81612b72565b9050919050565b600081519050919050565b6000612bcb82612bb5565b612bd58185612439565b9350612be5818560208601612ad7565b612bee816120b9565b840191505092915050565b60006020820190508181036000830152612c138184612bc0565b90509291505056fea264697066735822122080591f42f13b3adbc1782ce7a20e6550d3ead8fe9001489d1b35c319577237b064736f6c63430008100033";

type PEPAYLiquidityStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PEPAYLiquidityStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PEPAYLiquidityStaking__factory extends ContractFactory {
  constructor(...args: PEPAYLiquidityStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _liquidityToken: string,
    _rewardToken: string,
    _backingToken: string,
    overrides?: Overrides & { from?: string }
  ): Promise<PEPAYLiquidityStaking> {
    return super.deploy(
      _liquidityToken,
      _rewardToken,
      _backingToken,
      overrides || {}
    ) as Promise<PEPAYLiquidityStaking>;
  }
  override getDeployTransaction(
    _liquidityToken: string,
    _rewardToken: string,
    _backingToken: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _liquidityToken,
      _rewardToken,
      _backingToken,
      overrides || {}
    );
  }
  override attach(address: string): PEPAYLiquidityStaking {
    return super.attach(address) as PEPAYLiquidityStaking;
  }
  override connect(signer: Signer): PEPAYLiquidityStaking__factory {
    return super.connect(signer) as PEPAYLiquidityStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PEPAYLiquidityStakingInterface {
    return new utils.Interface(_abi) as PEPAYLiquidityStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PEPAYLiquidityStaking {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PEPAYLiquidityStaking;
  }
}
