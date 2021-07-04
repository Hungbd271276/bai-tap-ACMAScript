/*let $ = document.querySelector.bind(document);
for (let i = 0; i < 10; i++) {
    var div = document.createElement('div');
    div.onclick = function(){
        alert("You click a box " + i);
    }
    $("section").appendChild(div);
} 
 

function sum(a , b){
    return a + b;
}
console.log(sum(3,4));

//row function

const sum3 = (a , b) => a + b;

console.log(sum3(3,7));
*/

const longestWord =  (str) =>{
    const words = str.split(" ");
    //console.log(word);
    let keyword = "";
    // sử dụng vòng lặp for
  for(const word of words){
      // kiểm tra ký tự nào dài nhất dùng . length
      if(word.length > keyword.length){
          keyword = word;
      }
   } 
   return keyword;
  } 
  console.log(longestWord('Tên tôi là Bùi Đức Hùng'));

// demo1
const names = ['hung' , 'lam' , 'hieu'];
const myName = "Kien";

const newName = [...names, myName];
names.push(myName);

console.log(names);
console.log(newName);


// destractoling
// spread operator
// hien thi product(map);



