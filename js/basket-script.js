const allCartBtns = document.querySelectorAll(".card-btn");

let products;
try {
  products = JSON.parse(localStorage.getItem('basket') ?? '[]');
} catch {
  products = [];
}

allCartBtns.forEach((btn) => {
  btn.addEventListener("click" , (e) => {
    const id = parseInt(e.target.dataset.id);
    addGoodToStorage(id);
  });
})

function addGoodToStorage(id){
    const productcart = products.find(p=> p.id === id) ;
    if(productcart){
    
      productcart.quantity+=1;  
    }
    else {
      const product = discountItems.find(g=>g.id===id);
      if(product){
        products.push({...product,quantity:1});
        localStorage.setItem("basket",JSON.stringify(products));
      }
    }
}
