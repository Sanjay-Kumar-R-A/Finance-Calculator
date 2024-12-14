function update_values(){
    let income_list = document.querySelectorAll(".income-value");
   let totaled = 0;
  
    income_list.forEach((element1) => {
      let numbers = +element1.innerText;
      totaled = totaled + numbers;
      
      
    })
    total_income.innerText = totaled;
  
    
    let expences_list = document.querySelectorAll(".expences-value");
    let exp_total = 0;
    expences_list.forEach((element2) => {
      let numbers = +element2.innerText;
  
      exp_total = exp_total + numbers;
      //net worth
    
    });
    total_expences.innerText = exp_total;
    totald_value();
  }
  
  
  //income modal
  let label = document.getElementById("label");
  let income = document.getElementById("income");
  let descrition = document.getElementById("description");
  let accept = document.getElementById("accept");
  let decline = document.getElementById("decline");
  let list = document.getElementById("list");
  let total_income = document.querySelector(".total-income");
  let income_plus = document.getElementById("income-plus");
  let income_modal = document.getElementById("income-modal");
  let expences_plus = document.getElementById("expences-plus");
  let expences_modal = document.getElementById("expences-modal");
  let declined = document.getElementById("declined");
  let accepted = document.getElementById("accepted");
  let total_value = document.getElementById("total-value");
  let icon_update = document.getElementById("icon-update");
  let icon_delete = document.getElementById("icon-delete");
  let inco_redio=document.getElementById("income-redo")
  let expen_redio=document.getElementById("expen-redo")
  
  income_plus.addEventListener("click", () => {
    income_modal.classList.remove("invisible");
  });
  decline.addEventListener("click", () => {
    income_modal.classList.add("invisible");
  });
  accept.addEventListener("click", () => {
    income_modal.classList.add("invisible");
  });
  
  expences_plus.addEventListener("click", () => {
    expences_modal.classList.remove("invisible");
  });
  declined.addEventListener("click", () => {
    expences_modal.classList.add("invisible");
  });
  accepted.addEventListener("click", () => {
    expences_modal.classList.add("invisible");
  });
  let total = 0;
  accept.addEventListener("click", function () {
    let span = document.createElement("span");
    span.className = "income-list";
    let lis = document.createElement("li");
    let pra = document.createElement("p");
  
  
  
    lis.className = "income-value";
    let inc = income.value;
    lis.innerHTML = inc;
    list.appendChild(span);
    span.appendChild(lis);
    let des = descrition.value;
    pra.innerHTML = des;
    span.appendChild(pra);
    lis.classList.add("text-green-500");
    let icon_edited = document.createElement("i");
    let icon_deleting = document.createElement("i");
  
    icon_edited.classList.add("fa-solid", "fa-pen-to-square");
    icon_deleting.classList.add("fa-solid", "fa-trash", "cursor-pointer");
    span.appendChild(icon_edited);
    span.appendChild(icon_deleting);
    span.classList.add("py-2", "justify-around", "flex","border-b-4","drop-shadow-md","shadow-green-700","border-green-200");
    let income_list = document.querySelectorAll(".income-value");
    total = 0;
  
    income_list.forEach((element1) => {
      let numbers = +element1.innerText;
      total = total + numbers;
      total_income.innerText = total;
      totald_value();
  
      icon_edited.addEventListener("click", () => {
        income_modal.classList.remove("invisible");
        span.remove();
      });
  
      icon_deleting.addEventListener("click", () => {
        span.remove();
        update_values();
        return span
      });
    });
  update_values();
  
  });
  
  //expences modal
  
  let labelded = document.getElementById("labelded");
  let expences = document.getElementById("expences");
  let descriptions = document.getElementById("descriptions");
  let accepte = document.getElementById("accepted");
  let total_expences = document.querySelector(".total-expences");
  let radiobutton =document.getElementsByName("radiobutton")
  
  // radiobutton.addEventListener("click",()=>{
  //   console.log("clicked");
    
  // })
  let listed_items=document.querySelectorAll("#list span li")
  
  function incom(){
  let inco= document.getElementsByClassName('income-list');
   for(let i=0;i<inco.length;i++){
    inco[i].classList.remove("invisible")
   }
   }
   
  function expen(){
    let expo= document.getElementsByClassName('expences-list');
     for(let i=0;i<expo.length;i++){
      expo[i].classList.remove("invisible")
     }
     }
  
  
  function fliter(radiovalue){
  
  
  let listed_className;
  for(let l=0;l<listed_items.length;l++){
    listed_className= listed_items[l].getAttribute("class")
    //string==string  
    if(radiovalue==="income" && listed_className.startsWith("expences")){
      
      listed_items[l].classList.add("invisible")
      incom()
    }
    else if(radiovalue==="expences" && listed_className.startsWith("income")){
     
     console.log( listed_items[l].classList.add("invisible"));
     expen()
  
     
    }
  else if(radiovalue=="all" && listed_className.startsWith("")){
    console.log( listed_items[l]);
    incom()
  }
    }
  }
  for(let i=0;i<radiobutton.length;i++){
  
    radiobutton[i].addEventListener("click",()=>{
     // radio btn values all / income / expence
     listed_items=document.querySelectorAll("#list span")
      fliter(radiobutton[i].value)
    })
  }
  
  
  
  function totald_value() {
    total_value.innerText = +total_income.innerHTML - +total_expences.innerHTML;
  }
  totald_value();
  
  let tot = accepted.addEventListener("click", function () {
    let spand = document.createElement("span");
    let lise = document.createElement("li");
    let prat = document.createElement("div");
  
    let icon_edit = document.createElement("i");
    let icon_delete = document.createElement("i");
  
    lise.className ="expences-value";
    let ince = expences.value;
    lise.innerHTML = ince;
    list.appendChild(spand);
    spand.appendChild(lise);
    lise.classList.add("text-red-600");
  
    let dest = descriptions.value;
    prat.innerHTML = dest;
    spand.appendChild(prat);
    spand.classList.add("expences-list","flex","justify-around","border-b-4","drop-shadow-md","py-2","shadow-red-700","border-red-200");
  
    let expences_list = document.querySelectorAll(".expences-value");
    let total = 0;
    expences_list.forEach((element2) => {
      let numbers = +element2.innerText;
  
      total = total + numbers;
      total_expences.innerText = total;
      
      //net worth
      totald_value();
  
  
      icon_edit.classList.add("fa-solid", "fa-pen-to-square", "cursor-pointer");
      icon_delete.classList.add("fa-solid", "fa-trash", "cursor-pointer");
      spand.appendChild(icon_edit);
      spand.appendChild(icon_delete);
      list.classList.add("py-2");
  
      icon_edit.addEventListener("click", () => {
        expences_modal.classList.remove("invisible");
        spand.remove();
      });
      icon_delete.addEventListener("click", () => {
  
        spand.remove();
        update_values();
        return expences_list
      });
    });
    update_values()
  })