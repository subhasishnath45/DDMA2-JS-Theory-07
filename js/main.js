// function get_user(){
//     window.setTimeout(function(){
//         var u = {
//             'name':'CAD Centre'
//         };
//         return u;
//         // callback(u);
//     }, 5000);
// }

function greet_user(user){
    console.log('Hi ' + user.name + ', how are you doing?');
}

User = {
    'name':''
}

try{
    if(!User.name){
        throw 'Name is empty';
    }
    greet_user(User);
}catch(error){
    console.log(error);
}finally{
    console.log("A new line of code");
}

// get_user(greet_user);

// get_user(function (user){
//     console.log('Hi ' + user.name + ', how are you?');
// })

// greet_user(); = I'm calling greet_user function.
// greet_user; = function (user){
//     console.log('Hi ' + user.name + ', how are you?');
// }

// Error Handling.



// try{
//     // try some code
// }catch(error){
//     console.log(error);
// }finally{

// }




