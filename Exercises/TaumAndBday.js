function taumBday(b, w, bc, wc, z) {
    // Write your code here
    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);
    if(bc + z < wc) return ((b*bc) + (w * (bc+z))).toString();
    else if (wc + z < bc) return ((w*wc) + (b * (wc+z))).toString();
    else return ((b*bc) + (w*wc)).toString();
}

console.log(taumBday(142640749, 652432197, 701695848, 936714099, 324221606));
                                                                                711232858900355655