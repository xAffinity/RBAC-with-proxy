pragma solidity ^0.4.25;

import "./Roles.sol";

contract PermissionsManager {
    using Roles for Roles.Role;

    event LogAdminRoleAdded(address indexed account);
    event LogAdminRoleRemoved(address indexed account);

    Roles.Role internal adminRole;

    constructor() public {
        adminRole.add(msg.sender);
    }

    modifier onlyAdmin() {
        require(isAdmin(tx.origin));
        _;
    }

    function isAdmin(address account) public view returns (bool) {
        return adminRole.has(account);
    }

    function addAdmin(address account) public onlyAdmin {
        adminRole.add(account);
        emit LogAdminRoleAdded(account);
    }

}
