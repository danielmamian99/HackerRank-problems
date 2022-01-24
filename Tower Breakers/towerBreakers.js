main()

function towerBreakers(n, m) {
    if(m%2 == 0){
        if(n%2 == 0){
            return "2";
        }
        else{
            return "1";
        }
    }else{
        return "2";
    }

}

function main() {
    console.log(towerBreakers(2,6));
}
