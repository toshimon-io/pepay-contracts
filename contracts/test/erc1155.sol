// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract rockPaperScissors is ERC1155 {
    uint256 public constant Rock = 1;
    uint256 public constant Paper = 2;
    uint256 public constant Scissors = 3;

    constructor()
        ERC1155(
            "https://ipfs.io/ipfs/bafybeihjjkwdrxxjnuwevlqtqmh3iegcadc32sio4wmo7bv2gbf34qs34a/{id}.json"
        )
    {
        _mint(msg.sender, Rock, 1, "");
        _mint(msg.sender, Paper, 1, "");
        _mint(msg.sender, Scissors, 1, "");
    }

    function mint(address _address, uint256 id, uint256 amount) public {
        _mint(_address, id, amount, "");
    }

    function uri(
        uint256 _tokenid
    ) public pure override returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "https://ipfs.io/ipfs/bafybeihjjkwdrxxjnuwevlqtqmh3iegcadc32sio4wmo7bv2gbf34qs34a/",
                    Strings.toString(_tokenid),
                    ".json"
                )
            );
    }
}
