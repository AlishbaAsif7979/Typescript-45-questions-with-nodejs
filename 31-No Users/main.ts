let userNames = ["Alishba","Anas","Tuba","Asif","Shumaila"]

if(userNames.length === 0){
    console.log(" Your Array in Empty we need to find some users!")
}else{
    // Using ForEach Loop on Array
     userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser},would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})

}