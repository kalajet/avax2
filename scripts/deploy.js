const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const ReportCard = await hre.ethers.getContractFactory("ReportCard");

  // Deploy the contract
  const reportCard = await ReportCard.deploy();

  // Wait for deployment to finish
  await reportCard.waitForDeployment();

  // Get the address of the deployed contract
  const address = await reportCard.getAddress();
  console.log(`Contract Address: ${address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
