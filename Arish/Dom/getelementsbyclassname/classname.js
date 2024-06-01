let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodConatiner=document.getElementById('food-container')

inputBtn.addEventListener('click',()=>{
  
   foodConatiner.innerHTML+= `<li class='food-items'>${inputFood.value}</li>`
})



// let id=document.getElementById('item')

// console.log(id);

// let classs=document.getElementsByClassName('food-items')

// console.log(classs)

// console.log(classs[1].innerText)


// const foodEl=document.getElementsByClassName("food-items")

// console.log(foodEl)

// let tagName=document.getElementsByTagName('li')
// console.log(tagName)

// let tagName=document.getElementsByName('input-btn')
// console.log(tagName);

// let list=document.querySelector('#item')
// console.log(list);

// const liEl2=document.querySelectorAll('.food-items')

// console.log(liEl2)

// console.log(liEl2)