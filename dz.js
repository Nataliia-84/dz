// dz
// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
//  <ul class="js-list"></ul>

const instruments = [{
  id: 1,
  img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
  name: "Молоток",
  price: 150
},
{
  id: 2,
  img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
  name: "Перфоратор",
  price: 3000
},{
  id: 3,
  img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
  name: "Рівень",
  price: 2000
}]

const listEl=document.querySelector('.js-list');
console.log(listEl);

const markUp=instruments.map(({id, img,name,price})=>{
    return ` <li data-list-id="${id}" class="item js-itemEl">
    <img src="${img}" alt="${name}" width='300px'class="js-item">
    <h1>${name}</h1>
    <p>${price}</p>
    
</li>`}).join(' ')



listEl.insertAdjacentHTML('beforeend',markUp)

// 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР


const buttonEl=document.createElement('button')
buttonEl.type="button"
buttonEl.textContent='купити'
console.log(buttonEl)
listEl.after(buttonEl)



buttonEl.addEventListener('click', onClick)

function onClick(event){
  console.log(event.target)
}















// listEl.addEventListener('click',onClick)
// function onClick(event){

//     if(!event.target.classList.contains('js-item')){
//         return
//     }
// console.log(event.target)
// const currentImg=event.target.closest('.js-itemEl')
// console.log(currentImg)
// const listId=Number(currentImg.dataset.listId); // отримуємо id
// console.log(listId)

// const data= instruments.find(({id})=>id===listId); // отримуємо обєкт
// console.log(data)
// const instance = basicLightbox.create(`
// <div class="bg">
// <img src="${data.img}" alt="${data.name}">
// <h2>${data.name}</h2>
// <p>${data.price}</p>
// </div>
// `)
// instance.show()
// }


// 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР
