# Rental Agreement DApp

This project is a React-based decentralized application (DApp) that interacts with an Ethereum smart contract for managing rental agreements. The DApp allows users to connect their Ethereum wallet, view rental details, and pay rent, including paying with a late fee if applicable.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** and **npm** installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).
- **MetaMask** browser extension installed and configured. You can download it from [metamask.io](https://metamask.io/).

## Installation

1. Clone the repository to your local machine:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd <project-directory>
```

3. Install the necessary dependencies:

```bash
npm install
```

## Configuration

1. Ensure you have the ABI and contract address of your deployed smart contract. Replace the placeholder files in the `src` directory with your actual ABI and contract address:
   
- `contractABI.json`
- `contractAddress.js`

## Usage

1. Start the development server:

```bash
npm start
```

2. Open your web browser and navigate to `http://localhost:3000`.

## Features

- **Connect Wallet:** Allows users to connect their Ethereum wallet using MetaMask.
- **View Rental Details:** Displays the rent amount, due date, late fee, and payment status.
- **Pay Rent:** Allows users to pay rent.
- **Pay Rent with Late Fee:** Allows users to pay rent with an additional late fee if applicable.

## Code Overview

The main component of this DApp is the `RentalAgreement` component located in `src/components/RentalAgreement.js`. Below is a brief explanation of the key parts of the component:

### State Variables

- `account`: The Ethereum account connected to the DApp.
- `provider`: The ethers.js provider for interacting with the Ethereum network.
- `contract`: The ethers.js contract instance for interacting with the smart contract.
- `rentAmount`: The amount of rent to be paid.
- `dueDate`: The due date for the rent payment.
- `lateFee`: The late fee amount if the rent is paid late.
- `rentPaid`: A boolean indicating whether the rent has been paid.

### Effects

- **useEffect**: Initializes the connection to the Ethereum provider, gets the contract details, and sets the state variables.

### Functions

- **connectWallet**: Connects the user's wallet to the DApp and sets the account address.
- **payRent**: Initiates the rent payment transaction.
- **payRentWithLateFee**: Initiates the rent payment transaction with the additional late fee.

### JSX Structure

- Displays rental details and provides buttons for connecting the wallet and making payments.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [ethers.js](https://docs.ethers.io/v5/)
- [MetaMask](https://metamask.io/)

## Contact

If you have any questions or issues, please open an issue on the repository or contact [your-email@example.com](mailto:your-email@example.com).

---

Feel free to customize this README file to suit your specific project needs!
