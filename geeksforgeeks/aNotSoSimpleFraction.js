class Solution {
    fractionToDecimal(numerator,denominator){
        let quotient = Math.floor(numerator / denominator);
        let remainder = numerator % denominator;
        if(remainder === 0) return quotient;
        quotient += ".";
        let decimalOccured = {};
        while(remainder !== 0) {
            if(remainder in decimalOccured) {
                let unrepeatedPart = quotient.substring(0, decimalOccured[remainder]);
                let repeatedPart = quotient.substring(decimalOccured[remainder]);
                return `${unrepeatedPart}(${repeatedPart})`;
            }
            decimalOccured[remainder] = quotient.length;
            remainder = remainder * 10;
            quotient += Math.floor(remainder / denominator);
            remainder = Math.floor(remainder % denominator);
        }
        return quotient;
    }
}
