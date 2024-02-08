function flipPages() {
    var flipContainer = document.querySelector('.flip-container');
    flipContainer.classList.toggle('clicked');
}

let fullName = document.querySelector("#n_1");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let cpassword = document.querySelector("#conform");
let saveBtn = document.querySelector("#sub");

let lUserName = document.querySelector("#login_id");
let lPassword = document.querySelector("#pass_1");
let signIn = document.querySelector(".btn");




let login = localStorage.getItem("login");
// if (login !== null) {
//   window.location.replace("/write.html");
// }




saveBtn.addEventListener("click", () => {
  
  
  
  if (fullName.value==="" || email.value==="" || password.value==="")
  {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "FullName or Email or Password is empty",
    });
  }
  else
  {
    if(password.value===cpassword.value)
    {
  let newUser = {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  };
  
  let userList = localStorage.getItem("users"); 

  userList = userList === null ? [] : JSON.parse(userList);

  let isUserExist = userList.find((value) => {
    return value.email === newUser.email;
  });

  if (isUserExist === undefined) {
    userList.push(newUser);
    localStorage.setItem("users", JSON.stringify(userList));
    Swal.fire({
      title: "Registration Done!",
      text: "Welcome To COmmunity",
      icon: "success"
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Given email already registered, try different",
    });
    
  }
}
  

  else
  {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Both the password should be same",
    });
    
  }
}
});

signIn.addEventListener("click", () => {
  let username = lUserName.value;
  let password = lPassword.value;
  if(username==="" && password==="")
  {
    
    Toastify({
      text: "Not Complete Info Entered",
      duration: 5000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, dodgerblue, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Complete Info",
    });
    
  }
  else
  {
  let userList = localStorage.getItem("users"); 

  userList = userList === null ? [] : JSON.parse(userList);
  
  let isUserExist = userList.findIndex((value) => {
    return value.email === username && value.password === password;
  });
  
  if (isUserExist === -1) {

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User not found, please try again",
    });
  } 
  else {
    
    Swal.fire({
      title: "Login Successful",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Continue"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("login", isUserExist);
        window.location.replace("./write.html");
      }
    });
  }
}
});