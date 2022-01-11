import { weiToNumber, shortenAddress } from "../../utils/Formats";
import { getChainName } from "../../utils/Web3Utils";
import { useState, useRef, useEffect } from "react";
import { GoPerson, GoServer, GoBriefcase } from "react-icons/go";
import { copyToClipboard } from "../../utils/JsUtils";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WalletArea(props) {

    const [userMenu, setUserMenu] = useState(false);

    const balance = weiToNumber(props.web3, props.accountInfo.balance) + " ETH";
    const address = shortenAddress(props.accountInfo.address);
    const chainName = getChainName(props.chainId);
    const userMenuRef = useRef(null);
    useOutsideAlerter(userMenuRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setUserMenu(false);
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const copiedNotify = () => {
        toast.success("Copied address to clipboard");
    };

    return (
        <div className="wallet-area">
            <div className="network">
                {chainName}
            </div>
            <div className="wallet-info" onClick={() => {
                copyToClipboard(props.accountInfo.address);
                copiedNotify();
            }}>
                <div className="account-balance">{balance}</div>
                <div className="account-address">{address}</div>
            </div>
            
            <div className="user-account" onClick={() => { setUserMenu(!userMenu) }} ref={userMenuRef}>
                <ul className={userMenu ? "user-menu card-view" : "user-menu card-view hide"}>
                    <li><GoPerson className="user-menu-icon" />Profile</li>
                    <li><GoBriefcase className="user-menu-icon" />My Projects</li>
                    <li><GoServer className="user-menu-icon" />My Collections</li>
                </ul>
            </div>
        </div>
    );
}

export default WalletArea;