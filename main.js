// const burget = ['coffee','salt','vegitable','rice','tea']

// function ricepromise(){
//     return new Promise((resove,reject)=>{
//         if(burget.includes('vegitable') && burget.includes('rice') && burget.includes('salt')){
//             resove("Fried Rice is Ready");
//         }else{
//             reject("It is not available");
//         } 
//     })
// }
// ricepromise().then((data)=>{
//     console.log(data);
// })



function fullname(){
    return new Promise((resolve, reject)=>{
        resolve("Pankaj");
        reject("Not find")
    })
}

fullname().then((data)=>{
    // console.log(data);
    data += "vital";
    return data; //// promise
})
.then((dataname)=>{
    console.log(dataname);
})
.catch((err)=>console.log(err))