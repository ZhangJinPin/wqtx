//引入第三方模块
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
//创建web服务器
var server = express();
//监听端口
server.listen(3000);
console.log("服务器已启动");
//托管静态资源
server.use(express.static("public"));
//使用body-parser
server.use(express.urlencoded({
	extended: false
}));
//配置跨域模块
server.use(cors({
	orgin: [
		"http:127.0.0.1:3000",
		"http://localhost:3000"
	],
	credentials: true
}));
//创建连接池
var pool = mysql.createPool({
	host: "127.0.0.1",
	port: "3306",
	user: "root",
	password: "",
	database: "arms",
	connectionLimit: 20
});


//用户登陆
server.get("/user/login/:uname-:upwd", function (req, res) {
	var $uname = req.params.uname;
	var $upwd = req.params.upwd;
	var sql = "SELECT * FROM arms_user WHERE uname=? AND upwd=?";
	pool.query(sql, [$uname, $upwd], function (err, result) {
		if (err) throw err;
		if (result.length > 0) {
			res.send("1");
		} else {
			res.send("0");
		}
	});
});

//用户注册
//检测是否重名
server.get('/double', (req, res) => {
	var $uname = req.query.uname;
	if (!$uname) {
		res.send('未找到uname');
		return;
	}
	var sql = 'select * from arms_user where uname=?';
	pool.query(sql, [$uname], (err, result) => {
		if (err) throw err;
		if (result.length >= 1) {
			res.send('1');
		} else {
			res.send('0');
		}
	})
});
server.post("/user/reg", (req, res) => {
	var $uid = req.body.uid;
	var $uname = req.body.uname;
	var $upwd = req.body.upwd;
	var $email = req.body.email;
	var $phone = req.body.phone;
	var $user_name = req.body.user_name;
	var $gender = req.body.gender;
	var sql = "insert into arms_user set uid=?,uname=?,upwd=?,email=?,phone=?,user_name=?,gender=?";
	pool.query(sql, [$uid, $uname, $upwd, $email, $phone, $user_name, $gender], (err, result) => {
		if (err) throw err;
		if (result.affectedRows > 0) {
			res.send("1");
		} else {
			res.send("2");
		}
	});
});
// 首页图片
server.get("/index",(req,res) =>{
	var sql = "select * from arms_index_pic";
	pool.query(sql,(err,result)=>{
    if (err) throw err;
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send("2");
		}
  })
})
// 飞行器
server.get("/aerocraft",(req,res) =>{
	var sql = "select * arms_aerocraft_pic";
	pool.query(sql,(err,result)=>{
    if (err) throw err;
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send("2");
		}
  })
})
// 舰船舰艇
server.get("/ships",(req,res) =>{
	var sql = "select * from arms_ships_pic";
	pool.query(sql,(err,result)=>{
    if (err) throw err;
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send("2");
		}
  })
})
// 枪械
server.get("/firearms",(req,res) =>{
	var sql = "select * from arms_firearms_pic";
	pool.query(sql,(err,result)=>{
    if (err) throw err;
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send("2");
		}
  })
})
// 坦克装甲
server.get("/armor",(req,res) =>{
	var sql = "select * from jarms_armor_pic";
	pool.query(sql,(err,result)=>{
    if (err) throw err;
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send("2");
		}
  })
})
// 用户
server.get("/user",(req,res) =>{
	var sql = "select * from arms_user_pic";
	pool.query(sql,(err,result)=>{
    if (err) throw err;
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send("2");
		}
  })
})
// 火炮
server.get("/artillery",(req,res) =>{
	var sql = "select * from arms_artillery_pic";
	pool.query(sql,(err,result)=>{
    if (err) throw err;
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send("2");
		}
  })
})