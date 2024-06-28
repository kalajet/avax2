import React, { useState } from 'react';
import { getReportCardContract } from '../contractHelpers';
import { ethers } from 'ethers';

const ReportCard = () => {
  const [studentAddress, setStudentAddress] = useState('');
  const [name, setName] = useState('');
  const [math, setMath] = useState('');
  const [science, setScience] = useState('');
  const [english, setEnglish] = useState('');
  const [history, setHistory] = useState('');
  const [reportCard, setReportCard] = useState(null);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert('Please install Metamask!');
        return;
      }
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet');
    }
  };

  const createReportCard = async () => {
    try {
      const contract = await getReportCardContract();
      console.log('Creating report card with:', {
        studentAddress,
        name,
        math: parseInt(math),
        science: parseInt(science),
        english: parseInt(english),
        history: parseInt(history),
      });
      await contract.createReportCard(
        studentAddress,
        name,
        parseInt(math),
        parseInt(science),
        parseInt(english),
        parseInt(history)
      );
      alert('Report card created!');
    } catch (error) {
      console.error('Error creating report card:', error);
      alert('Failed to create report card');
    }
  };

  const fetchReportCard = async () => {
    try {
      const contract = await getReportCardContract();
      console.log('Fetching report card for account:', account);
      const report = await contract.getReportCard(account);
      console.log('Fetched report card:', report);
      setReportCard(report);
    } catch (error) {
      console.error('Error fetching report card:', error);
      alert('Failed to fetch report card');
    }
  };

  return (
    <div>
      <h1>Report Card</h1>
      <button onClick={connectWallet}>
        {account ? `Connected: ${account}` : 'Connect Wallet'}
      </button>
      {account && (
        <>
          <input
            type="text"
            placeholder="Student Address"
            value={studentAddress}
            onChange={(e) => setStudentAddress(e.target.value)}
          />
          <button onClick={fetchReportCard}>Get Report Card</button>
          {reportCard && (
            <div>
              <p>Name: {reportCard[0]}</p>
              <p>Math: {reportCard[1].toString()}</p>
              <p>Science: {reportCard[2].toString()}</p>
              <p>English: {reportCard[3].toString()}</p>
              <p>History: {reportCard[4].toString()}</p>
              <p>Total Marks: {reportCard[5].toString()}</p>
              <p>Grade: {reportCard[6]}</p>
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Math"
              value={math}
              onChange={(e) => setMath(e.target.value)}
            />
            <input
              type="number"
              placeholder="Science"
              value={science}
              onChange={(e) => setScience(e.target.value)}
            />
            <input
              type="number"
              placeholder="English"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
            />
            <input
              type="number"
              placeholder="History"
              value={history}
              onChange={(e) => setHistory(e.target.value)}
            />
            <button onClick={createReportCard}>Create Report Card</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ReportCard;
