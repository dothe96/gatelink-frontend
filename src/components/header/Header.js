import { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { web3InstanceChange, accountInfoChange, chainIdChange, web3ResetState } from "../../web3/Web3Slice";
import { WalletConnector, registerEvents, getChainId, checkConnected } from "../../web3/WalletConnector";
import { accountInfoSelector, chainIdSelector } from "../../redux/Selectors";
import { useSelector } from "react-redux";
import Web3 from "web3";
import WalletArea from "./WalletArea";
import Navigator from "./Navigator";
import { toast } from 'react-toastify';
import { getChainName } from "../../utils/Web3Utils";
import { shortenAddress } from "../../utils/Formats";  

function Header() {
  const dispatch = useDispatch();
  const accountInfo = useSelector(accountInfoSelector);
  const chainId = useSelector(chainIdSelector);
  const [connnectState, setConnectState] = useState("default");

  useEffect(() => {
    checkConnected().then(rs => {
      if (rs) {
        registerEvents(onAccountChange, onDisconnect, onChainChange);
        updateWeb3().then(() => {
          setConnectState("connected");
          toast.success("Connected to wallet");
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChainChange = (id) => {
    if (chainId !== id) {
      updateWeb3().then(() => {
        setConnectState("updated");
        toast.info("Changed network to " + getChainName(id));
      });
    }
  }

  const onAccountChange = (accounts, balance) => {
    if (accountInfo.address !== accounts[0]) {
      updateWeb3().then(() => {
        setConnectState("updated");
        toast.info("Changed account to " + shortenAddress(accounts[0]));
      });
    }
  }

  const onDisconnect = () => {
    dispatch(web3ResetState);
    setConnectState("disconnected");
    toast.info("Wallet disconnected");
  }

  const connectWallet = async () => {
    const [connected, provider] = await WalletConnector();
    registerEvents(onAccountChange, onDisconnect, onChainChange);
    if (connected) {
      await updateWeb3();
      setConnectState("connected");
      toast.success("Connected to wallet");
    } else {
      let message = "No wallet detected. Please install Metamask extension";
      if (provider.message) {
        message = provider.message;
      }
      toast.error(message);
    }
  }

  const updateWeb3 = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      dispatch(web3InstanceChange(web3));
      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);
      dispatch(accountInfoChange({ address: accounts[0], balance: balance }))
      const chainId = await getChainId(web3);
      dispatch(chainIdChange(chainId));
    }
  }

  const renderWalletArea = () => {
    if (connnectState === "connected" || connnectState === "updated") {
      return (
        <WalletArea web3={Web3} accountInfo={accountInfo} chainId={chainId} />
      );
    }
    return (
      <div className="btn-connect-wallet" onClick={connectWallet}>
        Connect wallet
      </div>
    );
  }

  return (
    <header>
      <div className="header-content element-wrapper">
        <div className="logo-area">
          <NavLink to="/" className="logo">
            GateLink
          </NavLink>
        </div>
        <Navigator renderWalletArea={renderWalletArea}/>
      </div>
    </header>
  );
}

export default Header;
