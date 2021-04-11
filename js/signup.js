const form_register = document.getElementById('signup-form');
async function signUpToFirebase(data){
    try{
        console.log("hello")
        await firebase.auth().createUserWithEmailAndPassword(data.email,data.password);
        firebase.auth().currentUser.updateProfile({
            lastName: data.lastName,
            firstName: data.firstName
        })
        console.log("hello")

        firebase.auth().currentUser.sendEmailVerification();
        alert("Please check your email for verify your account")
    }
    catch(err){
        alert(err)
    }
}
form_register.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {
        firstName: form_register.firstName.value.trim(),
        lastName: form_register.lastName.value.trim(),
        email: form_register.email.value.trim(),
        password: form_register.password.value,
    }
    signUpToFirebase(data) 
}) 