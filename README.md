 🎓 EduNFT - Educational Document NFT Verifier

EduNFT is a decentralized platform built on the NEAR Protocol that allows **universities to mint student degrees as NFTs** and **users to verify the authenticity** of these documents. The frontend interface is powered by [NEAR Social](https://test.near.social), enabling a decentralized and user-friendly UI experience.

🔗 **Live App**: [https://test.near.social/edunft-verify.testnet/widget/login-page](https://test.near.social/edunft-verify.testnet/widget/login-page)

---

## 🚀 Features

- ✅ Login with NEAR Wallet
- 🏛 Admins (universities) can mint degree NFTs
- 👨‍🎓 Users can view and verify NFTs
- 📦 IPFS-based image uploads for secure storage
- 💻 Fully decentralized frontend using NEAR Social Widgets

---

## 🛠 Tech Stack

- **Smart Contract**: Rust + NEAR SDK
- **Frontend**: NEAR Social Widgets
- **Storage**: IPFS (via NEAR Social's IPFS endpoint)

---

## 📦 Smart Contract Setup & Deployment

### 1. 📁 Create Project Folder

```bash
mkdir edunft
cd edunft
```

### 2. 🔨 Create NEAR Rust Contract

```bash
cargo new --lib contract
cd contract
```

In your `Cargo.toml`, make sure to include:

```toml
[lib]
crate-type = ["cdylib"]

[dependencies]
near-sdk = "4.1.0"
serde = "1.0"
serde_json = "1.0"
serde_derive = "1.0"
```

In your `src/lib.rs`, implement an NFT contract using NEAR's `near-sdk`.

### 3. 🔧 Build the Contract

```bash
cargo build --target wasm32-unknown-unknown --release
```

The compiled WASM will be located at:

```
target/wasm32-unknown-unknown/release/contract.wasm
```

Rename it (optional):

```bash
cp target/wasm32-unknown-unknown/release/contract.wasm EduNft.wasm
```

### 4. 📡 Deploy to NEAR Testnet

Make sure you have NEAR CLI installed:

```bash
npm install -g near-cli
```

Login with your wallet:

```bash
near login
```

Deploy contract:

```bash
near deploy --accountId edunft-verify.testnet --wasmFile EduNft.wasm
```

---

## 🌐 Frontend (NEAR Social)

The frontend is entirely built using **NEAR Social Widgets**. These widgets include:

- 🔐 `login-page` → Handles user login and role detection  
- 🏛 `admin-profile` → Upload and mint NFT documents  
- 🔍 `user-profile` → View and verify NFTs by token ID

➡️ Access the app:  
🔗 [https://test.near.social/edunft-verify.testnet/widget/login-page](https://test.near.social/edunft-verify.testnet/widget/login-page)

---

## 📂 Folder Structure

```
edunft/
├── contract/
│   ├── Cargo.toml
│   └── src/
│       └── lib.rs
├── EduNft.wasm
```

---

## ✍️ Author

**Utkarsh**  
📧 [Connect via NEAR Social](https://test.near.social/u/wickedspidy.testnet)

---

## 💡 Future Plans

- Add metadata search and filtering
- Implement role-based upload limits
- Connect to mainnet with production-ready UI

---

Let me know if you want a `LICENSE` or demo GIFs added!
