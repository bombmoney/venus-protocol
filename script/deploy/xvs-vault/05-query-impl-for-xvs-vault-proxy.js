const contractConfigData = require("../../../networks/testnet.json");

(async () => {  

  const XVSVaultProxyAddress = contractConfigData.Contracts.XVSVaultProxy;
  const xvsVaultProxyContractInstance = await saddle.getContractAt('XVSVaultProxy', XVSVaultProxyAddress);
  const implementationAddress = await xvsVaultProxyContractInstance.methods.xvsVaultImplementation().call();
  console.log(`XVSVaultProxy-> has Implementation: ${implementationAddress}`);
})();
