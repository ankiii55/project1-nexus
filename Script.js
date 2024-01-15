document.addEventListener("DOMContentLoaded", function () {
    
    let users = []; // Array to store user data

    // Get Elements By Id
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    const loginInputEmail = document.getElementById("loginInputEmail");
    const loginInputPassword = document.getElementById("loginInputPassword");
    const signupInputName = document.getElementById("signupInputName");
    const signupInputEmail = document.getElementById("signupInputEmail");
    const signupInputPassword = document.getElementById("signupInputPassword");

    const loginEmailError = document.getElementById("loginEmailError");
    const loginPasswordError = document.getElementById("loginPasswordError");

    const signupNameError = document.getElementById("signupNameError");
    const signupEmailError = document.getElementById("signupEmailError");
    const signupPasswordError = document.getElementById("signupPasswordError");

    const loginButton = document.getElementById("loginButton");
    const signupButton = document.getElementById("signupButton");
    
    const loginHyperlink = document.getElementById("loginHyper");
    const signUpHyperlink = document.getElementById("signUpHyper");
  

    function resetInputLogin(){
        loginInputEmail.value = "";
        loginInputPassword.value = "";
    }   
    function resetInputSignup(){  
        signupInputName.value = "";
        signupInputEmail.value = "";
        signupInputPassword.value = "";
    }

    function removeErrorMsg()
    {
        loginEmailError.innerText = "";
        loginPasswordError.innerText = "";

        
        signupNameError.innerText = "";
        signupEmailError.innerText = "";
        signupPasswordError.innerText = "";

    }

    loginButton.addEventListener("click", function (event) {
        validateLoginForm(event);
    });

    signupButton.addEventListener("click", function (event) {
        validateSignupForm(event);
    });



    function validateLoginForm(event) {

        // Reset error messages
        removeErrorMsg();

        const user = users.find(u => u.email === loginInputEmail.value && u.password === loginInputPassword.value);
        
        if(loginInputEmail.value.trim() === "" || loginInputPassword.value.trim() === "")
        {
            
            if (loginInputEmail.value.trim() === "" && loginInputPassword.value.trim() === "") {

                loginEmailError.innerText = "Please enter your email";
                loginPasswordError.innerText = "Please enter your password";
                event.preventDefault();
            }
            else if( loginInputEmail.value.trim() === "" ){
                loginEmailError.innerText = "Enter your email";
            }
            else if( loginInputPassword.value.trim() === "" ){
                loginPasswordError.innerText = "Enter your password";
            }
            event.preventDefault();
        }
        else if (!user) {
            loginEmailError.innerText = "Invalid Email or Password";
            loginPasswordError.innerText = "Invalid Email or Password";
            event.preventDefault();
        }
    }

    function validateSignupForm( event) {

        // Reset error messages
        removeErrorMsg();

        if((signupInputName.value.trim()==="" || signupInputEmail.value.trim()==="" || signupInputPassword.value.trim()===""))
        {
            if(signupInputName.value.trim()==="")
            {
                signupNameError.innerText = "Please enter name";
            }
            if(signupInputEmail.value.trim()==="")
            {
                signupEmailError.innerText = "Please enter email";
            }
            if(signupInputPassword.value.trim()==="")
            {
                signupPasswordError.innerText = "Please enter password";
            }
            event.preventDefault();
        }

        else if(!(signupInputName.value.trim()==="" || signupInputEmail.value.trim()==="" || signupInputPassword.value.trim()===""))
        {
            if (!validateEmail(signupInputEmail.value)) {
                signupEmailError.innerText = "Invalid email format";
                event.preventDefault();
            }
            else if((signupInputName.value.trim()).length > 18 || (signupInputName.value.trim()).length < 4 )
            {
                signupNameError.innerText = "Enter valid name";
                event.preventDefault();
            }
            else if((signupInputPassword.value.trim()).length > 18 ||(signupInputPassword.value.trim()).length < 4 )
            {
                signupPasswordError.innerText = "Enter valid password";
                event.preventDefault();
            }
            else{
                const newUser = {
                    name: signupInputName.value,
                    email: signupInputEmail.value,
                    password: signupInputPassword.value
                };
    
                users.push(newUser);
                console.log(users);
                showLoginForm();
            }
        }   


    }

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }




    // Clear error messages when typing in the input fields

    loginInputEmail.addEventListener("focus", function () {
        document.getElementById("loginEmailError").innerText = "";
        document.getElementById("loginPasswordError").innerText = "";
    });

    loginInputPassword.addEventListener("focus", function () {
        document.getElementById("loginEmailError").innerText = "";
        document.getElementById("loginPasswordError").innerText = "";
    });

    signupInputName.addEventListener("focus", function () {
        document.getElementById("signupNameError").innerText = "";
        document.getElementById("signupEmailError").innerText = "";
        document.getElementById("signupPasswordError").innerText = "";
    });

    signupInputEmail.addEventListener("focus", function () {
        document.getElementById("signupNameError").innerText = "";
        document.getElementById("signupEmailError").innerText = "";
        document.getElementById("signupPasswordError").innerText = "";
    });

    signupInputPassword.addEventListener("focus", function () {
        document.getElementById("signupNameError").innerText = "";
        document.getElementById("signupEmailError").innerText = "";
        document.getElementById("signupPasswordError").innerText = "";
    });


    // hyperlink event listeners

    signUpHyperlink.addEventListener("click",function(event)
    {
        showSignupForm(event);
    });

    loginHyperlink.addEventListener("click",function(event)
    {
        showLoginForm(event);
    });

    function showSignupForm(){
        
        resetInputSignup();
        removeErrorMsg();

        signupForm.style.opacity = "1";
        signupForm.style.left = "20%";
        loginForm.style.left = "100%";
        loginForm.style.opacity = "0";

    }

    function showLoginForm(){

        resetInputLogin();
        removeErrorMsg();

        loginForm.style.opacity = "1"
        loginForm.style.left = "20%";
        signupForm.style.left = "-100%"
        signupForm.style.opacity = "0";
        
    }
    
});
