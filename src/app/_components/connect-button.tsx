import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import {client} from '../../app/client'
import { chain } from "../chain";

export default function Connect() {
  return (
    <div>
      <ConnectButton client={client} connectModal={{
        size: 'compact'
      }} />
    </div>
  );
}
