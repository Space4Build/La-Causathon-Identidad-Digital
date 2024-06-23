import type { Issuer } from "did-jwt-vc";
import { LocalSS58Account } from "./accounts";

type AccountExtended = {
    acc: LocalSS58Account;
    name: string;
    issuer: Issuer;
}

export const setLocalStoreAccount = (key: string, name: string):AccountExtended[] => {
    const keys:{name: string, key: string}[] = JSON.parse(window?.localStorage?.getItem("keys")||"[]")
    keys.push({name, key: key})
    if (window) localStorage?.setItem("keys", JSON.stringify(keys))
    return keys.map((val)=>{
        const acc = new LocalSS58Account(val.key)
        return {
            acc: acc,
            name: val.name,
            issuer: acc.getIssuer(),
        }
    });
}

export const getLocalStoreAccounts = (keys?: {name: string, key: string}[]):AccountExtended[] => {
    return JSON.parse(window?.localStorage?.getItem("keys")||"[]").map((val: {name: string, key: string})=>{
        const acc = new LocalSS58Account(val.key)
        return {
            acc: acc,
            name: val.name,
            issuer: acc.getIssuer(),
        }
    })
}