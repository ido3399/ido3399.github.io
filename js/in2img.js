	onload=function(){
		var arr = document.getElementsByClassName("img");
		for(var i=0;i<arr.length;i++){
			arr[i].style.left = i*850+"px";
		}
	}
	function LeftMove(){
		var arr = document.getElementsByClassName("img");//获取四个子div
		for(var i=0;i<arr.length;i++){
			var left = parseFloat(arr[i].style.left);
			left-=3;
			var width = 850;//图片的宽度
			if(left<=-width){
				left=(arr.length-1)*width;//当图片完全走出显示框，拼接到末尾
				clearInterval(moveId);
			}
			arr[i].style.left = left+"px";
		}
	}
	function divInterval(){
		moveId=setInterval(LeftMove,30);
	}
	
	
	timeId=setInterval(divInterval,3000);
	
	function stop(){
		clearInterval(timeId);
	}
	function start(){
		clearInterval(timeId);
		timeId=setInterval(divInterval,3000);
	}
	
	//页面失去焦点停止
	onblur = function(){
		stop();
	}
	//页面获取焦点时开始
	onfocus = function(){
		start();
	}