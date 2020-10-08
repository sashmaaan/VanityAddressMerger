window.sashmaaan = {};

window.sashmaaan.vmerge = (function () {
  var lambda = new BigInteger('5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72', 16);
  var lambdaKey = new Bitcoin.ECKey(lambda);
  var lambda2 = new BigInteger('ac9c52b33fa3cf1f5ad9e3fd77ed9ba4a880b9fc8ec739c2e0cfc810b51283ce', 16);
  var lambda2Key = new Bitcoin.ECKey(lambda2);
  var orderBigInt = new BigInteger('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141', 16);
  var n = EllipticCurve.getSECCurveByName("secp256k1").getN();

  function getAddress(bitcoinAddr, combined) {
    var wif, keyPair, p2;
  
    switch (bitcoinAddr.charAt(0)) {
      case '1':
        return combined.getBitcoinAddress();
      case '3':
        wif = combined.getBitcoinWalletImportFormat();
        keyPair = bitcoin.ECPair.fromWIF(wif);
        p2 = bitcoin.payments.p2sh({
          redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey })
        });
        return p2.address;
      case 'b':
      case 'B':
        wif = combined.getBitcoinWalletImportFormat();
        keyPair = bitcoin.ECPair.fromWIF(wif);
        p2 = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey });
        return p2.address;
      default:
        break;
    }
  }


  function checkAddr(bitcoinAddr, combined) {
    if (combined === null) {
      return false;
    }
  
    if (getAddress(bitcoinAddr, combined) === bitcoinAddr) {
      return combined.getBitcoinWalletImportFormat();
    }

    return false;
  }


  function vmerge(bitcoinAddr, ownPrivate, partPrivate) {
    var key1 = ownPrivate;
    var key2 = partPrivate;
    var ecKey1 = new Bitcoin.ECKey(key1);
    var ecKey2 = new Bitcoin.ECKey(key2);
    var combined, privKey;


    if (ecKey1.getBitcoinHexFormat() === ecKey2.getBitcoinHexFormat()) {
      throw 'Own private key and partial private key are the same';
    }

    if (ecKey1 == null || ecKey2 == null) {
      throw 'One of the private keys is null';
    }

    // No sym, no endo
    combined = new Bitcoin.ECKey(ecKey1.priv.add(ecKey2.priv).mod(n));
    combined.setCompressed(true); // todo: check if needed
    if (privKey = checkAddr(bitcoinAddr, combined)) return privKey;
    
    // No sym, endo 1
    combined = new Bitcoin.ECKey(ecKey1.priv.multiply(lambdaKey.priv).mod(n));
    combined = new Bitcoin.ECKey(combined.priv.add(ecKey2.priv).mod(n));
    combined.setCompressed(true); // todo: check if needed
    if (privKey = checkAddr(bitcoinAddr, combined)) return privKey;
    
    // No sym, endo 2
    combined = new Bitcoin.ECKey(ecKey1.priv.multiply(lambda2Key.priv).mod(n));
    combined = new Bitcoin.ECKey(combined.priv.add(ecKey2.priv).mod(n));
    combined.setCompressed(true); // todo: check if needed
    if (privKey = checkAddr(bitcoinAddr, combined)) return privKey;

    // sym, no endo
    combined = new Bitcoin.ECKey(ecKey1.priv.negate().add(ecKey2.priv).mod(n));
    combined.setCompressed(true); // todo: check if needed
    if (privKey = checkAddr(bitcoinAddr, combined)) return privKey;
    
    // sym, endo 1
    combined = new Bitcoin.ECKey(ecKey1.priv.multiply(lambdaKey.priv).mod(n));
    combined = combined.priv.negate();
    combined = new Bitcoin.ECKey(combined.add(orderBigInt));
    combined = new Bitcoin.ECKey(combined.priv.add(ecKey2.priv).mod(n));
    combined.setCompressed(true); // todo: check if needed
    if (privKey = checkAddr(bitcoinAddr, combined)) return privKey;
    
    // sym, endo 2
    combined = new Bitcoin.ECKey(ecKey1.priv.multiply(lambda2Key.priv).mod(n));
    combined = combined.priv.negate();
    combined = new Bitcoin.ECKey(combined.add(orderBigInt));
    combined = new Bitcoin.ECKey(combined.priv.add(ecKey2.priv).mod(n));
    combined.setCompressed(true); // todo: check if needed
    if (privKey = checkAddr(bitcoinAddr, combined)) return privKey;

    return false;
  };

  return vmerge;
})();