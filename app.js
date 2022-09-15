let fstInput = document.querySelector(".fstInput");
let addBtn = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");


class Item{
    constructor(newWork){
        this.createDiv(newWork)
    }
   createDiv(newWork) {
    let inputItem = document.createElement("input");
    let inputDiv = document.createElement("div");
    let removeBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    inputItem.type = "text";
    inputItem.disabled = true;
    inputItem.value = fstInput.value;
    inputItem.classList.add("item-input");
    inputDiv.classList.add("item");
    editBtn.innerHTML = "<i class='bx bx-lock-alt bx-md'></i>";
    editBtn.classList.add("edit-btn");
    removeBtn.innerHTML = "<i class='bx bx-trash bx-md'></i>";
    removeBtn.classList.add ("remove-btn");
    inputDiv.appendChild(inputItem);
    inputDiv.appendChild(editBtn);
    inputDiv.appendChild(removeBtn);
    container.appendChild(inputDiv);

    editBtn.addEventListener("click", function(){
        if(inputItem.disabled == true){
            inputItem.disabled = false;
            editBtn.innerHTML = "<i class='bx bx-lock-open-alt bx-md'></i>"
        }else{
            inputItem.disabled = true;
            editBtn.innerHTML = "<i class='bx bx-lock-alt bx-md'></i>"
        }
    })
    removeBtn.addEventListener("click", function(){
        container.removeChild(inputDiv);
    })
}
}

function checkInput(){
    if(fstInput.value){
        let addWork =  new Item(fstInput.value)
        fstInput.value = ""
    }
}

addBtn.addEventListener("click", function(){
    checkInput();
})





