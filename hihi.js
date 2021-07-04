let $ = document.querySelector.bind(document);
for (let i = 0; i < 10; i++) {
    let h1 = document.createElement('h1');
    h1.onclick = function(){
        alert('click to a hung dep trai ' + i);
    }
    h1.innerHTML = 'hùng đẹp trai dubaj';
    $('main').appendChild(h1);   
}
 
//đá qua về function
// hàm có trả về
function tinhtong(a , b){
    return a + b;
}
  var tinh = tinhtong(7 , 6);
  console.log(tinh);
  // hàm không trả vể
  function tinhtong2(a , b){
      a = 5;
      b = 6;
      c = a + b;
      console.log(c);
  }
  tinhtong2(9 , 8);
  // sử dụng arow function
  const tinh1 = (a , b) =>  a + b;

 console.log(tinh1(15 , 7));

 const material = [
     'bui',
     'duc',
     'hung',
 ];
 console.log(material.map(material => material.length));
  

// tìm giá trị có kí tự dài nhất
const longestWord = (str) =>{
    // chuyển đổi chuỗi thành phần tử của mảng
      var blank = str.split(" ");
     var keywwordlogn = "";
     for (const blanks of blank) {
        if(blanks.length > keywwordlogn.length){
            keywwordlogn = blanks;
        }
     }
     return keywwordlogn;
}
console.log(longestWord('Tôi là hùng đẹp traizzz'));





// destractoling 
let a , b , test;
({a , b} = {a:10 , b:50})
console.log(a);
({a , b , ...test} = {a: 10 , b: 50 , c: 100 , d: 40});
console.log(test);

const x = [1 ,2 , 3 , 4 , 5];
const [y , z] = x;
console.log(y);
console.log(z);
//
let e , d;
[e = 5 , d = 7] = [1 , 2];
console.log(e);
console.log(d);
// Swapping variables đảo vị trí
let v = 2;
let f = 4;
[v , f] = [f , v];
console.log(v);
console.log(f);

