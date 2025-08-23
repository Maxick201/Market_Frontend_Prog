
  const discountItems = [
    {
      id: 1,
      img: '../assets/img/food/pancake.svg',
      price: 50.5,
      priceWithCard: 44.5,
      description: 'Г/Ц Блинчики с мясом вес, Россия',
      rating: 2,
    },
    {
      id: 2,
      img: '../assets/img/food/milk.svg',
      price: 50.5,
      priceWithCard: 44.5,
      description: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
      rating: 2,
    },

    {
      id: 3,
      img: '../assets/img/food/sausages.svg',
      price: 50.5,
      priceWithCard: 44.5,
      description: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
      rating: 2,
    },

    {
      id: 4,
      img: '../assets/img/food/sausages 2.svg',
      price: 50.5,
      priceWithCard: 44.5,
      description: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
      rating: 2,
    }
  ]
  const cardList = document.querySelector(".card-list")

  function renderItems(parentItem , elements){
      elements.forEach(element => {
          const card = document.createElement("div");

          card.innerHTML = `
            <div class="card mt-480 element">
            <img class="no-padding" src="${element.img}" alt="" />
            <img class="like-button" src="assets/img/Body/like-button.svg" alt="like-button">
            <img class="sale-button" src="assets/img/Body/sale-50.svg" alt="sale-button">
            <div class="padding-wrap-12px">
              <div class="card-price flex justify-between items-center">
                <div class="card-price">
                  <div class="price-block">
                    <span class="price">${element.priceWithCard}₽</span>
                    <span class="price-description">С картой</span>
                  </div>
                  <div class="price-block">
                    <span class="base-price">${element.price}₽</span>
                    <span class="price-description">Обычная</span>
                  </div>
                </div>
              </div>
              <p class="description-card">${element.description}</p>
              <div class="rating">
                <img src="/assets/img/Body/stars/full-star.svg" alt="★" class="star">
                <img src="/assets/img/Body/stars/full-star.svg" alt="★" class="star">
                <img src="/assets/img/Body/stars/gray-star.svg" alt="☆" class="star">
                <img src="/assets/img/Body/stars/gray-star.svg" alt="☆" class="star">
                <img src="/assets/img/Body/stars/gray-star.svg" alt="☆" class="star">
              </div>
              <button class="card-btn" data-id=${element.id}>В корзину</button>
            </div>
          </div>
          `
          parentItem.appendChild(card)
      });
  }

renderItems(cardList , discountItems);

const card = document.createElement("input");
card.type = "text";
document.body.appendChild(card);

card.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const text = e.target.value;
    console.log(text);
  }
});


