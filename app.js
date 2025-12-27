var cardBg;
var postsArr = JSON.parse(localStorage.getItem("posts")) || [];

function signUpForm(event) {
  event.preventDefault();
  var firstName = document.getElementById("inputFirstName").value.trim();
  var lastName = document.getElementById("inputLastName").value.trim();
  var email = document.getElementById("inputEmail4").value.trim();
  var password = document.getElementById("inputPassword4").value.trim();
  var cell = document.getElementById("inputCell").value.trim();
  var country = document.getElementById("inputCountry").value.trim();
  var check = document.getElementById("gridCheck").checked;

  if (!check) {
    Swal.fire({ icon: "warning", title: "Please check the box!", background: "#658C58", color: "#E5E9C5" });
    return;
  }

  if (firstName && lastName && email && password && cell && country) {
    Swal.fire({ icon: "success", title: "Account Created!", text: `Welcome, ${firstName} ${lastName}!`,
      background: "#aee9dfff", color: "#016B61" });
    document.getElementById("signUpForm").reset();
    document.getElementById("signUpFormContainer").style.display = "none";
    document.getElementById("postApp").style.display = "block";
  }
}

function displayPost() {
  var posts = document.getElementById("posts");
  posts.innerHTML = "";
  postsArr.forEach((p, i) => {
    posts.innerHTML += `<div class="card m-2">
              <div class="card-header">Post</div>
              <div style="background-image: url(${p.img});" class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <p class="card-text">${p.description}</p>
              </div>
              <div class="ms-auto m-2">
                  <button onclick="editPost(${i})" class="btn btn-success">Edit</button>
                  <button onclick="deletePost(${i})" class="btn btn-danger">Delete</button>
               </div>
            </div>`;
  });
}

function deletePost(i) {
  postsArr.splice(i,1);
  localStorage.setItem("posts",JSON.stringify(postsArr));
  displayPost();
}

function editPost(i) {
  var card = postsArr[i];
  document.getElementById("title").value = card.title;
  document.getElementById("description").value = card.description;
  cardBg = card.img;
  postsArr.splice(i,1);
  localStorage.setItem("posts",JSON.stringify(postsArr));
  displayPost();
}

function post() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  if (title.trim() && description.trim()) {
    postsArr.push({title,description,img:cardBg});
    localStorage.setItem("posts",JSON.stringify(postsArr));
    Swal.fire({ position:"top-end", icon:"success", title:"Post created successfully!",
      background:"#658C58", width:"360px", color:"#E5E9C5", showConfirmButton:false, timer:1500 });
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    cardBg="";
    displayPost();
  } else {
    Swal.fire({ icon:"error", title:"Empty Post", text:"Enter Title & Description",
      background:"#658C58", width:"360px", color:"#E5E9C5" });
  }
}

function selectImg(src) {
  cardBg = src;
  var bgImage = document.getElementsByClassName("bgImage");
  for (var i=0;i<bgImage.length;i++){ bgImage[i].className="bgImage"; }
  event.target.classList.add("selectedImg");
}

window.onload = displayPost;
