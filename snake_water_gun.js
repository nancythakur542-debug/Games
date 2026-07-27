let user= prompt("Enter Snake, Water or Gun");
let cpuI= Math.floor(Math.random() *3);
let cpu=["S","W","G"][cpuI]

const match=(cpu, user)=>{
    if(cpu===user){
        return "Match Tied"
    }
    else if(cpu=== "S" && user==="W"){
        return "CPU"
    }
    
    else if(cpu=== "S" && user==="G"){
        return "USER"
    }
    else if(cpu=== "G" && user==="W"){
        return "USER"
    }
    else if(cpu=== "G" && user==="S"){
        return "CPU"
    }
    else if(cpu=== "W" && user==="S"){
        return "USER"
    }
    else if(cpu=== "W" && user==="G"){
        return "CPU"
    }

};
let result =match(cpu, user)
document.write(`CPU:${cpu}<br> and User:${user}<br> The Winner is:${result.toUpperCase()}`)
