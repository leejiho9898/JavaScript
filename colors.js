
var Links = {
   setColor:function (color) {
    var links = document.querySelectorAll('a');
    var i = 0;
    while(i<links.length){
        links[i].style.color = color;
      i +=1;
  
   } 
}

}
var Body = {
    setColor:function (color){
        document.querySelector('body').style.color = color;
    },
    setBackgroungColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

function nightdayhandler(self){
    var target = document.querySelector('body');
    
    if (self.value === 'night') { 
    Body.setBackgroungColor('black');
    Body.setColor('white');
    self.value = 'day'
    
    Links.setColor('powderblue');
    } else {
    Body.setBackgroungColor('white');
    Body.setColor('black');
    self.value = 'night'

    Links.setColor('orange');
}
}
