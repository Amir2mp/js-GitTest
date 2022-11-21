function time_cal(typeofTIME,opi,value){
    var d = new Date();
    var tempT = d.getTime()
    switch(typeofTIME){
        case('seconds'):
            value *= 1000;
            switch(opi){
                case('+'):
                    tempT+=value;
                    var date = new Date(tempT);
                    return date;
                case('-'):
                    tempT-=value;
                    var date = new Date(tempT);
                    return date;
            }
        case('minutes'):
            value *= 60000;
            switch(opi){
                case('+'):
                    tempT+=value;
                    var date = new Date(tempT);
                    return date;   
                case('-'):
                    tempT-=value;
                    var date = new Date(tempT);
                    return date;
            }
        case('hours'):
            value *= 3600000;
            switch(opi){
                case('+'):
                    tempT+=value;
                    var date = new Date(tempT);
                    return date;
                case('-'):
                    tempT-=value;
                    var date = new Date(tempT);
                    return date;
            }
        case('days'):
            value *= 86400000;
            switch(opi){
                case('+'):
                    tempT+=value;
                    var date = new Date(tempT);
                    return date;
                case('-'):
                    tempT-=value;
                    var date = new Date(tempT);
                    return date;
            }
    }
}
console.log(time_cal('days','+',1))
