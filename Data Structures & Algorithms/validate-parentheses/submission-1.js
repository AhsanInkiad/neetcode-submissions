class Solution {

    isValid(s) {
        const x = [];
        // [  ]

        // ")()"
        // "(( ))"

        // "()))((("
        // (
        const mapping = {
            ')':'(',
            '}':'{',
            ']':'['
        }

        for (let char of s){
            if(char =='(' || char == '{' || char == '[' ){
                x.push(char);
            } else {
                if(x.length && mapping[char] == x[x.length-1]){
                    x.pop()
                } else {
                    return false;
                }
            }
        }
        
        return x.length == 0;
    }
}
