let products = [];
let fs=require('fs');
let path=require('path');
module.exports = class product {
    constructor(title) {
        this.title = title;
    };
    save() {
        // products.push(this);
       fs.readFile(path.join(__dirname,'..','data','product.json'),(err,data)=>{
        if(!err){
            products=JSON.parse(data);
        }
        products.push(this);
        fs.writeFile(path.join(__dirname,'..','data','product.json'),JSON.stringify(products),(err)=>{
           
        })
       })
    };

    static fetchAll(cb) {
        // return products;
        fs.readFile(path.join(__dirname,'..','data','product.json'),(err,data)=>{
            if(err){
               return cb([]);
            }
         return cb(JSON.parse(data));
        })
    };
};