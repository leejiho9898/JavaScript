
function getTime(){
   let time= new Date();
   let hour= time.getHours(), 
   minute= time.getMinutes(), 
   second= time.getSeconds(),
   year=time.getFullYear(),
   month=time.getMonth(),
   date=time.getDate();

   let todayis = year+"년 "+month+"월 "+date + "일 " + hour+"시 "+ minute+"분 "+second +"초";

   document.querySelector("#nowday").innerText=(`${todayis}`);
}

function flow(){
   getTime();
   setInterval(getTime,1000);
}
flow();

let takeIime=document.querySelector("#check-time"),
    takeImg=document.querySelector("#onoff-img"),
    takeOnoff=document.querySelector("#isonoff");


function changeOn(){
   let time= new Date();
   let hour= time.getHours(), 
   minute= time.getMinutes(), 
   second= time.getSeconds();
   let ontime ="체크시간 : " + hour+"시 "+ minute+"분 "+second +"초";

   takeIime.innerText=(`${ontime}`);
   takeImg.style.backgroundImage="url(work.jpg)";
   takeOnoff.innerText=("근무중");
}
function changeOff(){
   let time= new Date();
   let hour= time.getHours(), 
   minute= time.getMinutes(), 
   second= time.getSeconds();
   let ontime ="체크시간 : " + hour+"시 "+ minute+"분 "+second +"초";

   takeIime.innerText=(`${ontime}`);
   takeImg.style.backgroundImage="url(rest.jpg)";
   takeOnoff.innerText=("휴식중");
}