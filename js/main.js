const userList = document.querySelector(".user-list");
const list = [];
const search = document.querySelector("#search");
window.addEventListener("DOMContentLoaded",getAllData);
async function getAllData() {
    const response = await fetch('https://randomuser.me/api?results=50')
    const {results} = await response.json();
    userList.innerHTML = " ";
    results.forEach((user)=>{
        const li = document.createElement('li');
        li.classList.add("item");

        list.push(li);
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info p-3 mt-3">
            <h5>${user.name.first} ${user.name.last}</h5>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `
        userList.appendChild(li);
    })
}
search.addEventListener("keyup", searchItem);
function searchItem(e) {
   const searchTerm =e.target.value;
   let text ='';
   let c = 0;
   list.map((item)=>
   {
       if(item.textContent.toLowerCase().includes(searchTerm.toLowerCase()))
       {
        item.style.display = "flex";
    }
  
     else {
        item.style.display = "none";

    }

   })



}
