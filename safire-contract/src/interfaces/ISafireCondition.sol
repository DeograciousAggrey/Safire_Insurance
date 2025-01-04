// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

interface ISafireCondition {
    function checkUnlockClaim(address target) external;
    function checkUnlockTerminate(address target) external;
}
