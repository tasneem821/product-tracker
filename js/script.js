let product = new Set();
let productMap = new Map();

let add = document.getElementById("addproduct");
let show = document.getElementById("answer")

add.addEventListener("click",(e)=>{
const p = new Map();
let name = document.getElementById("name").value;
let price = parseInt(document.getElementById("price").value);
let amount = parseInt(document.getElementById("amount").value);


if(product.has(name)){
    let existproduct = productMap.get(name);
     existproduct.amount+=amount;

}
else{
    product.add(name);
    productMap.set(name,{price,amount});
}


 showproducts();
 e.preventDefault();

})
function showproducts (){
    show.innerHTML ="";

    let totalPrice = 0;
    productMap.forEach((p,name) =>  {
        totalPrice+=p.price*p.amount;
        show.innerHTML += `<li> <span>${name}:</span> <span>price</span> : ${p.price} , <span>Amount</span> : ${ p.amount}</li>`  // calculate and display price for each product

    })

    
    show.innerHTML += `<p><span>Total price:</span> ${totalPrice}</p> `;
    
}
let remove = document.getElementById("remove")
remove.addEventListener("click", (e)=>{
    let name = document.getElementById("name").value;
    let amount = parseInt(document.getElementById("amount").value);
    if(product.has(name)){
        let existproduct = productMap.get(name);
        if(existproduct.amount > amount){
         existproduct.amount-=amount;
    
    }
    else{
        product.delete(name);
        productMap.delete(name);
    }
}
showproducts();
    e.preventDefault();
})
