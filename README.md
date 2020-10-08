# VanityAddressMerger
JavaScript Client-Side Vanity Address Merger 

Now Bitcoin private keys can be conveniently merged in a web browser.

Here is a link to the BitcoinTalk.org forum topic discussing this project:
https://bitcointalk.org/index.php?topic=43496.0


Please send DONATIONS for this project to Bitcoin Address: 
bc1qwq4afcd9v0faelxzl34dm4wfwr023zay3ekmnv


## How to use?
All you need to do is to copy the sashmaaan.vmerge.min.js file into your assets 
folder and include that file into your page where you want to use it. 

You can find an example in vmerge.html in the root dir:
```html
<script type="text/javascript" src="dist/sashmaaan.vmerge.min.js"></script>
```

In the page specific javascript file sashmaaan.main.js we use the merging function:
```javascript
let result = window.sashmaaan.vmerge(bitcoinAddress, privKey, partialPrivKey);
```

You always have to pass the bitcoin address for the given private keys. Depending on that 
bitcoin address the library knows what kind of address type you use and to compare the
given bitcoin address with the calculated one.

## Why is the minifed version larger than the regular one?
For a easier and faster include method i concatenating the minifed version of sashmaaan.vmerge.js
and the bitcoinjs-lib-4.0.2.min.js (which is already minifed) together. That library is very
comprehensive what makes that final minified version so large.

## Todo
Right now i use two bitcoin-js libraries. One for the calculations of the private keys and
the other (bitcoinjs-lib-4.0.2.min.js) for coverting the private key to p2sh or p2wpk addresses.
In the future it would be nice to have only one bitcoin library to keep the size of the library small.

Notice of Copyrights and Licenses:
---------------------------------------
Portions of the all-in-one HTML document contain JavaScript codes that
are the copyrights of others. The individual copyrights are included
throughout the document along with their licenses. All important
javascript libraries are included in the uglified file
sashmaaan.vmerge.min.js

Summary of JavaScript functions with a redistributable license:

JavaScript function	|	License
-------------------	|	--------------
Array.prototype.map	|	Public Domain
window.Crypto | BSD License
window.SecureRandom	| BSD License
window.EllipticCurve	|	BSD License
window.BigInteger |	BSD License
window.QRCode | MIT License
window.Bitcoin | MIT License

The VanityAddressMerger software is available under The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
