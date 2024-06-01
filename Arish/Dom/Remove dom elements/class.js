let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {

  let li = document.createElement("li")
  let div=document.createElement('div')
  let div2=document.createElement('div')
  li.append(div,div2)

  li.className='food-item'
  div.textContent=inputFood.value
  
  div2.setAttribute('onClick','removeItem(event)')
  div2.innerHTML+=`<i class="fa fa-xmark"></i>`
  
  console.log(li);
 
  foodContainer.append(li)
  inputFood.value = "";
});

/* <li class="food-item">
<div>Rasam</div>
<div onclick="removeItem(event)"><i class="fa fa-xmark"></i></div>
</li> */