# Role-Based Access Control via proxy

In migration `2_deploy_all` notice the lines:

```
// deploy logic contracts, linking to PermissionManager(Proxy)
await deployer.deploy(PermissionsTest, PermissionsManager.address, {gas:3000000}); // TESTS PASS
//await deployer.deploy(PermissionsTest, PermissionsManagerProxy.address, {gas:3000000}); // TESTS FAIL
```

Run `truffle test` and see all 6 tests pass. This is using PermissionsManager.address. 
Change it to PermissionsManagerProxy.address and the last two tests don't pass.
