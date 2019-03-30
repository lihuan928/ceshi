$(function() {
	var delParent;
	var defaults = {
		fileType: ["jpg", "png", "bmp", "jpeg"],
		fileSize: 1024 * 1024 * 10
	};
	$(".file").change(function() {
		var idFile = $(this).attr("id");
		var file = document.getElementById(idFile);
		var imgContainer = $(this).parents(".z_photo");
		var fileList = file.files;
		var input = $(this).parent();
		var imgArr = [];
		var numUp = imgContainer.find(".up-section").length;
		var totalNum = numUp + fileList.length;
		if (fileList.length > 5 || totalNum > 5) {
			alert("上传图片数目不可以超过5个，请重新选择");
		} else if (numUp < 5) {
			fileList = validateUp(fileList);
			for (var i = 0; i < fileList.length; i++) {
				var imgUrl = window.URL.createObjectURL(fileList[i]);
				imgArr.push(imgUrl);
				var $section = $("<section class='up-section fl loading'>");
				imgContainer.prepend($section);
				var $span = $("<span class='up-span'>");
				$span.appendTo($section);
				var $img0 = $("<img class='close-upimg'>").on("click", function(event) {
					event.preventDefault();
					event.stopPropagation();
					$(".works-mask").show();
					delParent = $(this).parent();
				});
				$img0.attr("src", "img/a7.png").appendTo($section);
				var $img = $("<img class='up-img up-opcity'>");
				$img.attr("src", imgArr[i]);
				$img.appendTo($section);
				var $p = $("<p class='img-name-p'>");
				$p.html(fileList[i].name).appendTo($section);
				var $input = $("<input id='taglocation' name='taglocation' value='' type='hidden'>");
				$input.appendTo($section);
				var $input2 = $("<input id='tags' name='tags' value='' type='hidden'/>");
				$input2.appendTo($section);
			}
		}
		setTimeout(function() {
			$(".up-section").removeClass("loading");
			$(".up-img").removeClass("up-opcity");
		}, 450);
		numUp = imgContainer.find(".up-section").length;
		if (numUp >= 5) {
			$(this).parent().hide();
		}
		$(this).val("");
	});
	$(".z_photo").delegate(".close-upimg", "click", function() {
		$(".works-mask").show();
		delParent = $(this).parent();
	});
	$(".wsdel-ok").click(function() {
		$(".works-mask").hide();
		var numUp = delParent.siblings().length;
		if (numUp < 6) {
			delParent.parent().find(".z_file").show();
		}
		delParent.remove();
	});
	$(".wsdel-no").click(function() {
		$(".works-mask").hide();
	});

	function validateUp(files) {
		var arrFiles = [];
		for (var i = 0, file; file = files[i]; i++) {
			var newStr = file.name.split("").reverse().join("");
			if (newStr.split(".")[0] != null) {
				var type = newStr.split(".")[0].split("").reverse().join("");
				if (jQuery.inArray(type, defaults.fileType) > -1) {
					if (file.size >= defaults.fileSize) {
						alert(file.size);
						alert('您这个"' + file.name + '"文件大小过大');
					} else {
						arrFiles.push(file);
					}
				} else {
					alert('您这个"' + file.name + '"上传类型不符合');
				}
			} else {
				alert('您这个"' + file.name + '"没有类型, 无法识别');
			}
		}
		return arrFiles;
	}
})
