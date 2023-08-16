const bodyParser = require("body-parser")
var express=require("express")
var app=express()
var multer=require("multer")
var upload=multer()
var data=require("./store")
app.use(express.static('./component'))
app.set('view engine', 'ejs')
app.set('views','./component')

app.get("/hello",function (req,res) {
    res.json("Hello anh dương nhá")
})
app.get("/home",function (req,res) {
    return res.render('home',{
        data:data
    })
})
app.get("/getForm",function (req,res) {
    return res.render('AddSinhVien')
})
app.post("/addsinhvien",upload.fields([]),function (req,res) {
    var sinhvien=req.body
    console.log(sinhvien);
    data.push(sinhvien)
    return res.redirect("/")
    
})
var service=app.listen(8081,function (host,port) {
    host=service.address().address
    var port=service.address().port
    console.log("Susscess nhé nah dương",host,port);
})