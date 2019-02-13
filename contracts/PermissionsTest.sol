pragma solidity ^0.4.25;

import "./Permissions.sol";

contract PermissionsTest is Permissions {
    event LogSuccess();

    constructor(address _permissionsManagerProxy) public Permissions(_permissionsManagerProxy) {}

    function testAnyone() public {
        emit LogSuccess();
    }

    function testOnlyAdmin() public onlyAdmin {
        emit LogSuccess();
    }
}
