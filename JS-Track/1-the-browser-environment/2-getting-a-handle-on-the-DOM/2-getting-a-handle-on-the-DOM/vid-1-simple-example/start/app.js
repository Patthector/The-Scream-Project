const descripitonInput = document.querySelector("input");
const descripitonP = document.querySelector("p.description");
const descripitonButton = document.querySelector("button");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");

descripitonButton.addEventListener("click",function(){
  descripitonP.innerHTML = descripitonInput.value + ":";
});

descripitonP.title = "List Description";

addItemButton.addEventListener("click",function(){
  let li = document.createElement("li");
  li.textContent = addItemInput.value;
  document.querySelector("ul").appendChild(li);
  addItemInput.value = "";
});
