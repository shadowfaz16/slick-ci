import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import {client} from '../../app/client'
import { chain } from "../chain";

export default function Connect() {
  return (
    <div>
      <ConnectButton client={client} connectModal={{
        size: 'compact',
        title: 'Login to SlickCI',
      }}
      connectButton={{
        label: 'Log in',
        style: {
            padding: 'none',
            display: 'flex',
            justifyContent: 'end',
            fontSize: '14px',
            backgroundColor: 'transparent',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: 'none',
        }
      }}
      detailsButton={{
        style: {
            padding: 'none',
            fontSize: '12px',
            backgroundColor: 'transparent',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: 'none',
        },
        className: 'text-xs p-0 m-0',
      }}

       />
    </div>
  );
}
