function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    if(y1 < y2) return 0;    
    else if(y1 == y2){
        if(m1 < m2) return 0;
        else if(m1 == m2){
            if(d1 <= d2) return 0;    
            else return 15 * (d1 - d2);      
        }
        else return 500 * (m1 - m2);    
    }
    else return 10000;
}

console.log(libraryFine(2, 7, 1014, 1, 1, 1015));
