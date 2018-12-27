$(document).ready(function time() {
    var time1 = document.getElementById('time1')
    var time2 = document.getElementById('time2')
    var time3 = document.getElementById('time3')
    setInterval(function(){
        var now = new Date();
        s=now.getSeconds()
        m=now.getMinutes()
        h=now.getHours()
        if(h<10){
            time1.innerHTML = '0'+h;
        }
        else{
            time1.innerHTML = h;
        }
        if(m<10){
            time2.innerHTML = '0'+m;
        }
        else{
            time2.innerHTML = m;
        }
        if(s<10){
            time3.innerHTML ='0'+s;
        }
        else{
            time3.innerHTML =s;
        }
        time4.innerHTML =':';
        time5.innerHTML =':';
    },1000);
});