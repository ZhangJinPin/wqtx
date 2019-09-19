//登录
function out_luname_msg() {
	if (!uname.value) {
		ln_msg.innerHTML = "用户名为空";
		ln_msg.style.color = "#f00";
		return;
	} else {
		ln_msg.innerHTML = "输入成功";
		ln_msg.style.color = "#0f0";
		return;
	}
}

function out_lupwd_msg() {
	if (!upwd.value) {
		lp_msg.innerHTML = "密码为空";
		lp_msg.style.color = "#f00";
		return;
	} else {
		lp_msg.innerHTML = "输入成功";
		lp_msg.style.color = "#0f0";
		return;
	}
}

function user_login() {
	var $uname = uname.value;
	var $upwd = upwd.value;
	//1.获取xhr异步对象
	var xhr = new XMLHttpRequest();
	//4.绑定监听，获取响应
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var result = xhr.responseText;
			if (result == 1&&flag==true){
				alert("登录成功");
				window.location.href = "http://127.0.0.1:3000/index.html"
			} else {
				document.getElementById("login_msg").style.color = "#f00";
				login_msg.innerHTML = "用户名密码错误或滑块验证失败"
				login_msg.style.backgroundColor="#fff"
			}
		}
	}
	//非空判断
	if (!$uname) {
		document.getElementById("ln_msg").style.color = "#f00";
		ln_msg.innerHTML = "用户名为空";
		return;
	}
	if (!$upwd) {
		document.getElementById("lp_msg").style.color = "#f00";
		lp_msg.innerHTML = "用户密码为空";
		return;
	}
	//2.打开连接，创建对象
	xhr.open("get", "http://127.0.0.1:3000/user/login/" + $uname + "-" + $upwd, true);
	//3.发送请求
	xhr.send();
}

//注册
function runame_msg() {
	rn_msg.innerHTML = "用户名3~8位";
	rn_msg.style.color = "#000000";
}

function rupwd_msg() {
	rp_msg.innerHTML = "密码6~12位";
	rp_msg.style.color = "#000000";
}

function out_rupwd_msg() {
	if (rupwd.value) {
		if (rupwd.value.length >= 6 && upwd.value.length <= 12) {
			rp_msg.innerHTML = "输入成功";
			rp_msg.style.color = "#0f0";
		} else {
			rp_msg.innerHTML = "密码格式不正确";
			rp_msg.style.color = "#f00";
		}
	} else {
		rp_msg.innerHTML = "密码不能为空";
		rp_msg.style.color = "#f00";
	}
}

var str = false;

function out_runame_msg() {
	if (runame.value) {
		if (runame.value.length >= 3 && runame.value.length <= 8) {
			var $uname = runame.value;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4 && xhr.status == 200) {
					var result = xhr.responseText;
					if (result == "1") {
						document.getElementById("rn_msg").style.color = "red";
						rn_msg.innerHTML = "该用户已存在";
						str = true;
					} else {
						document.getElementById("rn_msg").style.color = "green";
						rn_msg.innerHTML = "该用户名可用"
					}
				}
			}
			xhr.open("get", "/double?uname=" + $uname, true);
			xhr.send();
		} else {
			rn_msg.innerHTML = "用户名格式不正确";
			rn_msg.style.color = "#f00";
		}
	} else {
		rn_msg.innerHTML = "用户名不能为空";
		rn_msg.style.color = "#f00";
	}
}

function user_reg() {
	var $uname = runame.value;
	var $upwd = rupwd.value;
	var val1 = document.getElementById("text").value;
	if (!$uname) {
		rn_msg.innerHTML = "用户名称为空";
		rn_msg.style.color = "#f00"
		return;
	}
	if (!$upwd) {
		rp_msg.innerHTML = "用户密码为空";
		rp_msg.style.color = "#f00"
		return;
	}
	if (val1 != "") {
		if (val1 != code) {
			text_msg.innerHTML = "验证码不正确";
			text_msg.style.color = "#f00";
			return;
		} else {
			text_msg.innerHTML = "验证成功";
			text_msg.style.color = "#0f0";
		}
	} else {
		text_msg.innerHTML = "验证码为空";
		text_msg.style.color = "#f00";
		return;
	}
	if (str == true) {
		str = false;
		rn_msg.innerHTML = "该用户名以被注册";
		rn_msg.style.color = "#f00";
	} else {
		if (rn_msg.innerHTML == "该用户名以被注册" || rn_msg.innerHTML == "该用户已存在") {
			alert("该用户以被注册");
		} else {
			//1.获取xhr异步对象
			var xhr = new XMLHttpRequest();
			//4.绑定监听，获取响应
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4 && xhr.status == 200) {
					var result = xhr.responseText;
					if (result == 1) {
						alert("注册成功");
						reg.style.display = "none";
						login.style.display = "block";
						window.location.href = "http://127.0.0.1:3000/user.html"
						return;
					} else {
						alert("注册失败");
						return;
					}
				}
			}
			//2.打开连接，创建请求
			xhr.open("post", "/user/reg", true);
			//3.发送请求
			var formdata = "uname=" + $uname + "&upwd=" + $upwd;
			//设置请求头信息
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(formdata);
		}
	}
}
var code;
change();

