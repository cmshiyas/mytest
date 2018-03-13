module.exports = {
    maxLength(a, k) {
        let counter = 0;
        let sum = 0;
        let maxcnt = 0;
        
        for ( i=0 ; i<a.length; i++){
            if (sum + a[i] <= k){
                sum += a[i];
                counter++;
            } else if( sum!=0){
                sum = sum - a[i-counter] + a[i];
            }
            maxcnt = Math.max(counter, maxcnt)
            
            
        }
        return maxcnt;
    }
}
