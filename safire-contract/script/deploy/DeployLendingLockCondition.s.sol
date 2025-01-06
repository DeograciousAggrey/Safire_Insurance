// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "forge-std/Script.sol";

import "../../src/conditions/LendingLockCondition.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DeployLendingLockCondition is Script {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        ///Needs more work

        new LendingLockCondition(
            // BaseSepoliaMessenger = BaseSepolia Sender contract address
            0xAb5fe40a3962B8D46912718C5c89F5c610Bf181D,
            // destinationChainSelector = amoy chain selector => https://docs.chain.link/ccip/supported-networks/v1_2_0/testnet
            16281711391670634445,
            // receiver = amoymessenger receiver contract address
            0xE36bE621c0792A2a64d5BE267EA09A4C266CCeb1,
            // text => for check lending status
            "check_lending_status"
        );

        vm.stopBroadcast();
    }
}