function change() {
	code = "";
	var codeLength = 4;
	var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
		'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
	for (var i = 0; i < codeLength; i++) {
		var charIndex = Math.floor(Math.random() * 36);
		code += selectChar[charIndex];
	}
	document.getElementById("discode").style.fontFamily = "Fixedsys";
	document.getElementById("discode").style.letterSpacing = "5px";
	document.getElementById("discode").style.fontSize = "30px";
	document.getElementById("discode").style.color =
		`rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1)`;
	document.getElementById("discode").style.backgroundColor = "#ccc";
	document.getElementById("discode").innerHTML = code;
	document.getElementById("discode").style.lineHeight = "55px";
}

function into() {
	text_msg.innerHTML = "验证码为4位";
	text_msg.style.color = "#000000"
}

function outto() {
	var val1 = document.getElementById("text").value;
	var val2 = code;
	if (val1 != "") {
		if (val1 != val2) {
			text_msg.innerHTML = "验证码不正确";
			text_msg.style.color = "#f00";
		} else {
			text_msg.innerHTML = "验证成功";
			text_msg.style.color = "#0f0";
		}
	} else {
		text_msg.innerHTML = "验证码为空";
		text_msg.style.color = "#f00";
	}
}

//点击切换
var login = document.getElementById("login");
var reg = document.getElementById("reg");

function loginreg() {
	reg.style.display = "block";
	login.style.display = "none";
}

function reglogin() {
	reg.style.display = "none";
	login.style.display = "block";
}




// 背景
jQuery(function () {
	$ = jQuery;
	$('#templatemo_banner_slide > div').camera({
		height: 'auto',
		loader: 'bar',
		playPause: false,
		pagination: false,
		thumbnails: false,
		hover: false,
		opacityOnGrid: false,
		imagePath: 'images/user/'
	});
	changebg();
});
function changebg() {
	banner_slider_height = $(window).outerHeight() - 285;

	var bheight = document.documentElement.clientHeight;
	if (bheight == 0) { bheight = 1000; }
	banner_slider_height = (banner_slider_height < bheight) ? bheight : banner_slider_height;
	$("#templatemo_banner_slide > div").height(banner_slider_height);
	$("#templatemo_banner_slide").height(banner_slider_height);
	$(window).resize(function () {
		banner_slider_height = $(window).outerHeight() - 285;
		banner_slider_height = (banner_slider_height < bheight) ? bheight : banner_slider_height;
		$("#templatemo_banner_slide > div").height(banner_slider_height);
		$("#templatemo_banner_slide").height(banner_slider_height);
	});

}
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
	{
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert(jQuery.easing.default);
			return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c * (t /= d) * t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t == 0) return b;
			if (t == d) return b + c;
			if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s = 1.70158; var p = 0; var a = c;
			if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
			if (a < Math.abs(c)) { a = c; var s = p / 4; }
			else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s = 1.70158; var p = 0; var a = c;
			if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
			if (a < Math.abs(c)) { a = c; var s = p / 4; }
			else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s = 1.70158; var p = 0; var a = c;
			if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5);
			if (a < Math.abs(c)) { a = c; var s = p / 4; }
			else var s = p / (2 * Math.PI) * Math.asin(c / a);
			if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
			return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
			} else if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
			} else {
				return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
			return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
		}
	});



