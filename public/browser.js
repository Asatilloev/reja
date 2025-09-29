
let createField = document.getElementById("create-field");

function itemTemplate(item) {
  return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text" >${item.reja}</span>
    <div>
      <button data-id="${item._id}" class="edit-me btn btn-outline-secondary">
        O'zgartirish
      </button>
      <button data-id="${item._id}" class="delete-me btn btn-outline-danger">O'chirish</button>
    </div>
  </li>`;
}


document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
  .post("/create-item", { reja: createField.value })
  .then((response) => {
    document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
    createField.focus();
    createField.value = "";
  })
  .catch((err) => {
    console.log("Iltimos qayta urunib ko'ring!");
  });

});

document.addEventListener('click', function (e) {
  // delete oper
    if(e.target.classList.contains("delete-me")) {
    if (confirm("O'chirishni xohlaysizmi?")) {
      axios
      .post("/delete-item", {id: e.target.getAttribute("data-id")})
      .then((respose) => {
        console.log(respose.data);
        e.target.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.log("Iltimos qayta urunib ko'ring!");
      });
    }
  }
  // edit oper
  if(e.target.classList.contains("edit-me")) {
    alert("Siz o'zgartirishni tanladingiz!");
  }
});