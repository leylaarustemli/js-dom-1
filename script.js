const input=document.getElementById("input")
const addbtn=document.getElementById("add-btn")
const dltbtn=document.getElementById("delete-btn")
const ul=document.getElementById("ul")


addbtn.addEventListener("click",(e) => {
if (input.value!="") {
    ul.innerHTML+=`<li> <input type="checkbox"> <p>${input.value}</p> <button id="delete-btn"><i class="fa-solid fa-trash-can"></i></button></li>`
    input.value=""
}
else{
    alert("deyer yazin")
}
})

