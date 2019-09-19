#设置储存编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS arms;
#创建数据库,设置储存编码
CREATE DATABASE arms CHARSET=UTF8;
#进入数据库
USE arms;
#用户表arms_user
CREATE TABLE arms_user(
	uid INT  PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(11),
	avatar VARCHAR(128),
	user_name VARCHAR(32),
	gender INT
);
#用户数据导入
INSERT INTO arms_user VALUES("1","dingding","123456","123456@qq.com","13888888888","images/Choices5.jpg","丁丁","0");
INSERT INTO arms_user VALUES("2","dangdang","123456","123456@qq.com","13888888888","images/Choices5.jpg","铛铛","0");
INSERT INTO arms_user VALUES("3","zhangsan","123456","123456@qq.com","13888888888","images/Choices5.jpg","张三","1");
INSERT INTO arms_user VALUES("4","lisi","123456","123456@qq.com","13888888888","images/Choices5.jpg","李四","1");
INSERT INTO arms_user VALUES("5","dailong","123456","123456@qq.com","13888888888","images/Choices5.jpg","代龙","1");
INSERT INTO arms_user VALUES("6","yunjie","123456","123456@qq.com","13888888888","images/Choices5.jpg","云杰","1");
INSERT INTO arms_user VALUES("7","junbi","123456","123456@qq.com","13888888888","images/Choices5.jpg","君碧","1");
INSERT INTO arms_user VALUES("8","kejian","123456","123456@qq.com","13888888888","images/Choices5.jpg","科健","1");
#武器型号家族
CREATE TABLE arms_laptop_family(
  fid INT PRIMARY KEY,
  fname VARCHAR(32)
);
#武器模型家族数据导入
INSERT INTO arms_laptop_family VALUES
(10,"飞行器"),
(20,"舰船舰艇"),
(30,"枪械与单兵"),
(40,"坦克装甲车辆"),
(50,"火炮"),
(60,"导弹武器"),
(70,"爆炸物");
#武器图片库
CREATE TABLE arms_all_pic(
  all_id INT PRIMARY KEY AUTO_INCREMENT,  #武器编号
  all_pic VARCHAR(128)
);
#导入武器图片
INSERT INTO arms_all_pic VALUES(NULL,"images/banner_slide_01.jpg"),
(NULL,"images/banner_slide_02.jpg"),
(NULL,"images/banner_slide_03.jpg"),
(NULL,"images/banner_slide_04.jpg"),
(NULL,"images/banner_slide_05.jpg"),
(NULL,"images/bgfj.jpg"),
(NULL,"images/camera_skins.png"),
(NULL,"images/camera-loader.gif"),
(NULL,"images/Choices.jpg"),
(NULL,"images/Choices1.jpg"),
(NULL,"images/Choices2.jpg"),
(NULL,"images/Choices3.jpg"),
(NULL,"images/Choices4.jpg"),
(NULL,"images/Choices5.jpg"),
(NULL,"images/Choices6.jpg"),
(NULL,"images/Choices7.jpg"),
(NULL,"images/Choices8.jpg"),
(NULL,"images/icon_light.f13cff3.png"),
(NULL,"images/logo.png"),
(NULL,"images/mountain-1.jpg"),
(NULL,"images/sirendingzhi1.jpg"),
(NULL,"images/sirendingzhi2.jpg"),
(NULL,"images/sirendingzhi3.jpg"),
(NULL,"images/sirendingzhi4.jpg"),
(NULL,"images/sirendingzhi5.jpg"),
(NULL,"images/top.png");
#首页图片
CREATE TABLE arms_index_pic(
  all_id INT PRIMARY KEY AUTO_INCREMENT,  #武器编号
  all_pic VARCHAR(128)
);
INSERT INTO arms_index_pic VALUES(NULL,"images/index/1-lb.jpg"),
(NULL,"images/index/2-lb.jpg"),
(NULL,"images/index/3-lb.jpg"),
(NULL,"images/index/4-lb.jpg"),
(NULL,"images/index/5-lb.jpg"),
(NULL,"images/index/30-33.jpg"),
(NULL,"images/index/051C.jpg"),
(NULL,"images/index/AAAV.jpg"),
(NULL,"images/index/bg111.jpg"),
(NULL,"images/index/df26.jpg"),
(NULL,"images/index/DF31.jpg"),
(NULL,"images/index/F35(1).jpg"),
(NULL,"images/index/F35.jpg"),
(NULL,"images/index/F35a.jpg"),
(NULL,"images/index/indexbg1.jpg"),
(NULL,"images/index/indexbgtp.jpg"),
(NULL,"images/index/nmzji(1).jpg"),
(NULL,"images/index/nmzji.jpg"),
(NULL,"images/index/xr99A.jpg");
#飞行器页图片
CREATE TABLE arms_aerocraft_pic(
  all_id INT PRIMARY KEY AUTO_INCREMENT,  #武器编号
  all_pic VARCHAR(128)
);
INSERT INTO arms_aerocraft_pic VALUES(NULL,"images/aerocraft/aerocraft1.jfif"),
(NULL,"images/aerocraft/aerocraft2.jfif"),
(NULL,"images/aerocraft/aerocraft3.jfif"),
(NULL,"images/aerocraft/aerocraft4.jfif"),
(NULL,"images/aerocraft/aerocraft5.jfif"),
(NULL,"images/aerocraft/aerocraft6.jfif"),
(NULL,"images/aerocraft/aerocraft7.jfif"),
(NULL,"images/aerocraft/aerocraft8.jfif"),
(NULL,"images/aerocraft/aerocraft9.jfif"),
(NULL,"images/aerocraft/aerocraft10.jfif"),
(NULL,"images/aerocraft/aerocraft11.jfif"),
(NULL,"images/aerocraft/aerocraft12.jfif"),
(NULL,"images/aerocraft/aerocraft13.jfif"),
(NULL,"images/aerocraft/bgfj.jpg");
#舰船舰艇页图片
CREATE TABLE arms_ships_pic(
  all_id INT PRIMARY KEY AUTO_INCREMENT,  #武器编号
  all_pic VARCHAR(128)
);
INSERT INTO arms_ships_pic VALUES(NULL,"images/ships/1-1.jpg"),
(NULL,"images/ships/1-2.jpg"),
(NULL,"images/ships/2-1.jpg"),
(NULL,"images/ships/2-2.jpg"),
(NULL,"images/ships/3-1.jpg"),
(NULL,"images/ships/3-2.jpg"),
(NULL,"images/ships/4-1.jpg"),
(NULL,"images/ships/4-2.jpg"),
(NULL,"images/ships/5-1.jpg"),
(NULL,"images/ships/5-2.jpg"),
(NULL,"images/ships/6-1.jpg"),
(NULL,"images/ships/6-2.jpg"),
(NULL,"images/ships/7-1.jpg"),
(NULL,"images/ships/7-2.jpg"),
(NULL,"images/ships/8-1.jpg"),
(NULL,"images/ships/8-2.jpg"),
(NULL,"images/ships/9-1.jpg"),
(NULL,"images/ships/9-2.jpg"),
(NULL,"images/ships/10-1.jpg"),
(NULL,"images/ships/10-2.jpg"),
(NULL,"images/ships/11-1.jpg"),
(NULL,"images/ships/11-2.jpg"),
(NULL,"images/ships/12-1.jpg"),
(NULL,"images/ships/12-2.jpg"),
(NULL,"images/ships/bgjt.jpg");
#枪械与单兵页图片
CREATE TABLE arms_firearms_pic(
  all_id INT PRIMARY KEY AUTO_INCREMENT,  #武器编号
  all_pic VARCHAR(128)
);
INSERT INTO arms_firearms_pic VALUES(NULL,"images/firearms/1.jpg"),
(NULL,"images/firearms/2.jpg"),
(NULL,"images/firearms/3.jpg"),
(NULL,"images/firearms/4.jpg"),
(NULL,"images/firearms/5.jpg"),
(NULL,"images/firearms/6.jpg"),
(NULL,"images/firearms/7.jpg"),
(NULL,"images/firearms/8.jpg"),
(NULL,"images/firearms/9.jpg"),
(NULL,"images/firearms/10.jpg"),
(NULL,"images/firearms/11.jpg"),
(NULL,"images/firearms/12.jpg"),
(NULL,"images/firearms/13.jpg"),
(NULL,"images/firearms/14.jpg"),
(NULL,"images/firearms/15.jpg"),
(NULL,"images/firearms/16.jpg"),
(NULL,"images/firearms/17.jpg"),
(NULL,"images/firearms/18.jpg"),
(NULL,"images/firearms/19.jpg"),
(NULL,"images/firearms/20.jpg"),
(NULL,"images/firearms/21.jpg"),
(NULL,"images/firearms/bg.jpg"),
(NULL,"images/firearms/bg1.jpg"),
(NULL,"images/firearms/bg2.jpg"),
(NULL,"images/firearms/sq1.jpg"),
(NULL,"images/firearms/timg (1).jpg");
#坦克装甲车辆页图片
CREATE TABLE arms_armor_pic(
  all_id INT PRIMARY KEY AUTO_INCREMENT,  #武器编号
  all_pic VARCHAR(128)
);
INSERT INTO arms_armor_pic VALUES(NULL,"images/armor/0fba91b2291390367906.jpg"),
(NULL,"images/armor/2.jpg"),
(NULL,"images/armor/4.jpg"),
(NULL,"images/armor/13.jpg"),
(NULL,"images/armor/63.jpg"),
(NULL,"images/armor/87.jpg"),
(NULL,"images/armor/97.jpg"),
(NULL,"images/armor/A3F.jpg "),
(NULL,"images/armor/ab95dc6889b217bfeb730163372642c0180223b8.jpg"),
(NULL,"images/armor/BVP M80A.jpg"),
(NULL,"images/armor/h.jpg"),
(NULL,"images/armor/M1A1.jpg"),
(NULL,"images/armor/M60A3.jpg"),
(NULL,"images/armor/M-84.jpg"),
(NULL,"images/armor/M151.jpg"),
(NULL,"images/armor/MBT-2000.jpg"),
(NULL,"images/armor/PT-76.jpg"),
(NULL,"images/armor/PzKpfw I.jpg"),
(NULL,"images/armor/RAM.jpg"),
(NULL,"images/armor/T-54T-55.jpg"),
(NULL,"images/armor/timg.jpg"),
(NULL,"images/armor/x.jpg"),
(NULL,"images/armor/ZBD03.jpg");
#火炮页图片
CREATE TABLE arms_artillery_pic(
  all_id INT PRIMARY KEY AUTO_INCREMENT,  #武器编号
  all_pic VARCHAR(128)
);
INSERT INTO arms_artillery_pic VALUES(NULL,"images/artillery/ft1.jpg"),
(NULL,"images/artillery/ft2.jpg"),
(NULL,"images/artillery/ft3.jpg"),
(NULL,"images/artillery/ft4.jpg"),
(NULL,"images/artillery/ft5.jpg"),
(NULL,"images/artillery/ft6.jpg"),
(NULL,"images/artillery/gs1.jpg"),
(NULL,"images/artillery/gs2.jpg"),
(NULL,"images/artillery/gs3.jpg"),
(NULL,"images/artillery/gs4.jpg"),
(NULL,"images/artillery/gs5.jpg"),
(NULL,"images/artillery/gs6.jpg"),
(NULL,"images/artillery/hj1.jpg"),
(NULL,"images/artillery/hj2.jpg"),
(NULL,"images/artillery/hj3.jpg"),
(NULL,"images/artillery/hj4.jpg"),
(NULL,"images/artillery/hj5.jpg"),
(NULL,"images/artillery/hj6.jpg"),
(NULL,"images/artillery/hk1.jpg"),
(NULL,"images/artillery/hk2.jpg"),
(NULL,"images/artillery/hk3.jpg"),
(NULL,"images/artillery/hk4.jpg"),
(NULL,"images/artillery/hk5.jpg"),
(NULL,"images/artillery/hk6.jpg"),
(NULL,"images/artillery/j1.jpg"),
(NULL,"images/artillery/j2.jpg"),
(NULL,"images/artillery/j3.jpg"),
(NULL,"images/artillery/j4.jpg"),
(NULL,"images/artillery/j5.jpg"),
(NULL,"images/artillery/j6.jpg"),
(NULL,"images/artillery/jl1.jpg"),
(NULL,"images/artillery/jl2.jpg"),
(NULL,"images/artillery/jl3.jpg"),
(NULL,"images/artillery/jl4.jpg"),
(NULL,"images/artillery/jl5.jpg"),
(NULL,"images/artillery/jl6.jpg"),
(NULL,"images/artillery/jll1.jpg"),
(NULL,"images/artillery/jll2.jpg"),
(NULL,"images/artillery/jll3.jpg"),
(NULL,"images/artillery/jll4.jpg"),
(NULL,"images/artillery/jll5.jpg"),
(NULL,"images/artillery/jll6.jpg"),
(NULL,"images/artillery/ld1.jpg"),
(NULL,"images/artillery/ld2.jpg"),
(NULL,"images/artillery/ld3.jpg"),
(NULL,"images/artillery/ld4.jpg"),
(NULL,"images/artillery/ld5.jpg"),
(NULL,"images/artillery/ld6.jpg"),
(NULL,"images/artillery/zx1.jpg"),
(NULL,"images/artillery/zx2.jpg"),
(NULL,"images/artillery/zx3.jpg"),
(NULL,"images/artillery/zx4.jpg"),
(NULL,"images/artillery/zx5.jpg"),
(NULL,"images/artillery/zx6.jpg"),
(NULL,"images/artillery/tp1.jpg");
#导弹武器页图片
CREATE TABLE arms_missile_pic(
  all_id INT PRIMARY KEY AUTO_INCREMENT,  #武器编号
  all_pic VARCHAR(128)
);
#爆炸物页图片
CREATE TABLE arms_explosive_pic(
  all_id INT PRIMARY KEY AUTO_INCREMENT,  #武器编号
  all_pic VARCHAR(128)
);
#用户页图片
CREATE TABLE arms_user_pic(
  all_id INT PRIMARY KEY AUTO_INCREMENT,  #武器编号
  all_pic VARCHAR(128)
);
INSERT INTO arms_user_pic VALUES(NULL,"images/user/banner_slide_01.jpg"),
(NULL,"images/user/banner_slide_02.jpg"),
(NULL,"images/user/banner_slide_03.jpg"),
(NULL,"images/user/banner_slide_04.jpg"),
(NULL,"images/user/banner_slide_05.jpg"),
(NULL,"images/user/carousel-1.jpg"),
(NULL,"images/user/carousel-2.jpg"),
(NULL,"images/user/carousel-3.jpg"),
(NULL,"images/user/carousel-4.jpg"),
(NULL,"images/user/carousel-5.jpg"),
(NULL,"images/user/carousel-6.jpg"),
(NULL,"images/user/carousel-7.jpg"),
(NULL,"images/user/carousel-8.jpg");
#武器模型
CREATE TABLE arms_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属型号家族编号
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  price DECIMAL(10,2),        #价格
  promise VARCHAR(64),        #服务承诺
  lname VARCHAR(32),          #商品名称
  category VARCHAR(32),       #所属分类
  details VARCHAR(1024),      #产品详细说明
  shelf_time BIGINT,          #上架时间
  sold_count INT,             #已售出的数量
  is_onsale BOOLEAN           #是否促销中
);
#武器模型数据导入
INSERT INTO arms_laptop VALUES
(1,1,"1","1",1,"1","1","1","1","1","1",true);
#武器模型图片
CREATE TABLE arms_laptop_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  laptop_id INT,              #武器模型编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);
#武器模型图片导入
INSERT INTO arms_laptop_pic VALUES
(NULL,1,"","","");
#收货地址信息
CREATE TABLE arms_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名
  is_default BOOLEAN          #是否为当前用户的默认收货地址
);
#购物车条目
CREATE TABLE arms_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);
#用户订单
CREATE TABLE arms_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,		#AUTO_INCREMENT=10000000;
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
);
#用户订单详情
CREATE TABLE arms_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);
#轮播广告商品
CREATE TABLE arms_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);
INSERT INTO arms_carousel VALUES
(NULL,"","","");
#首页商品
CREATE TABLE arms_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);
INSERT INTO arms_index_product VALUES
(NULL,"","","",1,"",1,1,1);


