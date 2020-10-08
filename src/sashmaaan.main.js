let i_bitcoinAddress = document.getElementById('i_bitcoinAddress');
let i_partialPrivKey = document.getElementById('i_partialPrivKey');
let i_privKey = document.getElementById('i_privKey');
let i_calculatedPrivKey = document.getElementById('i_calculatedPrivKey');
let btn_merge = document.getElementById('btn_merge');

// private key for all addresstypes and cases
let i_privKey_cases = document.getElementById('i_privKey_cases');

// p2pkh case 1
let i_bitcoinAddress_p2pkh_case1 = document.getElementById('i_bitcoinAddress_p2pkh_case1');
let i_partialPrivKey_p2pkh_case1 = document.getElementById('i_partialPrivKey_p2pkh_case1');
let i_calculatedPrivKey_p2pkh_case1 = document.getElementById('i_calculatedPrivKey_p2pkh_case1');
let div_isValid_p2pkh_case1 = document.getElementById('div_isValid_p2pkh_case1');
// p2pkh case 2
let i_bitcoinAddress_p2pkh_case2 = document.getElementById('i_bitcoinAddress_p2pkh_case2');
let i_partialPrivKey_p2pkh_case2 = document.getElementById('i_partialPrivKey_p2pkh_case2');
let i_calculatedPrivKey_p2pkh_case2 = document.getElementById('i_calculatedPrivKey_p2pkh_case2');
let div_isValid_p2pkh_case2 = document.getElementById('div_isValid_p2pkh_case2');
// p2pkh case 3
let i_bitcoinAddress_p2pkh_case3 = document.getElementById('i_bitcoinAddress_p2pkh_case3');
let i_partialPrivKey_p2pkh_case3 = document.getElementById('i_partialPrivKey_p2pkh_case3');
let i_calculatedPrivKey_p2pkh_case3 = document.getElementById('i_calculatedPrivKey_p2pkh_case3');
let div_isValid_p2pkh_case3 = document.getElementById('div_isValid_p2pkh_case3');
// p2pkh case 4
let i_bitcoinAddress_p2pkh_case4 = document.getElementById('i_bitcoinAddress_p2pkh_case4');
let i_partialPrivKey_p2pkh_case4 = document.getElementById('i_partialPrivKey_p2pkh_case4');
let i_calculatedPrivKey_p2pkh_case4 = document.getElementById('i_calculatedPrivKey_p2pkh_case4');
let div_isValid_p2pkh_case4 = document.getElementById('div_isValid_p2pkh_case4');
// p2pkh case 5
let i_bitcoinAddress_p2pkh_case5 = document.getElementById('i_bitcoinAddress_p2pkh_case5');
let i_partialPrivKey_p2pkh_case5 = document.getElementById('i_partialPrivKey_p2pkh_case5');
let i_calculatedPrivKey_p2pkh_case5 = document.getElementById('i_calculatedPrivKey_p2pkh_case5');
let div_isValid_p2pkh_case5 = document.getElementById('div_isValid_p2pkh_case5');
// p2pkh case 6
let i_bitcoinAddress_p2pkh_case6 = document.getElementById('i_bitcoinAddress_p2pkh_case6');
let i_partialPrivKey_p2pkh_case6 = document.getElementById('i_partialPrivKey_p2pkh_case6');
let i_calculatedPrivKey_p2pkh_case6 = document.getElementById('i_calculatedPrivKey_p2pkh_case6');
let div_isValid_p2pkh_case6 = document.getElementById('div_isValid_p2pkh_case6');


