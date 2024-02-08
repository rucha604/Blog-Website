let active = localStorage.getItem("login");
active = JSON.parse(active);
if (active !== null) {

let btn=document.querySelector(".button")

btn.addEventListener('click',()=>
{
    window.location.replace("../project/write.html")
})


let users=localStorage.getItem("users");
let blogs = localStorage.getItem("blogs");
let blogList = document.querySelector("#whole");
blogs = JSON.parse(blogs);
users=JSON.parse(users)
    if(blogs!==null)
    {
    let list = blogs.map((value) => {
        
    return `
    <section class="img-preview">
                
                
    <section class="blog-area">
        <h2 class="title">${value.title}</h2>
            <p class="des">${value.description}</p>
            <p class="author"> ${value.author}</p>
    </section>
    <section>
        <img class="image" src="${value.url}" alt="">
    </section>
    </section>
        `;
    });

blogList.innerHTML = list.join("");
console.log(blogs);
    }
let myblog=document.querySelector(".my-blog")
  myblog.addEventListener("click",()=>
  {
    window.location.replace("../project/my-blog.html")
  })
  let contact=document.querySelector(".contact")
  contact.addEventListener("click",()=>
  {
    window.location.replace("../project/contactus.html")
  })
  let about=document.querySelector(".about")
  about.addEventListener("click",()=>
  {
    window.location.replace("../project/aboutus.html")
  })
}
else
{
  window.location.replace("../index.html");
}