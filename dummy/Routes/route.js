
let express=require('express');
let router=express.Router();
router.get('/login',(req,res)=>{
    res.send('<h1>hello</h1>');
});
module.exports=router;
