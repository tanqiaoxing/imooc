window.onload=function jsGotoTop(){
    // document.getElementsByClassName("elevator-msg").onmouseover=function(){
    //     document.getElementById("backTopI").style.display="none";
    //     document.getElementById("backTopSpan").style.display="block";
    // };
    // document.getElementsByClassName("elevator-msg").onmouseout=function(){
   	//     document.getElementById("backTopSpan").style.display="none";
    //     document.getElementById("backTopI").style.display="block";
    // };


    var btnTop = document.getElementById("backTop");
    var timer = null;

    window.onscroll = function(){
    	var backTop = getScrollTop();
    	if(backTop >= 20){
    		btnTop.style.display = "block";
    	}else{
            btnTop.style.display = "none";
    	}
    };

    btnTop.onclick = function(){
    	timer = setInterval(function(){
            var backTop = getScrollTop();
            var speedTop = backTop / 5;
            setScrollTop(backTop - speedTop);
            if(backTop == 0){
                clearInterval(timer);
            }
    	},10);
    };

    //获取当前视口的顶端数值
    var getScrollTop = function(){
    	var sTop;
    	if(document.compatMode == "BackCompat"){
    		sTop = document.body.scorllTop;
    	}
    	else{
    		sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
    	}
    	return sTop;
    }

    //设置当前视口的顶端数值
    var setScrollTop = function(top){
    	if(document.compatMode == "BackCompat"){
    		document.body.scrollTop = top;
    	}
    	else{
            if(document.documentElement.scrollTop == 0){
            	document.body.scrollTop = top;
            }
            else{
            	document.documentElement.scrollTop = top;
            }
    	}
    };

    //登录弹框
    // var signinBtn = document.getElementsByClassName("signin-btn");
    // var signin = document.getElementById("signin");
    // signinBtn.onclick = function(){
    //     document.getElementById("signin").style.display = "block";
    // };


}

// function openLogin(){
//     document.getElementById("signin").style.display="block";
//     document.getElementById("back-drop").style.display="block";
// }
// function closeLogin(){
// 	document.getElementById("signin").style.display="none";
// 	document.getElementById("back-drop").style.display="none";
// }

// function openRegister(){
//     document.getElementById("signin").style.display="block";
//     document.getElementById("back-drop").style.display="block";
// }
// function closeRegister(){
// 	document.getElementById("signin").style.display="none";
// 	document.getElementById("back-drop").style.display="none";
// }

