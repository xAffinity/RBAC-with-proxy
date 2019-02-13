pragma solidity ^0.4.25;

import "./IPermissionsManager.sol";

contract Permissions {
    IPermissionsManager private permissionsManagerProxy;

    constructor(address _permissionsManagerProxyAddress) public {
        permissionsManagerProxy = IPermissionsManager(_permissionsManagerProxyAddress);
    }

    function isAdmin(address _who) public view returns (bool) {
        return permissionsManagerProxy.isAdmin(_who);
    }

    modifier onlyAdmin() {
        require(permissionsManagerProxy.isAdmin(tx.origin));
        _;
    }

}
