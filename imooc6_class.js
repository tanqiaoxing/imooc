$(document).ready(function(){
	$(".js-tabNav a").click(function(){
    	$(this).addClass("active");
    	$(this).siblings().removeClass("active");
    	var tabNav = $(this).index();
    	$(".js-banner-head .nav-item").eq(tabNav).addClass("active");
    	$(".js-banner-head .nav-item").eq(tabNav).siblings().removeClass("active");
    });

    $(".js-banner-head .nav-item").click(function(){
    	$(this).addClass("active");
    	$(this).siblings().removeClass("active");
    })

    $(".unlogin a").click(function(){
    	var loginIndex = $(this).index();
    	//whichever is chosed, rl-modal's display should be block
    	$(".js-rl-modal").addClass("active");
    	//background
    	$("#back-drop").addClass("active");
    	// choose red boder-bottom  between login and register
    	if(loginIndex == 0){
    		$(".xa-showSignin").addClass("active-title");
    		$(".rl-modal-login-body").addClass("active");
    		$(".xa-showSignup").removeClass("active-title");
            $(".rl-modal-register-body").removeClass("active");
        }else{
        	$(".xa-showSignup").addClass("active-title");
        	$(".rl-modal-register-body").addClass("active");
        	$(".xa-showSignin").removeClass("active-title");
        	$(".rl-modal-login-body").removeClass("active");
    	}
    	// $(this).addClass("active");
    	// $(this).siblings().removeClass("active");
    })

    $(".rl-modal-header span").click(function(){
    	var modalIndex = $(this).index();
        $(this).addClass("active-title");
        $(this).removeClass("xa-showSign");
        $(this).siblings().removeClass("active-title");
        $(this).siblings().addClass("xa-showSign");
        if(modalIndex == 0){
            $(".rl-modal-login-body").addClass("active");
            $(".rl-modal-register-body").removeClass("active");
        }else{
        	$(".rl-modal-register-body").addClass("active");
        	$(".rl-modal-login-body").removeClass("active");
        }
    });
    // login box close
    $(".rl-close").click(function(){
    	$(".js-rl-modal").removeClass("active");
    	$("#back-drop").removeClass("active");
    })

    $(".followus-weixin").mouseover(function(){
    	$(".flw-weixin-box").addClass("active");
    });
    $(".followus-weixin").mouseout(function(){
    	$(".flw-weixin-box").removeClass("active");
    });

    $(".elevator-msg").mouseover(function(){
        $(this).find("i").hide();
        $(this).find("span").show();
    });
    $(".elevator-msg").mouseout(function(){
        $(this).find("i").show();
        $(this).find("span").hide();
    });

    $(".elevator-faq").mouseover(function(){
        $(".elevator-faq i").hide();
        $(".elevator-faq span").show();
    });
    $(".elevator-faq").mouseout(function(){
        $(".elevator-faq i").show();
        $(".elevator-faq span").hide();
    });

    $(".elevator-app").mouseover(function(){
        $(".elevator-app i").hide();
        $(".elevator-app span").show();
    });
    $(".elevator-app").mouseout(function(){
        $(".elevator-app i").show();
        $(".elevator-app span").hide();
    });

    $(".elevator-weixin").mouseover(function(){
        $(".elevator-weixin i").hide();
        $(".elevator-weixin span").show();
    });
    $(".elevator-weixin").mouseout(function(){
        $(".elevator-weixin i").show();
        $(".elevator-weixin span").hide();
    });

    $(".elevator-top").mouseover(function(){
        $(".elevator-top i").hide();
        $(".elevator-top span").show();
    });
    $(".elevator-top").mouseout(function(){
        $(".elevator-top i").show();
        $(".elevator-top span").hide();
    });

})