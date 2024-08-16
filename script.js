
let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let todoList = document.querySelector(".todoList");





addBtn.addEventListener("click", () => {
  let inputVal = input.value;
  todoList.innerHTML += `<li class="todoItem" > ${inputVal} &nbsp;&nbsp;     &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;        <button class="removeBtn" >  X</button></li>`
  input.value = "";

  
  let todoItems = document.querySelectorAll(".todoItem");
  
  todoItems.forEach((todoItem,i) => {
    
    
    let removeBtn= todoItem.querySelector(".removeBtn")
    console.log(removeBtn,"hello remove button");
    
    removeBtn.addEventListener("click",()=>{
      console.log(removeBtn,"hello Remove button");
      todoItem.remove();
    })
  });
})




