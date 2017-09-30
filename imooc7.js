window.onload=function bannerSlide(){

    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("bannerBox")) return false;
    var box=document.getElementById("bannerBox");
    var banner=box.getElementsByTagName("div");
    var dot=document.getElementById("bannerDots");
    var banner_dot=dot.getElementsByTagName("span");
    // alert(banner.length);
    sli=setInterval(slide,3000);
    var j=0;
    var autoChange=setInterval(function(){
        if (j<banner.length-3){
            j++;
        }
        else{
            j=0;
        }
        slide(j);
    },2500);

    function autoChangeAgain(){
        autoChange=setInrterval(function(){
            if(j<banner.length-3){
                j++;
            }else{
                j=0;
            }
            slide(j);
        },2500);
    }
    addEvent();
    function addEvent(){
        var prev=document.getElementsByClassName("prev");
        prev.onmouseover=function(){
            clearInterval(autoChange);
        };
        prev.onclick=function(){
            j=(j>0)?(--j):(banner.length-3);
            slide(j);
        };
        prev.onmouseout=function(){
            autoChangeAgain();
        };
   
        var next=document.getElementsByClassName("next");
        next.onmouseover=function(){
            clearInterval(autoChange);
        };
        next.onclick=function(){
            j=(j<banner.length-3)?(++j):0;
            slide(j);
        };
        next.onmouseout=function(){
            autoChangeAgain();
        }
    
    }
   
     //轮播间隔时间
    function slide(i){
        if(i==0){
            banner_dot[i].style.background="#fff";
            banner_dot[i].style.border="1px solid rgba(7,17,27,.8)";
            banner_dot[banner.length-3].style.background="rgba(7,17,27,.8)";
            banner_dot[banner.length-3].style.border="1px solid rgba(255,255,255,.6)";
            banner[i].style.display="block";
            banner[i].style.opacity="1";
            banner[banner.length-3].style.opacity="0";          
            setTimeout(function(){
                banner[banner.length-3].style.display="none";
                banner[banner.length-3].style.zIndex="1";
                banner[i].style.zIndex="6";
            },500)
        }
        else{              
            banner_dot[i].style.background="#fff";
            banner_dot[i].style.border="1px solid rgba(7,17,27,.8)";
            banner_dot[i-1].style.background="rgba(7,17,27,.8)";
            banner_dot[i-1].style.border="1px solid rgba(255,255,255,.6)";
            banner[i].style.display="block";
            banner[i].style.opacity="1";
            banner[i-1].style.opacity="0";
            setTimeout(function(){            
                banner[i-1].style.display="none";
                banner[i-1].style.zIndex="1";
                banner[i].style.zIndex="6";             
            },500)
        }
    }
           
    
}

