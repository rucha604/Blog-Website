  let btn=document.querySelector(".feed")

  btn.addEventListener('click',()=>{
      window.location.replace("my_feed.html")
  })


  let userDetails = null;

  let title = document.querySelector("#title_1");
  let description = document.querySelector("#des");
  let url = document.querySelector("#url");
  let save = document.querySelector("#save");

  let logout=document.querySelector(".button")

  let users=localStorage.getItem("users");
  users=JSON.parse(users)

  let active=localStorage.getItem("login")
  active= JSON.parse(active);
  if(active!==null)
  {
  logout.addEventListener("click",()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You want to LogOut",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logOut!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        window.location.replace("./login.html")
      }
    }); 
  })

  let index=localStorage.getItem("login");
  index=JSON.parse(index)
  let author_1=users.map((value)=>{
    return value.fullName
  })
  let author=author_1[index]
  save.addEventListener("click", () => {
    
      let newBlog = {
      title: title.value,
      description: description.value,
      url: url.value,
      author: author
    };
    let blogs = localStorage.getItem("blogs");
    blogs = blogs === null ? [] : JSON.parse(blogs); 
    blogs.unshift(newBlog);

    //store data in localStorage
    localStorage.setItem("blogs", JSON.stringify(blogs));  //stringify to store array in local
    alert("Blog Saved Successfully");
  });

  let contact=document.querySelector(".contact")
  let about=document.querySelector(".about")
  let my_blog=document.querySelector(".my-blog")
  contact.addEventListener("click",()=>
  {
    window.location.replace("./contactus.html")
  })

  
  about.addEventListener("click",()=>
  {
    window.location.replace("./aboutus.html")
  })
  my_blog.addEventListener("click",()=>
  {
    window.location.replace("./my-blog.html")
  })
}

else
{
  window.location.replace("./login.html")
}