let myblog=document.querySelector(".my-blog")
myblog.addEventListener("click",()=>
{
  window.location.replace("../project/my-blog.html")


})
let feed = document.querySelector(".feed");

feed.addEventListener("click", () => {
  window.location.replace("../project/my_feed.html");
});
let about = document.querySelector(".about");

  about.addEventListener("click", () => {
    window.location.replace("../project/aboutus.html");
  });

let btn = document.querySelector(".button");

  btn.addEventListener("click", () => {
    window.location.replace("../project/write.html");
  });
      //user name in heading
let users_1=localStorage.getItem("users")
let log=localStorage.getItem("login")
users_1=JSON.parse(users_1)
log=JSON.parse(log)

let user_name=users_1.map((value)=>
{ 
  return value.fullName
})
let user=document.querySelector(".user_name")
console.log(user_name)
user.innerHTML="Welcome,"+user_name