function displayHelloUser(){
    currentUser = firebase.auth().currentUser
    console.log(currentUser)
    if(currentUser){
        document.getElementById("hello-message").innerHTML = `Hello, ${currentUser.lastName} ${currentUser.firstName}`
    }
    else{
        document.getElementById("hello-message").innerHTML = `No user signed in`
    }
}