// p2sh case 1
let i_bitcoinAddress_p2sh_case1 = document.getElementById('i_bitcoinAddress_p2sh_case1');
let i_partialPrivKey_p2sh_case1 = document.getElementById('i_partialPrivKey_p2sh_case1');
let i_calculatedPrivKey_p2sh_case1 = document.getElementById('i_calculatedPrivKey_p2sh_case1');
let div_isValid_p2sh_case1 = document.getElementById('div_isValid_p2sh_case1');
// p2sh case 2
let i_bitcoinAddress_p2sh_case2 = document.getElementById('i_bitcoinAddress_p2sh_case2');
let i_partialPrivKey_p2sh_case2 = document.getElementById('i_partialPrivKey_p2sh_case2');
let i_calculatedPrivKey_p2sh_case2 = document.getElementById('i_calculatedPrivKey_p2sh_case2');
let div_isValid_p2sh_case2 = document.getElementById('div_isValid_p2sh_case2');
// p2sh case 3
let i_bitcoinAddress_p2sh_case3 = document.getElementById('i_bitcoinAddress_p2sh_case3');
let i_partialPrivKey_p2sh_case3 = document.getElementById('i_partialPrivKey_p2sh_case3');
let i_calculatedPrivKey_p2sh_case3 = document.getElementById('i_calculatedPrivKey_p2sh_case3');
let div_isValid_p2sh_case3 = document.getElementById('div_isValid_p2sh_case3');
// p2sh case 4
let i_bitcoinAddress_p2sh_case4 = document.getElementById('i_bitcoinAddress_p2sh_case4');
let i_partialPrivKey_p2sh_case4 = document.getElementById('i_partialPrivKey_p2sh_case4');
let i_calculatedPrivKey_p2sh_case4 = document.getElementById('i_calculatedPrivKey_p2sh_case4');
let div_isValid_p2sh_case4 = document.getElementById('div_isValid_p2sh_case4');
// p2sh case 5
let i_bitcoinAddress_p2sh_case5 = document.getElementById('i_bitcoinAddress_p2sh_case5');
let i_partialPrivKey_p2sh_case5 = document.getElementById('i_partialPrivKey_p2sh_case5');
let i_calculatedPrivKey_p2sh_case5 = document.getElementById('i_calculatedPrivKey_p2sh_case5');
let div_isValid_p2sh_case5 = document.getElementById('div_isValid_p2sh_case5');
// p2sh case 6
let i_bitcoinAddress_p2sh_case6 = document.getElementById('i_bitcoinAddress_p2sh_case6');
let i_partialPrivKey_p2sh_case6 = document.getElementById('i_partialPrivKey_p2sh_case6');
let i_calculatedPrivKey_p2sh_case6 = document.getElementById('i_calculatedPrivKey_p2sh_case6');
let div_isValid_p2sh_case6 = document.getElementById('div_isValid_p2sh_case6');


// p2wpk case 1
let i_bitcoinAddress_p2wpk_case1 = document.getElementById('i_bitcoinAddress_p2wpk_case1');
let i_partialPrivKey_p2wpk_case1 = document.getElementById('i_partialPrivKey_p2wpk_case1');
let i_calculatedPrivKey_p2wpk_case1 = document.getElementById('i_calculatedPrivKey_p2wpk_case1');
let div_isValid_p2wpk_case1 = document.getElementById('div_isValid_p2wpk_case1');
// p2wpk case 2
let i_bitcoinAddress_p2wpk_case2 = document.getElementById('i_bitcoinAddress_p2wpk_case2');
let i_partialPrivKey_p2wpk_case2 = document.getElementById('i_partialPrivKey_p2wpk_case2');
let i_calculatedPrivKey_p2wpk_case2 = document.getElementById('i_calculatedPrivKey_p2wpk_case2');
let div_isValid_p2wpk_case2 = document.getElementById('div_isValid_p2wpk_case2');
// p2wpk case 3
let i_bitcoinAddress_p2wpk_case3 = document.getElementById('i_bitcoinAddress_p2wpk_case3');
let i_partialPrivKey_p2wpk_case3 = document.getElementById('i_partialPrivKey_p2wpk_case3');
let i_calculatedPrivKey_p2wpk_case3 = document.getElementById('i_calculatedPrivKey_p2wpk_case3');
let div_isValid_p2wpk_case3 = document.getElementById('div_isValid_p2wpk_case3');
// p2wpk case 4
let i_bitcoinAddress_p2wpk_case4 = document.getElementById('i_bitcoinAddress_p2wpk_case4');
let i_partialPrivKey_p2wpk_case4 = document.getElementById('i_partialPrivKey_p2wpk_case4');
let i_calculatedPrivKey_p2wpk_case4 = document.getElementById('i_calculatedPrivKey_p2wpk_case4');
let div_isValid_p2wpk_case4 = document.getElementById('div_isValid_p2wpk_case4');
// p2wpk case 5
let i_bitcoinAddress_p2wpk_case5 = document.getElementById('i_bitcoinAddress_p2wpk_case5');
let i_partialPrivKey_p2wpk_case5 = document.getElementById('i_partialPrivKey_p2wpk_case5');
let i_calculatedPrivKey_p2wpk_case5 = document.getElementById('i_calculatedPrivKey_p2wpk_case5');
let div_isValid_p2wpk_case5 = document.getElementById('div_isValid_p2wpk_case5');
// p2wpk case 6
let i_bitcoinAddress_p2wpk_case6 = document.getElementById('i_bitcoinAddress_p2wpk_case6');
let i_partialPrivKey_p2wpk_case6 = document.getElementById('i_partialPrivKey_p2wpk_case6');
let i_calculatedPrivKey_p2wpk_case6 = document.getElementById('i_calculatedPrivKey_p2wpk_case6');
let div_isValid_p2wpk_case6 = document.getElementById('div_isValid_p2wpk_case6');

