$(document).ready(function() {
	//==============================全部商品分类===================================
	var gear = $('.gear>li');
	var ite1 = $('.item1');
	var ite2 = $('.item2');
	var ite3 = $('.item3');
	var ite4 = $('.item4');
	var ite5 = $('.item5');
	var ite6 = $('.item6');
	var ite7 = $('.item7');
	$('.all').hover(function() {
		$('.com').show()
	})
	gear.eq(0).hover(function() {
		ite1.show();
		ite1.hover(function() {
			ite1.show()
			gear.eq(0).css({
				'background': '#fcf9f9',
				'border': '1px solid #c30'
			}).siblings('li').css({
				'background': '#fff',
				'border': ''
			})
		}, function() {
			ite1.hide();
			$('.com').hide()
			gear.eq(0).css({
				'background': '',
				'border': ''
			})
		})
	}, function() {
		ite1.hide();
	});
	gear.eq(1).hover(function() {
		ite2.show();
		ite2.hover(function() {
			ite2.show()
			gear.eq(1).css({
				'background': '#fcf9f9',
				'border': '1px solid #c30'
			}).siblings('li').css({
				'background': '#fff',
				'border': ''
			})
		}, function() {
			ite2.hide();
			$('.com').hide()
			gear.eq(1).css({
				'background': '',
				'border': ''
			})
		})
	}, function() {
		ite2.hide();
	});
	gear.eq(2).hover(function() {
		ite3.show();
		ite3.hover(function() {
			ite3.show()
			gear.eq(2).css({
				'background': '#fcf9f9',
				'border': '1px solid #c30'
			}).siblings('li').css({
				'background': '#fff',
				'border': ''
			})
		}, function() {
			ite3.hide();
			$('.com').hide()
			gear.eq(2).css({
				'background': '',
				'border': ''
			})
		})
	}, function() {
		ite3.hide();
	});
	gear.eq(3).hover(function() {
		ite4.show();
		ite4.hover(function() {
			ite4.show()
			gear.eq(3).css({
				'background': '#fcf9f9',
				'border': '1px solid #c30'
			}).siblings('li').css({
				'background': '#fff',
				'border': ''
			})

		}, function() {
			ite4.hide();
			$('.com').hide()
			gear.eq(3).css({
				'background': '',
				'border': ''
			})
		})
	}, function() {
		ite4.hide();
	});
	gear.eq(4).hover(function() {
		ite5.show();
		ite5.hover(function() {
			ite5.show()
			gear.eq(4).css({
				'background': '#fcf9f9',
				'border': '1px solid #c30'
			}).siblings('li').css({
				'background': '#fff',
				'border': ''
			})
		}, function() {
			ite5.hide();
			$('.com').hide()
			gear.eq(4).css({
				'background': '',
				'border': ''
			})
		})
	}, function() {
		ite5.hide();
	});
	gear.eq(5).hover(function() {
		ite6.show();
		ite6.hover(function() {
			ite6.show()
			gear.eq(5).css({
				'background': '#fcf9f9',
				'border': '1px solid #c30'
			}).siblings('li').css({
				'background': '#fff',
				'border': ''
			})
		}, function() {
			ite6.hide();
			$('.com').hide()
			gear.eq(5).css({
				'background': '',
				'border': ''
			})
		})
	}, function() {
		ite6.hide();
	});
	gear.eq(6).hover(function() {
		ite7.show();
		ite7.hover(function() {
			ite7.show()
			gear.eq(6).css({
				'background': '#fcf9f9',
				'border': '1px solid #c30'
			}).siblings('li').css({
				'background': '#fff',
				'border': ''
			})
		}, function() {
			ite7.hide();
			$('.com').hide()
			gear.eq(6).css({
				'background': '',
				'border': ''
			})
		})
	}, function() {
		ite7.hide();
	});

	//=========================登录页账号==============================
	var $s2 = $('.s2');
	var $int1 = $('.int1');
	var regMobile = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
	var emal = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	$int1.blur(function() {
		var val = $(this).val();
		var val1 = $(this).val();
		if (regMobile.test(val) == true || emal.test(val1) == true) {
			$s2.html('ok');
			$s2.css('color', '#090')
		} else {
			$s2.html('请正确输入手机号或邮箱号');
			$s2.css('color', 'red');
		}
	});
	//==============================登录页密码===============================================
	var $s5 = $('.s5');
	var $int8 = $('.int8');
	var regWord = /^[a-z0-9_-]{6,18}$/;
	$int8.blur(function() {
		var val4 = $int8.val();
		if (regWord.test(val4) == true) {
			$s5.text('ok');
			$s5.css('color', '#090');
			return true;
		} else {
			$s5.text('请输入6-18位的密码');
			$int8.val('');
			$s5.css('color', 'red');
		}
	});
	//================================注册页输入手机号==========================================
	var $sj2 = $('.sj2');
	var $int3 = $('.int3');
	var regMobile = /^1\d{10}$/;
	$int3.blur(function() {
		var val = $(this).val();
		if (regMobile.test(val) == true) {
			$sj2.text('ok');
			$sj2.css('color', '#090');
			return true;

		} else {
			$sj2.html('请正确输入手机号!');
			$sj2.css('color', 'red');
		}
	});
	//=============================注册页输入邮箱===============================
	var $el2 = $('.el2');
	var $int_5 = $('.int_5');
	var ema = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	$int_5.blur(function() {
		var va = $(this).val();
		if (ema.test(va) == true) {
			$el2.html('订单信息和优惠券等信息会通过邮件发给您');
			$el2.css('color', '#999');
		} else {
			$el2.html('请正确输入邮箱');
			$el2.css('color', 'red');
		}
	});
	//==============================注册页密码===============================================
	var $sm2 = $('.sm2');
	var $int7 = $('.int7');
	var regWord = /^[a-z0-9_-]{6,18}$/;
	$int7.blur(function() {
		var val4 = $int7.val();
		if (regWord.test(val4) == true) {
			$sm2.text('ok');
			$sm2.css('color', '#090');
			return true;
		} else {
			$sm2.text('请输入6-18位的密码');
			$int7.val('');
			$sm2.css('color', 'red');
		}
	});
	//==============================注册页两次密码确认====================================
	var $sm4 = $('.sm4');
	var $mmqr = $('.mmqr');
	var regWord = /^[a-z0-9_-]{6,18}$/;
	$mmqr.blur(function() {
		var val5 = $mmqr.val();
		var val4 = $int7.val();
		if (val5 != val4) {
			$sm4.text('您两次输入的密码不一致');
			$sm2.text('请重新输入您的密码');
			$sm2.css('color', 'red');
			$sm4.css('color', 'red');
			$mmqr.val('');
			$int7.val('');
		} else {
			$sm2.html('ok');
			$sm4.html('ok');
			$sm2.css('color', '#090');
			$sm4.css('color', '#090');

		}
	});
	//=================================随机获取验证码=======================================
	$.ajax({
		url: 'data/yzm.json',
		type: 'get',
		dataType: 'json',
		success: function(msg) {
			var data = msg;
			$('.veripic').attr('src', data[Math.floor(Math.random() * 20)].url);
			$('.veripic,.s4').click(function() {
				$('.veripic').attr('src', data[Math.floor(Math.random() * 20)].url)
			})
		}
	});
	//====================================登录================================

});

//==========================发送短信验证=====================================
window.onload = function() {
	var b = document.getElementsByClassName("int5")[0];
	b.onclick = function() {
		var s = 60;
		b.value = s + "s后重新获取验证码";
		b.disabled = "disabled";
		var intervalID = setInterval(function() {
			s--;
			b.value = s + "s后重新获取验证码";
			b.disabled = "disabled";
			if (s == 0) {
				b.value = "获取验证码";
				b.disabled = "";
				clearInterval(intervalID);
			}
		}, 1000);
	}
};