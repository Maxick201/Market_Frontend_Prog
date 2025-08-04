
// const discountItems = [
//   {
//     img: '../assets/img/food/pancake.svg',
//     price: 50.5,
//     priceWithCard: 44.5,
//     description: 'Г/Ц Блинчики с мясом вес, Россия',
//     rating: 2,
//   },
//   {
//     img: '../assets/img/food/milk.svg',
//     price: 50.5,
//     priceWithCard: 44.5,
//     description: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
//     rating: 2,
//   },

//   {
//     img: '../assets/img/food/sausages.svg',
//     price: 50.5,
//     priceWithCard: 44.5,
//     description: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
//     rating: 2,
//   },

//   {
//     img: '../assets/img/food/sausages 2.svg',
//     price: 50.5,
//     priceWithCard: 44.5,
//     description: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
//     rating: 2,
//   }
// ]
// const cardList = document.querySelector(".card-list")

// function renderItems(parentItem , elements){
//     elements.forEach(element => {
//         const card = document.createElement("div");
        
//         card.innerHTML = `
//         <div class="card mt-480">
//           <img src="${element.img}" alt="" />
//           <div class="padding-wrap">
//             <div class="card-price flex justify-between items-center">
//               <div class="price-with-card flex flex-col items-center">
//                 <span class="price">${element.priceWithCard}₽</span>
//                 <span class="price-description">С картой</span>
//               </div>
//               <div class="typical-price flex flex-col items-center">
//                 <span class="price">${element.price}₽</span>
//                 <span class="price-description">Обычная</span>
//               </div>
//             </div>
//             <p class="description-card">${element.description}</p>
//             <button class="card-btn">В корзину</button>
//           </div>
//         </div>
//         `
//         parentItem.appendChild(card)
//     });
// }

// renderItems(cardList , discountItems);