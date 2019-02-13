pragma solidity ^0.4.25;

contract IPermissionsManager {
    function testAnyone() public;
    function testOnlyAdmin() public;
    function isAdmin(address) public view returns (bool);
}