(function () {
  document.addEventListener("DOMContentLoaded", function(event) { 
    btn_merge.addEventListener("click", function() {
      try {
        let result = window.sashmaaan.vmerge(i_bitcoinAddress.value, i_privKey.value, i_partialPrivKey.value);
        i_calculatedPrivKey.value = (result) ? result : 'error';
      } catch (e) {
        i_calculatedPrivKey.value = e.message;
      }
    });

    // check all P2PKH cases
    for (let i = 1; i < 7; i++) {
      let result = window.sashmaaan.vmerge(
        window['i_bitcoinAddress_p2pkh_case' + i].value, 
        i_privKey_cases.value, 
        window['i_partialPrivKey_p2pkh_case' + i].value
      );

      if (result) {
        window['i_calculatedPrivKey_p2pkh_case' + i].className = 
          (window['i_calculatedPrivKey_p2pkh_case' + i].value === result) ? "isValid" : "isNotValid";
      } else {
        window['i_calculatedPrivKey_p2pkh_case' + i].value = 'ERROR';
        window['i_calculatedPrivKey_p2pkh_case' + i].className = "isNotValid";
      }
    }

    // check all P2SH cases
    for (let i = 1; i < 7; i++) {
      let result = window.sashmaaan.vmerge(
        window['i_bitcoinAddress_p2sh_case' + i].value, 
        i_privKey_cases.value, 
        window['i_partialPrivKey_p2sh_case' + i].value
      );
      
      if (result) {
        window['i_calculatedPrivKey_p2sh_case' + i].className = 
          (window['i_calculatedPrivKey_p2sh_case' + i].value === result) ? "isValid" : "isNotValid";
      } else {
        window['i_calculatedPrivKey_p2sh_case' + i].value = 'ERROR';
        window['i_calculatedPrivKey_p2sh_case' + i].className = "isNotValid";
      }
    }

    // check all P2WPK cases
    for (let i = 1; i < 7; i++) {
      let result = window.sashmaaan.vmerge(
        window['i_bitcoinAddress_p2wpk_case' + i].value, 
        i_privKey_cases.value, 
        window['i_partialPrivKey_p2wpk_case' + i].value
      );
      
      if (result) {
        window['i_calculatedPrivKey_p2wpk_case' + i].className = 
          (window['i_calculatedPrivKey_p2wpk_case' + i].value === result) ? "isValid" : "isNotValid";
      } else {
        window['i_calculatedPrivKey_p2wpk_case' + i].value = 'ERROR';
        window['i_calculatedPrivKey_p2wpk_case' + i].className = "isNotValid";
      }
    }
  });
})();