var PermissionsTest = artifacts.require("PermissionsTest");
var PermissionsTestProxy = artifacts.require("PermissionsTestProxy");
var IPermissionsManager = artifacts.require("IPermissionsManager");

contract('PermissionsTestProxy', function(accounts) {

	let deployer = accounts[0];
	let permissionsTest;
	let permissionsTestProxy;
    
	beforeEach('setup deployments', async function () {  
	 	permissionsTest = await PermissionsTest.deployed();
	 	let permissionsTestProxyDeployed = await PermissionsTestProxy.deployed();
	 	permissionsTestProxy = await IPermissionsManager.at(permissionsTestProxyDeployed.address);
	});

	it("should pass testAnyone() via main contract", async function() {
		await permissionsTest.testAnyone({from: deployer});
	});

	it("should pass testAnyone() via proxy", async function() {
		await permissionsTestProxy.testAnyone({from: deployer});
	});

	it("should be Admin at main contract", async function() {
		await permissionsTest.isAdmin(deployer, {from: deployer});
	});

	it("should be Admin at proxy", async function() {
		await permissionsTestProxy.isAdmin(deployer, {from: deployer});		
	});

	it("should pass testOnlyAdmin() via main contract", async function() {
		await permissionsTest.testOnlyAdmin({from: deployer, gas: 6000000});
	});

	it("should pass testOnlyAdmin() via proxy", async function() {
		await permissionsTestProxy.testOnlyAdmin({from: deployer, gas: 6000000});
	});

})