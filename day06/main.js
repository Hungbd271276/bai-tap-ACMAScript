
    import {data} from './data.js';
    //console.log(data);

      // const $ = document.querySelector.bind(document);
      // const $$ = document.querySelectorAll.bind(document);

         const $ = selector =>{
         let elements = document.querySelectorAll(selector);
          return elements.length == 1 ? elements[0] : [...elements];
       }
    
      class Product {
        getProducts(){
             return new Promise((resole ,reject) => {
                 let products = data;
                   if(products){
                       setTimeout(() =>{
                         resole(products);
                       }, 3000)
                   }else{
                       reject("error");
                   }
             });
    };
    displayProduct(products){
        const result = products.map((product , index)=>{
            return `<tr>
                     <td>${index}</td>
                     <td>${product.name}</td>
                     <td><img src = "${product.image}" width = "60px"/></td>
                     <td>${product.price}</td>
                     <td><${product.status ? 'Instock' : 'Outstock'}</td>
                     <td>${product.quantity}</td>
                     <td>
                         <button data-id = "${product.id}" class = "btn btn-primary btn-detail">
                           Detail
                         </button>
                     </td>
            </tr>`;
          }).join("");
           $('#product-content').innerHTML = result;  
    } 

     addProduct(){
      const productValue = {
        name: "product test"
      };
      let newProducts = [...data, productValue];
      console.log(newProducts);
     }

     detailProduct(id) {
      const result = data.find((product) => product.id == id);
      $("#detail").innerHTML = `<h2>${result.name}</h2>`;
      $("#image").innerHTML = `<img src ="${result.image}" width = "60px"/>`;
      $("#price").innerHTML = `<h2>${result.price}</h2>`;
      $("#status").innerHTML = `<h2>${result.status}</h2>`;
      $("#quantity").innerHTML = `<h2>${result.quantity}</h2>`;
    }
    getButton() {
      const buttons = $(".btn");
      let _this = this;
      buttons.forEach((button) => {
        button.addEventListener("click", function () {
          let id = this.dataset.id; 
  
          _this.detailProduct(id);
        });
      });
    }
  }
   
  window.addEventListener("DOMContentLoaded", () => {
    const product = new Product();
    // product.getProducts()
    // .then(products => {
    //      product.displayProduct(products);
    // })
    // .then(()=> {
    //       product.getButton();
    // });
   // product.addProduct();

   fetch('https://5e79b4b817314d00161333da.mockapi.io/products/')
   .then(response => response.json()
   .then(data => product.displayProduct(data)))
   .then(() => product.getButton())
  });
 