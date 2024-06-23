import type { Signer } from 'did-jwt'
import type { Issuer } from 'did-jwt-vc'
// import { randomBytes } from 'crypto';
import { Keyring } from '@polkadot/api';
import { u8aToHex, u8aToString } from '@polkadot/util';

export abstract class SS58Account {
  address: string;
  publicKey: string;

  constructor() {
    this.address = '';
    this.publicKey = '';
  }

  abstract getIssuer(): Issuer;
}

export class LocalSS58Account extends SS58Account {
  private sign: ReturnType<Keyring['addFromSeed']>['sign']

  constructor(mnemonic: string) {
    super();
    const keyring = new Keyring({ type: 'sr25519' });
    let account;
    if (mnemonic) {
      account = keyring.addFromMnemonic(mnemonic);
    } else {
        account = keyring.addFromMnemonic(mnemonic);
    //   account = keyring.addFromSeed(randomBytes(32));
    }
    this.address = account.address;
    this.publicKey = `0x${Buffer.from(account.publicKey).toString('hex')}`;
    this.sign = account.sign;
  }

  getIssuer(): Issuer {
    if (!this.sign) {
      throw new Error('Sign function is not set');
    }
    const signer: Signer = async (data: string | Uint8Array) => {
      const dataStr = typeof data === 'string' ? data : u8aToString(data);
      const signedData = this.sign(Buffer.from(dataStr), { withType: true });
      return u8aToHex(signedData);
    };
    return { did: `did:gear:${this.address}`, signer, alg: 'ES256K' };
  }
}
