import React, { useState } from "react";
import CopyKey from "./Copy-key";
import Start from "./Start";
import Main from "./Main";

export default function Wallet() {
  const [secret, setSecret] = useState(localStorage.secret);
  const [publicKey, setPublicKey] = useState(localStorage.publicKey);
  const [isKeyCopied, setKeyCopied] = useState(localStorage.keyCopied);

  const resetAccount = () => {
    localStorage.removeItem("keyCopied");
    localStorage.removeItem("publicKey");
    localStorage.removeItem("secret");
    setKeyCopied(undefined);
    setSecret(undefined);
    setPublicKey(undefined);
  };

  if (!secret || !publicKey) {
    return (
      <Start
        setSecret={setSecret}
        setPublicKey={setPublicKey}
        setKeyCopied={setKeyCopied}
      />
    );
  } else if (!isKeyCopied) {
    return (
      <CopyKey
        secret={secret}
        publicKey={publicKey}
        setKeyCopied={setKeyCopied}
        resetAccount={resetAccount}
      />
    );
  }

  return (
    <Main publicKey={publicKey} secret={secret} resetAccount={resetAccount} />
  );
}
