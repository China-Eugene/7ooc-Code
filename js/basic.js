window.onload=function(){
    if(typeof(Storage)=="undefined")
    {
        alert('鎶辨瓑锛屾祻瑙堝櫒鐗堟湰杩囦綆锛岃浣跨敤IE8浠ヤ笂鏀寔LocalStorage娴忚鍣紒')
    }else{
        onload_setdate();
        check("time");
        check("title");
    }
}
function onload_setdate(){
    //time
    var time=localStorage.time
    if(time==undefined){
        localStorage.time="open";
    }
    //title
    var title=localStorage.title
    var titletext=localStorage.titletext
    if(title==undefined){
        localStorage.title="close";
    }
    if(titletext==undefined){
        localStorage.titletext="鑷畾涔夋爣棰�(鏈€澶氬崄鍥涘瓧)";
    }
    //background_img
    var imgurl=localStorage.background
    if(imgurl==undefined){
        

    }
    document.getElementById("wallpaper").style.backgroundImage=imgurl;
}
function check(fname){
    if(fname=="time"){//鏃堕棿鏄剧ず
        time=localStorage.time
        if (time=="open"){
            document.getElementById('time').style.zIndex='20';
            document.getElementById("b1").className="b1 on-b1";
            document.getElementById("b2").className="b2 on-b2";
        }else if(time=="close"){
            document.getElementById('time').style.zIndex='-10';
            document.getElementById("b1").className="b1 off-b1";
            document.getElementById("b2").className="b2 off-b2";
        }
    }
    if(fname=="title"){//鑷畾涔夋爣棰樻樉绀�
        title=localStorage.title
        titletext=localStorage.titletext
        if(title=="open"){
            document.getElementById("title").style.display = 'inline-block';
            document.getElementById("titletext").style.display = 'inline-block';
            document.getElementById("b3").className="b1 on-b1";
            document.getElementById("b4").className="b2 on-b2";
            document.getElementById('title').innerHTML=titletext;
            document.getElementById('titletext').value=titletext;
        }
        else if(title=="close"){
            document.getElementById("title").style.display = 'none';
            document.getElementById("titletext").style.display = 'none';
            document.getElementById("b3").className="b1 off-b1";
            document.getElementById("b4").className="b2 off-b2";
        
        }
    }
} 
function opentitle(){
    if(title=='close'){
        localStorage.title="open";
        check("title");
    }
    else{
        localStorage.title="close";
        check("title");
    } 
}
function opentime(){
    if(time=="close"){
        time="open";
        localStorage.time="open";
        check("time");
    }
    else{
        time="close";
        localStorage.time="close";
        check("time");
    } 
}
function openset(){
    display=document.getElementById('menu').className;
    if(display=='close'){
        document.getElementById("menu").style.transform = 'translatey(600px)';
        document.getElementById('menu').className='open';
    }
    else{
        document.getElementById("menu").style.transform = 'translatey(-600px)';
        document.getElementById('menu').className='close';
    }
}
function outimg(){
    document.getElementById("imgfile").click();
    
}
function setimg(){
    var file=document.getElementById("imgfile").files[0];
    if((file.type).indexOf("image/")==-1){
        alert("璇蜂笂浼犲浘鐗�!");
    }else{
	    var reader=new FileReader();
	    reader.readAsDataURL(file);
        reader.onload=function(){
            var base64 = reader.result;
            imgurl="url("+base64+")";
            document.getElementById("wallpaper").style.backgroundImage=imgurl;
            localStorage.background=imgurl;
        }
    }       
}
function out_title(){
    var titleinput=document.getElementById("titletext");
    titletext=titleinput.value;
    document.getElementById('title').innerHTML=titletext;
    localStorage.titletext=titletext;
}
function search(){
    var text=document.getElementById("textbox").value;
    var link="https://www.baidu.com/s?wd="+text;
    if(text!=""){
        window.open(link, "_blank");
    }else{
        //鍙互鍔犲叆绌虹姸鎬佹悳绱㈡彁绀�
    }
}
$(function(){  
    $('#textbox').bind('keypress',function(event){  
        if(event.keyCode == "13"){
            search();
        }  
    });  
});  

