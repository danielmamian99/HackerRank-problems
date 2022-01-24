main();

function timeConversion(s) {
    var time = s.slice(-2);
    var hour = s.substr(0,8);
    var temp = hour.substr(0,2);
    var minutes = hour.substr(2,8);
    temp = parseInt(temp, 10);
    if (time === 'AM'){
        temp = temp%12;
        var newHour = (temp).toString();
        if(temp < 10){
            newHour = "0"+ newHour;
        }
        hour =  newHour + minutes;
        return hour;
    } else{
        temp = temp + 12;
        var newHour = (temp).toString();
        if(newHour == "24"){
            newHour = "12";
        }
        hour =  newHour + minutes;
        return hour;
    }

}

function main() {
    const entradas = 
    [
     '12:00:00AM', '01:01:00AM', '02:01:00AM', '03:01:00AM', '04:01:00AM',
     '05:01:00AM', '06:01:00AM', '07:01:00AM', '08:01:00AM', '09:01:00AM', 
     '10:01:00AM','11:01:00AM',
     '12:00:00PM', '01:01:00PM', '02:01:00PM', '03:01:00PM',
     '04:01:00PM','05:01:00PM', '06:01:00PM', '07:01:00PM', '08:01:00PM',
     '09:01:00PM', '10:01:00PM','11:01:00PM'
    ];
    entrada = ["12:01:00PM"]
    for(var i = 0; i < entrada.length ; i++){
        console.log(timeConversion(entrada[i]));
    };
}