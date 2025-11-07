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
    Swal.fire({
      icon: "warning",
      title: "Please check the box!",
      background: "#658C58",
      color: "#E5E9C5"
    });
    return;
  }

  if (firstName && lastName && email && password && cell && country) {
    Swal.fire({
      icon: "success",
      title: "Account Created!",
      text: `Welcome, ${firstName} ${lastName}!`,
      background: "#aee9dfff",
      color: "#016B61",
    });

    document.getElementById("signUpForm").reset();

    document.getElementById("signUpFormContainer").style.display = "none";
    document.getElementById("postApp").style.display = "block";
  }
}
var cardBg;
function deletePost() {
  var card = event.target.parentNode.parentNode;
  card.remove();
}
function editPost() {
  var card = event.target.parentNode.parentNode;
  var title = card.childNodes[3].childNodes[1].innerHTML;
  var description = card.childNodes[3].childNodes[3].innerHTML;
  document.getElementById("title").value = title;
  document.getElementById("description").value = description;
  card.remove()
}
function post() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var posts = document.getElementById("posts");
  if (title.trim() && description.trim()) {
    posts.innerHTML += `<div class="card m-2">
              <div class="card-header">Post</div>
              <div style="background-image: url(${cardBg});"  class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
              </div>
              <div class="ms-auto m-2">
                  <button onclick="editPost()" class="btn btn-success">Edit</button>
                  <button onclick="deletePost()" class="btn btn-danger">Delete</button>
               </div>
            </div>`;
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Post created successfully!",
      background: "#658C58",
      width: "360px",
      color: "#E5E9C5",
      showConfirmButton: false,
      timer: 1500,
    });
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Empty Post",
      text: "Enter Title & Description",
      background: "#658C58",
      width: "360px",
      color: "#E5E9C5",
    });
  }
}
function selectImg(src) {
  cardBg = src;
  var bgImage = document.getElementsByClassName("bgImage");
  for (var i = 0; i < bgImage.length; i++) {
    bgImage[i].className = "bgImage";
  }
  event.target.classList.add("selectedImg");
}
