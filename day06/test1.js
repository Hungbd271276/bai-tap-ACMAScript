function cauhon(){
    return new Promise(function (resolve , reject){
        let status = 200;
        if(status == 200){
             setTimeout(function(){
                 resolve('Em yêu anh');
             }, 3000);
        }else{
            setTimeout(function(){
                reject('Cút');
            }, 3000);
        }
    });
};
cauhon()
         .then(function (message){
             console.log(message);
         })
         .catch(function (error){
             console.log(error);
         })