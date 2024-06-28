import { ethers } from 'ethers';
import ReportCardABI from './contracts/ReportCard.json';
import config from './contracts/config';

export const getReportCardContract = async () => {
  if (!window.ethereum) {
    throw new Error("Metamask is not installed");
  }

  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(config.reportCardAddress, ReportCardABI.abi, signer);
};
