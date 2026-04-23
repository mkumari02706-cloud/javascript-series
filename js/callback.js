
//callback ==>yanni ek fun ko dusre fun me as arg ass krna
function sum(a,b,callback){//a=5, b=3, callback = function
     let result=a+b;//8
    callback(result);//callback(8) run hua
}
function callback(res){
    console.log("res",res);//callback function execute → output print
}
sum(5,3,callback);//sum(5,3,callback) call hua

const hello=()=>{
    console.log("Hello, World!");
} 
setTimeout(hello, 1000);
function getdata(callback){
  setTimeout(()=>{
    console.log("Data fetched!");
    callback();
  }, 1000);
}
getdata(() => {
    console.log("Callback executed!");
}); 
//callback hell
function getdata(dataId, getdataCallback){
    setTimeout(() => {
        console.log("Data" + dataId + " fetched!");
        if(getdataCallback){
            getdataCallback();
        }
    }, 1000);
}

getdata(1,()=>{
    getdata(2,()=>{//getdata(2,call back)
        getdata(3,()=>{
            console.log("All data fetched!");
        });
    });
});