// ban
try {
	if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

	} else {
		$(function () {
			var canvas = document.querySelector('canvas'),
				ctx = canvas.getContext('2d')
			canvas.width = $(window).width();
			canvas.height = $(window).height();
			ctx.lineWidth = .3;
			ctx.strokeStyle = (new Color(150)).style;

			var mousePosition = {
				x: 30 * canvas.width / 100,
				y: 30 * canvas.height / 100
			};

			var dots = {
				nb: 250,
				distance: 100,
				d_radius: 150,
				array: []
			};

			function colorValue(min) {
				return Math.floor(Math.random() * 255 + min);
			}

			function createColorStyle(r, g, b) {
				return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
			}

			function mixComponents(comp1, weight1, comp2, weight2) {
				return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
			}

			function averageColorStyles(dot1, dot2) {
				var color1 = dot1.color,
					color2 = dot2.color;

				var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
					g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
					b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
				return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
			}

			function Color(min) {
				min = min || 0;
				this.r = colorValue(min);
				this.g = colorValue(min);
				this.b = colorValue(min);
				this.style = createColorStyle(this.r, this.g, this.b);
			}

			function Dot() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;

				this.vx = -.5 + Math.random();
				this.vy = -.5 + Math.random();

				this.radius = Math.random() * 2;

				this.color = new Color();
			}

			Dot.prototype = {
				draw: function () {
					ctx.beginPath();
					ctx.fillStyle = this.color.style;
					ctx.arc(this.x, this.y, this.radius, 0, Math.PI, false);
					ctx.fill();
				}
			};

			function createDots() {
				for (i = 0; i < dots.nb; i++) {
					dots.array.push(new Dot());
				}
			}

			function moveDots() {
				for (i = 0; i < dots.nb; i++) {

					var dot = dots.array[i];

					if (dot.y < 0 || dot.y > canvas.height) {
						dot.vx = dot.vx;
						dot.vy = - dot.vy;
					}
					else if (dot.x < 0 || dot.x > canvas.width) {
						dot.vx = - dot.vx;
						dot.vy = dot.vy;
					}
					dot.x += dot.vx;
					dot.y += dot.vy;
				}
			}

			function connectDots() {
				for (i = 0; i < dots.nb; i++) {
					for (j = 0; j < dots.nb; j++) {
						i_dot = dots.array[i];
						j_dot = dots.array[j];

						if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance) {
							if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius) {
								ctx.beginPath();
								ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
								ctx.moveTo(i_dot.x, i_dot.y);
								ctx.lineTo(j_dot.x, j_dot.y);
								ctx.stroke();
								ctx.closePath();
							}
						}
					}
				}
			}

			function drawDots() {
				for (i = 0; i < dots.nb; i++) {
					var dot = dots.array[i];
					dot.draw();
				}
			}

			function animateDots() {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				moveDots();
				connectDots();
				drawDots();

				requestAnimationFrame(animateDots);
			}

			$('canvas').on('mousemove', function (e) {
				mousePosition.x = e.pageX;
				mousePosition.y = e.pageY;
			});

			$('canvas').on('mouseleave', function (e) {
				mousePosition.x = canvas.width / 2;
				mousePosition.y = canvas.height / 2;
			});

			createDots();
			requestAnimationFrame(animateDots);
		});
	}
} catch (e) { }

