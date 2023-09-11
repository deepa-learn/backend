let express=require('express');
let app=express();
let path=require('path');
let routerf=require('./Routes/route.js');
app.use(express.static(path.join(__dirname,'public')));
app.use(routerf);
app.listen(3000);