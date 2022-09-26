var  y = ["yakov", "jaber"];
let names = (param) =>{
    for(var i = 0; i < param.length; i++){
        if(param[i][0].includes("j") || param[i][0].includes("J")){
            console.log("Goodbye "+param[i])
        }else{
            console.log("Hello "+param[i])
        }
    }
}
names(y);