const lista = document.querySelector(".block ul ");
const priceTotal = document.querySelector(".block p");
let total = 0;

lista.innerHTML = "";
priceTotal.textContent = "";

const btn = document.querySelector(".btn")
btn.addEventListener("click",( ) =>{
   const ask =  prompt ("Want to add a product? [yes or no]")
    if(ask == "yes"){

        let newitem = prompt("Enter the name and price as in the following example [name:$$00.00]")
        
        if(newitem.includes(":") & newitem.includes(".") ){
         products.push(newitem)
        
         const newproduct = newitem.split(":")
         const namenew = newproduct[0]
         const pricenew = Number(newproduct[1]).toFixed(2)
         total+= Number(pricenew)

         const itemTextnew =`${namenew}  -  $$${pricenew}`

         const itemnew = document.createElement("li")
         itemnew.textContent = itemTextnew
         lista.appendChild(itemnew)

         priceTotal.textContent = `Total: ${total.toFixed(2)}`
      }
      else{
         alert("typo !, check the signs if they are correct.")
      }
         
   }
   else if(ask !== "yes"){
    alert("Have a nice day!!")
   }
})

let products = [
"Hat:2.50",
"Short:10.45",
"Shoes:50.25",

]

for(const product of products){
const item = product.split(":")
const name = item[0]
const price = Number(item[1]).toFixed(2)
total += Number(price)

const itemText =`${name}  -  $$${price}` 

const listitem = document.createElement("li")
listitem.textContent = itemText
lista.appendChild(listitem)
}
priceTotal.textContent = `Total: ${total.toFixed(2)}`

