pragma solidity ^0.4.25;

import './Proxy.sol';

contract PermissionsManagerProxy is Proxy { 
	
    constructor(address _initialImplementation)
    Proxy(_initialImplementation)
    public
    {   }
}