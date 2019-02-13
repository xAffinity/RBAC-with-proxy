var PermissionsTest = artifacts.require("./PermissionsTest.sol");
var PermissionsTestProxy = artifacts.require("./PermissionsTestProxy.sol");
var PermissionsManager = artifacts.require("./PermissionsManager.sol");
var PermissionsManagerProxy = artifacts.require("./PermissionsManagerProxy.sol");
var RolesLib = artifacts.require("./Roles.sol");

module.exports = function(deployer) {
	deployer.then(async () => {

		// deploy and link library
		await deployer.deploy(RolesLib, {gas:3000000});
		await deployer.link(RolesLib, PermissionsManager);

		// deploy permissions manager and its proxy
		await deployer.deploy(PermissionsManager, {gas:3000000});
		await deployer.deploy(PermissionsManagerProxy, PermissionsManager.address, {gas:3000000});

		// deploy logic contracts, linking to PermissionManager(Proxy)
		await deployer.deploy(PermissionsTest, PermissionsManager.address, {gas:3000000}); // TESTS PASS
		//await deployer.deploy(PermissionsTest, PermissionsManagerProxy.address, {gas:3000000}); // TESTS FAIL

		// deploy remaining proxy contract
		await deployer.deploy(PermissionsTestProxy, PermissionsTest.address, {gas:3000000});
	  })
};	