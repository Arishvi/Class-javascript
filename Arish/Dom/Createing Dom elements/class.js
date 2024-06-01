let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer=document.getElementById("food-container")

// console.log(foodContainer);

inputBtn.addEventListener("click",()=>{

    let li=document.createElement('li')
    li.className='food-Item'

    li.textContent=inputFood.value

    foodContainer.append(li)

    console.log(li);


    // foodContainer.innerHTML+=`<li class="food-Item">${inputFood.value}</li>`
})


//textContent

//innertext

//innerHTML

//  let alertEl=document.querySelector('.alert')

// console.log(alertEl)

// console.log(alertEl.innerText); //elements

// console.log(alertEl.innerHTML)

// console.log(alertEl.textContent); // nodes,elements

// alertEl.innerText='<strong>Vanakam</strong>its modified'

// alertEl.innerHTML='<strong>Vanakam</strong> <i>its modified<i>'