// 滑块
(function (window) {
	const l = 42, // 滑块边长
		r = 10, // 滑块半径
		w = 260, // canvas宽度
		h = 50, // canvas高度
		PI = Math.PI
	const L = l + r * 2 // 滑块实际边长

	function getRandomNumberByRange(start, end) {
		return Math.round(Math.random() * (end - start) + start)
	}

	function createCanvas(width, height) {
		const canvas = createElement('canvas')
		canvas.width = width
		canvas.height = height
		return canvas
	}

	function createImg(onload) {
		const img = createElement('img')
		img.crossOrigin = "Anonymous"
		img.onload = onload
		img.onerror = () => {
			img.src = getRandomImg()
		}
		img.src = getRandomImg()
		return img
	}

	function createElement(tagName) {
		return document.createElement(tagName)
	}

	function addClass(tag, className) {
		tag.classList.add(className)
	}

	function removeClass(tag, className) {
		tag.classList.remove(className)
	}

	function getRandomImg() {
		return 'https://picsum.photos/300/150/?image=' + getRandomNumberByRange(0, 100)
	}

	function draw(ctx, operation, x, y) {
		ctx.beginPath()
		ctx.moveTo(x, y)
		ctx.lineTo(x + l / 2, y)
		ctx.arc(x + l / 2, y - r + 2, r, 0, 2 * PI)
		ctx.lineTo(x + l / 2, y)
		ctx.lineTo(x + l, y)
		ctx.lineTo(x + l, y + l / 2)
		ctx.arc(x + l + r - 2, y + l / 2, r, 0, 2 * PI)
		ctx.lineTo(x + l, y + l / 2)
		ctx.lineTo(x + l, y + l)
		ctx.lineTo(x, y + l)
		ctx.lineTo(x, y)
		ctx.fillStyle = '#fff'
		ctx[operation]()
		ctx.beginPath()
		ctx.arc(x, y + l / 2, r, 1.5 * PI, 0.5 * PI)
		ctx.globalCompositeOperation = "xor"
		ctx.fill()
	}

	function sum(x, y) {
		return x + y
	}

	function square(x) {
		return x * x
	}

	class jigsaw {
		constructor(el, success, fail) {
			this.el = el
			this.success = success
			this.fail = fail
		}

		init() {
			this.initDOM()
			this.initImg()
			this.draw()
			this.bindEvents()
		}

		initDOM() {
			const canvas = createCanvas(w, h) // 画布
			const block = canvas.cloneNode(true) // 滑块
			const sliderContainer = createElement('div')
			const refreshIcon = createElement('div')
			const sliderMask = createElement('div')
			const slider = createElement('div')
			const sliderIcon = createElement('span')
			const text = createElement('span')

			block.className = 'block'
			sliderContainer.className = 'sliderContainer'
			refreshIcon.className = 'refreshIcon'
			sliderMask.className = 'sliderMask'
			slider.className = 'slider'
			sliderIcon.className = 'sliderIcon'
			text.innerHTML = '向右滑动滑块填充拼图'
			text.style.color = "#000000"
			text.className = 'sliderText'

			const el = this.el
			el.appendChild(canvas)
			el.appendChild(refreshIcon)
			el.appendChild(block)
			slider.appendChild(sliderIcon)
			sliderMask.appendChild(slider)
			sliderContainer.appendChild(sliderMask)
			sliderContainer.appendChild(text)
			el.appendChild(sliderContainer)

			Object.assign(this, {
				canvas,
				block,
				sliderContainer,
				refreshIcon,
				slider,
				sliderMask,
				sliderIcon,
				text,
				canvasCtx: canvas.getContext('2d'),
				blockCtx: block.getContext('2d')
			})
		}

		initImg() {
			const img = createImg(() => {
				this.canvasCtx.drawImage(img, 0, 0, w, h)
				this.blockCtx.drawImage(img, 0, 0, w, h)
				const y = this.y - r * 2 + 2
				const ImageData = this.blockCtx.getImageData(this.x, y, L, L)
				this.block.width = L
				this.blockCtx.putImageData(ImageData, 0, y)
			})
			this.img = img
		}

		draw() {
			// 随机创建滑块的位置
			this.x = getRandomNumberByRange(L + 10, w - (L + 10))
			this.y = getRandomNumberByRange(10 + r * 2, h - (L + 10))
			draw(this.canvasCtx, 'fill', this.x, this.y)
			draw(this.blockCtx, 'clip', this.x, this.y)
		}

		clean() {
			this.canvasCtx.clearRect(0, 0, w, h)
			this.blockCtx.clearRect(0, 0, w, h)
			this.block.width = w
		}

		bindEvents() {
			this.el.onselectstart = () => false
			this.refreshIcon.onclick = () => {
				this.reset()
			}

			let originX, originY, trail = [], isMouseDown = false
			this.slider.addEventListener('mousedown', function (e) {
				originX = e.x, originY = e.y
				isMouseDown = true
			})
			document.addEventListener('mousemove', (e) => {
				if (!isMouseDown) return false
				const moveX = e.x - originX
				const moveY = e.y - originY
				if (moveX < 0 || moveX + 38 >= w) return false
				this.slider.style.left = moveX + 'px'
				var blockLeft = (w - 40 - 20) / (w - 40) * moveX
				this.block.style.left = blockLeft + 'px'

				addClass(this.sliderContainer, 'sliderContainer_active')
				this.sliderMask.style.width = moveX + 'px'
				trail.push(moveY)
			})
			document.addEventListener('mouseup', (e) => {
				if (!isMouseDown) return false
				isMouseDown = false
				if (e.x == originX) return false
				removeClass(this.sliderContainer, 'sliderContainer_active')
				this.trail = trail
				const { spliced, TuringTest } = this.verify()
				if (spliced) {
					if (TuringTest) {
						addClass(this.sliderContainer, 'sliderContainer_success')
						this.success && this.success()
					} else {
						addClass(this.sliderContainer, 'sliderContainer_fail')
						this.text.innerHTML = '再试一次'
						this.reset()
					}
				} else {
					addClass(this.sliderContainer, 'sliderContainer_fail')
					this.fail && this.fail()
					setTimeout(() => {
						this.reset()
					}, 1000)
				}
			})
		}

		verify() {
			const arr = this.trail // 拖动时y轴的移动距离
			const average = arr.reduce(sum) / arr.length // 平均值
			const deviations = arr.map(x => x - average) // 偏差数组
			const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length) // 标准差
			const left = parseInt(this.block.style.left)
			return {
				spliced: Math.abs(left - this.x) < 10,
				TuringTest: average !== stddev, // 只是简单的验证拖动轨迹，相等时一般为0，表示可能非人为操作
			}
		}

		reset() {
			this.sliderContainer.className = 'sliderContainer'
			this.slider.style.left = 0
			this.block.style.left = 0
			this.sliderMask.style.width = 0
			this.clean()
			this.img.src = getRandomImg()
			this.draw()
		}

	}

	window.jigsaw = {
		init: function (element, success, fail) {
			new jigsaw(element, success, fail).init()
		}
	}
}(window))
var flag = false;
jigsaw.init(document.getElementById('captcha'), function () {
	flag = true;
})