const form_login = document.getElementById('login-form');
async function signInToFirebase(data){
    try{
        const response = await firebase.auth().signInWithEmailAndPassword(data.email,data.password);
        console.log(currentUser)
    }
    catch(err){
        alert("The user is not found or you inputted a wrong password")
    }
}
form_login.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {
        email: form_login.email.value.trim(),
        password: form_login.password.value,
    }
    signInToFirebase(data)
}) 