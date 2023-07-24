/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFT, NFTInterface } from "../../../../contracts/test/nft.sol/NFT";

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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020017f4c75636b795472616465720000000000000000000000000000000000000000008152506040518060400160405280600581526020017f4c4b59545200000000000000000000000000000000000000000000000000000081525081600090816200008f919062000412565b508060019081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b61283b80620005096000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063a22cb46511610071578063a22cb465146102a4578063b88d4fde146102c0578063c87b56dd146102dc578063e985e9c51461030c578063f2fde38b1461033c5761010b565b8063715018a6146102425780638da5cb5b1461024c57806395d89b411461026a578063a1448194146102885761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e257806370a08231146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611a39565b610358565b6040516101379190611a81565b60405180910390f35b61014861043a565b6040516101559190611b2c565b60405180910390f35b61017860048036038101906101739190611b84565b6104cc565b6040516101859190611bf2565b60405180910390f35b6101a860048036038101906101a39190611c39565b610512565b005b6101c460048036038101906101bf9190611c79565b610629565b005b6101e060048036038101906101db9190611c79565b610689565b005b6101fc60048036038101906101f79190611b84565b6106a9565b6040516102099190611bf2565b60405180910390f35b61022c60048036038101906102279190611ccc565b61072f565b6040516102399190611d08565b60405180910390f35b61024a6107e6565b005b6102546107fa565b6040516102619190611bf2565b60405180910390f35b610272610824565b60405161027f9190611b2c565b60405180910390f35b6102a2600480360381019061029d9190611c39565b6108b6565b005b6102be60048036038101906102b99190611d4f565b6108c4565b005b6102da60048036038101906102d59190611ec4565b6108da565b005b6102f660048036038101906102f19190611b84565b61093c565b6040516103039190611b2c565b60405180910390f35b61032660048036038101906103219190611f47565b6109a4565b6040516103339190611a81565b60405180910390f35b61035660048036038101906103519190611ccc565b610a38565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610433575061043282610abb565b5b9050919050565b60606000805461044990611fb6565b80601f016020809104026020016040519081016040528092919081815260200182805461047590611fb6565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b5050505050905090565b60006104d782610b25565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061051d826106a9565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361058d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058490612059565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105ac610b70565b73ffffffffffffffffffffffffffffffffffffffff1614806105db57506105da816105d5610b70565b6109a4565b5b61061a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610611906120eb565b60405180910390fd5b6106248383610b78565b505050565b61063a610634610b70565b82610c31565b610679576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106709061217d565b60405180910390fd5b610684838383610cc6565b505050565b6106a4838383604051806020016040528060008152506108da565b505050565b6000806106b583610fbf565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610726576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071d906121e9565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361079f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107969061227b565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6107ee610ffc565b6107f8600061107a565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461083390611fb6565b80601f016020809104026020016040519081016040528092919081815260200182805461085f90611fb6565b80156108ac5780601f10610881576101008083540402835291602001916108ac565b820191906000526020600020905b81548152906001019060200180831161088f57829003601f168201915b5050505050905090565b6108c08282611140565b5050565b6108d66108cf610b70565b838361115e565b5050565b6108eb6108e5610b70565b83610c31565b61092a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109219061217d565b60405180910390fd5b610936848484846112ca565b50505050565b606061094782610b25565b6000610951611326565b90506000815111610971576040518060200160405280600081525061099c565b8061097b8461133d565b60405160200161098c9291906122d7565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610a40610ffc565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610aaf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa69061236d565b60405180910390fd5b610ab88161107a565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b2e8161140b565b610b6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b64906121e9565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610beb836106a9565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c3d836106a9565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c7f5750610c7e81856109a4565b5b80610cbd57508373ffffffffffffffffffffffffffffffffffffffff16610ca5846104cc565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610ce6826106a9565b73ffffffffffffffffffffffffffffffffffffffff1614610d3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d33906123ff565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da290612491565b60405180910390fd5b610db8838383600161144c565b8273ffffffffffffffffffffffffffffffffffffffff16610dd8826106a9565b73ffffffffffffffffffffffffffffffffffffffff1614610e2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e25906123ff565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610fba8383836001611452565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b611004610b70565b73ffffffffffffffffffffffffffffffffffffffff166110226107fa565b73ffffffffffffffffffffffffffffffffffffffff1614611078576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106f906124fd565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61115a828260405180602001604052806000815250611458565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036111cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c390612569565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112bd9190611a81565b60405180910390a3505050565b6112d5848484610cc6565b6112e1848484846114b3565b611320576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611317906125fb565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161134c8461163a565b01905060008167ffffffffffffffff81111561136b5761136a611d99565b5b6040519080825280601f01601f19166020018201604052801561139d5781602001600182028036833780820191505090505b509050600082602001820190505b600115611400578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816113f4576113f361261b565b5b049450600085036113ab575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661142d83610fbf565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b611462838361178d565b61146f60008484846114b3565b6114ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114a5906125fb565b60405180910390fd5b505050565b60006114d48473ffffffffffffffffffffffffffffffffffffffff166119aa565b1561162d578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026114fd610b70565b8786866040518563ffffffff1660e01b815260040161151f949392919061269f565b6020604051808303816000875af192505050801561155b57506040513d601f19601f820116820180604052508101906115589190612700565b60015b6115dd573d806000811461158b576040519150601f19603f3d011682016040523d82523d6000602084013e611590565b606091505b5060008151036115d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115cc906125fb565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611632565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611698577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161168e5761168d61261b565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106116d5576d04ee2d6d415b85acef810000000083816116cb576116ca61261b565b5b0492506020810190505b662386f26fc10000831061170457662386f26fc1000083816116fa576116f961261b565b5b0492506010810190505b6305f5e100831061172d576305f5e10083816117235761172261261b565b5b0492506008810190505b61271083106117525761271083816117485761174761261b565b5b0492506004810190505b60648310611775576064838161176b5761176a61261b565b5b0492506002810190505b600a8310611784576001810190505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036117fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f390612779565b60405180910390fd5b6118058161140b565b15611845576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183c906127e5565b60405180910390fd5b61185360008383600161144c565b61185c8161140b565b1561189c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611893906127e5565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46119a6600083836001611452565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611a16816119e1565b8114611a2157600080fd5b50565b600081359050611a3381611a0d565b92915050565b600060208284031215611a4f57611a4e6119d7565b5b6000611a5d84828501611a24565b91505092915050565b60008115159050919050565b611a7b81611a66565b82525050565b6000602082019050611a966000830184611a72565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611ad6578082015181840152602081019050611abb565b60008484015250505050565b6000601f19601f8301169050919050565b6000611afe82611a9c565b611b088185611aa7565b9350611b18818560208601611ab8565b611b2181611ae2565b840191505092915050565b60006020820190508181036000830152611b468184611af3565b905092915050565b6000819050919050565b611b6181611b4e565b8114611b6c57600080fd5b50565b600081359050611b7e81611b58565b92915050565b600060208284031215611b9a57611b996119d7565b5b6000611ba884828501611b6f565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611bdc82611bb1565b9050919050565b611bec81611bd1565b82525050565b6000602082019050611c076000830184611be3565b92915050565b611c1681611bd1565b8114611c2157600080fd5b50565b600081359050611c3381611c0d565b92915050565b60008060408385031215611c5057611c4f6119d7565b5b6000611c5e85828601611c24565b9250506020611c6f85828601611b6f565b9150509250929050565b600080600060608486031215611c9257611c916119d7565b5b6000611ca086828701611c24565b9350506020611cb186828701611c24565b9250506040611cc286828701611b6f565b9150509250925092565b600060208284031215611ce257611ce16119d7565b5b6000611cf084828501611c24565b91505092915050565b611d0281611b4e565b82525050565b6000602082019050611d1d6000830184611cf9565b92915050565b611d2c81611a66565b8114611d3757600080fd5b50565b600081359050611d4981611d23565b92915050565b60008060408385031215611d6657611d656119d7565b5b6000611d7485828601611c24565b9250506020611d8585828601611d3a565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611dd182611ae2565b810181811067ffffffffffffffff82111715611df057611def611d99565b5b80604052505050565b6000611e036119cd565b9050611e0f8282611dc8565b919050565b600067ffffffffffffffff821115611e2f57611e2e611d99565b5b611e3882611ae2565b9050602081019050919050565b82818337600083830152505050565b6000611e67611e6284611e14565b611df9565b905082815260208101848484011115611e8357611e82611d94565b5b611e8e848285611e45565b509392505050565b600082601f830112611eab57611eaa611d8f565b5b8135611ebb848260208601611e54565b91505092915050565b60008060008060808587031215611ede57611edd6119d7565b5b6000611eec87828801611c24565b9450506020611efd87828801611c24565b9350506040611f0e87828801611b6f565b925050606085013567ffffffffffffffff811115611f2f57611f2e6119dc565b5b611f3b87828801611e96565b91505092959194509250565b60008060408385031215611f5e57611f5d6119d7565b5b6000611f6c85828601611c24565b9250506020611f7d85828601611c24565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611fce57607f821691505b602082108103611fe157611fe0611f87565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612043602183611aa7565b915061204e82611fe7565b604082019050919050565b6000602082019050818103600083015261207281612036565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b60006120d5603d83611aa7565b91506120e082612079565b604082019050919050565b60006020820190508181036000830152612104816120c8565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000612167602d83611aa7565b91506121728261210b565b604082019050919050565b600060208201905081810360008301526121968161215a565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006121d3601883611aa7565b91506121de8261219d565b602082019050919050565b60006020820190508181036000830152612202816121c6565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612265602983611aa7565b915061227082612209565b604082019050919050565b6000602082019050818103600083015261229481612258565b9050919050565b600081905092915050565b60006122b182611a9c565b6122bb818561229b565b93506122cb818560208601611ab8565b80840191505092915050565b60006122e382856122a6565b91506122ef82846122a6565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612357602683611aa7565b9150612362826122fb565b604082019050919050565b600060208201905081810360008301526123868161234a565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006123e9602583611aa7565b91506123f48261238d565b604082019050919050565b60006020820190508181036000830152612418816123dc565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061247b602483611aa7565b91506124868261241f565b604082019050919050565b600060208201905081810360008301526124aa8161246e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006124e7602083611aa7565b91506124f2826124b1565b602082019050919050565b60006020820190508181036000830152612516816124da565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612553601983611aa7565b915061255e8261251d565b602082019050919050565b6000602082019050818103600083015261258281612546565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006125e5603283611aa7565b91506125f082612589565b604082019050919050565b60006020820190508181036000830152612614816125d8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006126718261264a565b61267b8185612655565b935061268b818560208601611ab8565b61269481611ae2565b840191505092915050565b60006080820190506126b46000830187611be3565b6126c16020830186611be3565b6126ce6040830185611cf9565b81810360608301526126e08184612666565b905095945050505050565b6000815190506126fa81611a0d565b92915050565b600060208284031215612716576127156119d7565b5b6000612724848285016126eb565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612763602083611aa7565b915061276e8261272d565b602082019050919050565b6000602082019050818103600083015261279281612756565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006127cf601c83611aa7565b91506127da82612799565b602082019050919050565b600060208201905081810360008301526127fe816127c2565b905091905056fea2646970667358221220ccd0402934913164c0c0c854f8219e402b719a058bc31388c11e24b5b92d63e664736f6c63430008110033";

type NFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFT__factory extends ContractFactory {
  constructor(...args: NFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<NFT> {
    return super.deploy(overrides || {}) as Promise<NFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFT {
    return super.attach(address) as NFT;
  }
  override connect(signer: Signer): NFT__factory {
    return super.connect(signer) as NFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTInterface {
    return new utils.Interface(_abi) as NFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFT {
    return new Contract(address, _abi, signerOrProvider) as NFT;
  }
}