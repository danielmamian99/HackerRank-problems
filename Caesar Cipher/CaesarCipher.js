main()

function caesarCipher(s, k) {
    var solve = "";
    k = k%26;

    for(var i = 0; i< s.length; i++){
        var binary = parseInt(s.charCodeAt(i).toString(2),2);
        if(binary >= 65 && binary <= 90){
            binary += k;
            if(binary > 90){
                binary = (binary % 90)+64;
            }
        } 
        else if(binary >= 97 && binary <= 122){
            binary += k;
            if(binary>122){
                binary = (binary % 122)+96;
                    
            }
        } 
        binary = String.fromCharCode(parseInt(binary.toString(2),2));
        solve = solve + binary;
    }
    return solve;
}

function main() {
    var prueba2 = "-";
    var s = "abcdefg";
    var prueba1 = "[`{@_^";
    var k = 3;
    console.log(caesarCipher(s,k));
}
