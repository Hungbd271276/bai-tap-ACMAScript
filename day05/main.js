
    import {data} from './data.js';
    //console.log(data);

      const $ = document.querySelector.bind(document);
      const $$ = document.querySelectorAll.bind(document);
    
      class Product {
        getProducts(){
      const result = data.map((product , index)=>{
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
      
    }
    getButton() {
      const buttons = $$(".btn");
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
    product.getProducts();
    product.getButton();
   // product.addProduct();
  });
 
