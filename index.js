let inputfood = document.getElementById("food");
let btn = document.getElementById("button");
let heading = document.getElementById("heading3");
let items = document.getElementsByClassName("fooditems");


 btn.addEventListener("click",()=> {
   let newel = document.createElement("li");
   let divItem =  document.createElement("div");
   let divremovebtn = document.createElement("div")
 
    newel.append(divItem,divremovebtn);

    divremovebtn.parentElement.setAttribute("onclick","removeItem(event)");
    divremovebtn.innerHTML = `<i class="fa fa-xmark"></i>`;

    newel.textContent = inputfood.value;
    newel.className = "fooditems";
    heading.append(newel);
    newel.append(divItem);
    newel.append(divremovebtn);

   inputfood.value = " ";
});

function removeItem(event) {
     let removeel = event.target.parentNode.parentNode;
 
  removeel.remove();
    }

     














