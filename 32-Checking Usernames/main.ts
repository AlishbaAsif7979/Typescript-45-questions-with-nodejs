//Array of Current Users
let current_users = ["Alishba","Ajwa","Shumaila","Anas","Tuba"]

// Array of New Users
let new_users = ["Rayyan","Eshaal","Ajwa","Abdul Bari","Hashir"];

//Loop through new users to check for usernames availiable
new_users.forEach(new_one_user =>{

    //Making a Condition for username already exists and save in our_condition variable
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())
    
    // Print Differnt message using If_Else statement
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})
