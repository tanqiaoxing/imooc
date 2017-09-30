window.onload=function bannerSlide(){
    var i=0;
    // var banner=new Array;
    // banner[0]=document.getElementById("banner1");
    // banner[1]=document.getElementById("banner2");
    // banner[2]=document.getElementById("banner3");
    // banner[3]=document.getElementById("banner4");
    // banner[4]=document.getElementById("banner5");
    // banner[5]=document.getElementById("banner6");
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("bannerBox")) return false;
    var box=document.getElementById("bannerBox");
    var banner=box.getElementsByTagName("div");
    var dot=document.getElementById("bannerDots");
    var banner_dot=dot.getElementsByTagName("span");
    // alert(banner.length);
    sli=setInterval(slide,3000);
    //轮播间隔时间
    function slide(){
        if(i==banner.length-3){
            banner_dot[0].style.background="#fff";
            banner_dot[0].style.border="1px solid rgba(7,17,27,.8)";
            banner_dot[i].style.background="rgba(7,17,27,.8)";
            banner_dot[i].style.border="1px solid rgba(255,255,255,.6)";
            banner[0].style.display="block";
            banner[0].style.opacity="1";
            banner[i].style.opacity="0";
           
            setTimeout(function(){
                banner[i].style.display="none";
                banner[i].style.zIndex="1";
                banner[0].style.zIndex="6";
                i=0;
            },500)
        }
        else{
            banner[i+1].style.display="block";
            banner[i+1].style.opacity="1";
            banner[i].style.opacity="0";
            banner_dot[i+1].style.background="#fff";
            banner_dot[i+1].style.border="1px solid rgba(7,17,27,.8)";
            banner_dot[i].style.background="rgba(7,17,27,.8)";
            banner_dot[i].style.border="1px solid rgba(255,255,255,.6)";
            setTimeout(function(){            
                banner[i].style.display="none";
                banner[i].style.zIndex="1";
                banner[i+1].style.zIndex="6";             
                i++;
            },500)
        }
    }


    var prev=document.getElementsByClassName("prev");
    prev.onclick=function(){

    }

}

