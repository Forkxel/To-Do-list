const buttonAdd = document.querySelector("button");
const input = document.getElementById("addInput");
const list = document.getElementById("list");

function checkIfListIsEmpty() {
    if (list.children.length === 0) {
        list.style.display = "none";
    } else {
        list.style.display = "flex";
        list.style.flexDirection = "column";
    }
}

checkIfListIsEmpty();

buttonAdd.addEventListener("click", () =>{
    if (input.value === ""){
        input.placeholder = "Input is empty";
    } else {
        input.placeholder = "Add a Todo..."
        
        const listItem = document.createElement("li");
        listItem.classList.add("listItem");

        const div = document.createElement("div");
        div.className = "text";
        div.textContent = input.value;

        const checkbox = document.createElement("input");
        checkbox.className = "checkbox";
        checkbox.type = "checkbox";
        checkbox.onclick = () => {
            if(div.style.textDecoration === "line-through"){
                div.style.textDecoration = "none";
            } else{
                div.style.textDecoration = "line-through";
            }
        };

        const deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "X";
        deleteButton.onclick = () => {
            list.removeChild(listItem);
            checkIfListIsEmpty();
        };

        listItem.appendChild(checkbox);
        listItem.appendChild(div);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        input.value = "";
        checkIfListIsEmpty();
    }
});