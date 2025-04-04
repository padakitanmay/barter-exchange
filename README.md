# BarterExchange

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
  - [Install Dependencies](#install-dependencies)
  - [Run the Project](#run-the-project)
- [Key Features](#key-features)

## Introduction

**BarterExchange** is a decentralized platform that enables users to exchange assets securely using blockchain technology. The platform leverages **ThirdWeb**, **Vite.js**, and **Hardhat** to facilitate asset publishing, exchange requests, and transactions in a trustless environment.

## Tech Stack

- **Frontend:** ThirdWeb React with Vite.js
- **Styling:** Tailwind CSS
- **Blockchain Integration:** Hardhat for smart contract deployment
- **Wallet Management:** MetaMask

## Setup Instructions

### Install Dependencies

Before running the project, ensure you have **Node.js** and **MetaMask** installed.

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd barterexchange
   ```
2. Install dependencies for the **web3** directory:
   ```sh
   cd web3
   npm install
   ```

### Run the Project

#### **1. Set Up MetaMask**

1. Download and install MetaMask from [metamask.io](https://metamask.io/).
2. Create a new wallet and securely store the **Secret Recovery Phrase**.
3. Enable test networks:
   - Open **MetaMask**.
   - Click **Ethereum Mainnet** → Enable **Show test networks**.
   - Select **Sepolia Test Network**.
4. Get test ETH:
   - Copy your wallet address from MetaMask.
   - Go to [Sepolia Faucet](https://sepoliafaucet.com/), enter your wallet address, and click **Send Me ETH**.

#### **2. Configure the Environment Variables**

1. In the **web3** directory, create a `.env` file and add the following:
   ```sh
   PRIVATE_KEY=<your_metamask_private_key>
   ```
   *Note:* You can find your private key in MetaMask under **Account Details** → **Show Private Key** (enter your password to reveal it).

#### **3. Deploy the Smart Contract**

1. Create an API key on [thirdweb.com](https://thirdweb.com/):
   - Log in and connect your wallet.
   - Navigate to **Home** → **Create API Key**.
2. Deploy the contract:
   ```sh
   npm run deploy
   ```
3. When prompted, enter your ThirdWeb API key.
4. After a successful deployment, you will see a contract address in the terminal.
5. Open [ThirdWeb Dashboard](https://thirdweb.com/) and navigate to **Contracts**.
6. Click **Connect Wallet**, then **Deploy Now**.
7. Approve transactions in MetaMask.
8. Copy the contract address from ThirdWeb.
9. In the `client` folder, open `src/context/index.jsx`, find line 10, and replace the existing contract address with the new one.

#### **4. Run the Frontend**

1. Install dependencies in the **client** folder:
   ```sh
   cd ../client
   npm install
   ```
2. Start the frontend server:
   ```sh
   npm run dev
   ```
3. Open the browser using the provided terminal link and connect your wallet.
4. You can now create, exchange, and manage assets on the platform.

## Key Features

1. **publishAsset:** Create an asset listing.
2. **removeAsset:** Remove an asset from the listing.
3. **fetchAssets:** Retrieve available assets.
4. **requestForExchange:** Request an exchange of one asset for another.
5. **acceptExchange:** Approve an exchange request.
6. **requestForWithdraw:** Withdraw an exchange request.
7. **getOffers:** Retrieve all exchange offers.

---

This README provides a structured and user-friendly guide for setting up and running the **BarterExchange** project. 🚀

