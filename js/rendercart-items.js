function loadBasket() {
  try {
    return JSON.parse(localStorage.getItem("basket")) || [];
  } catch {
    return [];
  }
}

function saveBasket(arr) {
  localStorage.setItem("basket", JSON.stringify(arr));
}

function formatRub(n) {
  return new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + ' ₽';
}

function renderBasket() {
  const list = document.querySelector(".ci__list");
  if (!list) return;
  const items = loadBasket();

  list.innerHTML = "";

  items.forEach(p => {
    const li = document.createElement("li");
    li.className = "ci-card";
    li.dataset.id = p.id; 
    li.innerHTML = `
            <div class="ci-left">
                <label class="ci-check">
                <input class="ci-check__input" type="checkbox" checked data-id = "${p.id}">
                <span class="ci-check__box"></span>
                </label>

                <div class="ci-thumb">
                <img src="${p.img}" alt="">
                </div>

                <div class="ci-info">
                <div class="ci-title">${p.description}</div>
                <div class="ci-meta"><b>${formatRub(p.priceWithCard)}</b><span class="ci-text-muted">за шт.</span></div>
                </div>
            </div>

            <div class="ci-right">
                <div class="ci-qty">
                <button class="ci-qbtn" aria-label="minus">—</button>
                <span class="ci-count">${p.quantity}</span>
                <button class="ci-qbtn" aria-label="plus">+</button>
                </div>
                <div class="ci-price-now">${formatRub(p.priceWithCard * p.quantity)}</div>
            </div>
    `;
    list.appendChild(li);
  });
}


function deleteSelected() {
  const checkBoxes = Array.from(document.querySelectorAll(".ci-check__input:checked")).map(c => {
    return parseInt(c.dataset.id);
  });
    let goods = JSON.parse(localStorage.getItem("basket"));

    goods = goods.filter (c => {
        return !checkBoxes.includes(c.id);
    });

    localStorage.setItem("basket", JSON.stringify(goods));
    window.location.reload();
};







// document.addEventListener("click", (e) => {
//   const btn = e.target.closest(".ci-qbtn");
//   if (!btn) return;
//   const li = btn.closest(".ci-card");
//   if (!li) return;

//   const id = Number(li.dataset.id);
//   const items = loadBasket();
//   const item = items.find(x => x.id === id);
//   if (!item) return;

//   if (btn.getAttribute("aria-label") === "plus") {
//     item.quantity += 1;
//   } else {
//     item.quantity = Math.max(1, item.quantity - 1);
//   }

//   saveBasket(items);
//   renderBasket(); 
// });

document.addEventListener("DOMContentLoaded" , () => {
      renderBasket();
    const btn = document.querySelector(".delete-selected"); 
    btn.addEventListener("click" ,()=>{
      deleteSelected();
    });
});
