// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../../test/contracts/TestERC20.sol";
import "../../src/conditions/SimpleCondition.sol";
import "../../src/SafirePool.sol";
import "../../src/interfaces/ISafireFactory.sol";

contract DeployPool is Script {
    uint256 private _secondsPerBlock = 5; // 5 secs for 1 block
    uint256 private _staleTime = block.timestamp + 16 hours;
    uint256 private _maturityTime = block.timestamp + 1 days;

    uint256 private _maturityBlock = _maturityTime * block.number / block.timestamp;
    uint256 private _staleBlock = _staleTime * block.number / block.timestamp;

    address private _asset = 0xc87F3DaF81e8228ED70466FE2fd18E7bDc84078c;
    address private _condition = 0x7758Da40db3abC5D1C244A1a0f52091af269fC45;

    ISafireFactory private _factory = ISafireFactory(0x4dC12173A439E96a31a56850550db1AEc2d60631);

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        uint256 _multiplier = 2000000; // 2x
        uint256 _fee = 1000; // 0.01 = 1%
        address _feeTo = address(this);

        string memory _name = "Lending Lock";
        string memory _symbol = "Lending";

        _factory.createSafireContract(
            _multiplier, _maturityBlock, _staleBlock, _asset, _fee, _feeTo, _condition, _name, _symbol
        );

        vm.stopBroadcast();
    }
}
