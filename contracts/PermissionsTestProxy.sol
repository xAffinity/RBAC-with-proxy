pragma solidity ^0.4.25;

import "./Proxy.sol";

contract PermissionsTestProxy is Proxy {
    constructor(address _initialImplementation) public Proxy(_initialImplementation) {}
}
