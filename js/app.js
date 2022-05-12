var startPoint="X";
table.addEventListener("click",clickField);
function  clickField(e){
    console.log(e.target);
    e.target.innerHTML="X";
    if(e.target.innerHTML==""){
    e.target.innerHTML=startPoint;
    if (startPoint=="X"){
        startPoint=="O";
    }
    else{
        startPoint="X";
    }
    }
    
    p1=document.getElementyById("p1").innerHTML;
    p2=document.getElementyById("p2").innerHTML;
    p3=document.getElementyById("p3").innerHTML;
    p4=document.getElementyById("p4").innerHTML;
    p5=document.getElementyById("p5").innerHTML;
    p6=document.getElementyById("p6").innerHTML;
    p7=document.getElementyById("p7").innerHTML;
    p8=document.getElementyById("p8").innerHTML;
    p9=document.getElementyById("p9").innerHTML;

    wygrana1=p1+p2+p3;
    wygrana2=p4+p5+p6;
    wygrana3=p7+p8+p9;
    wygrana4=p1+p4+p7;
    wygrana5=p2+p5+p8;
    wygrana6=p3+p6+p9;
    wygrana7=p1+p5+p9;
    wygrana8=p3+p5+p7;
    console.log(wygrana1);

    if(wygrana1=="XXX"){
        document.getElementyById("p1").innerHTML='<div class="win">X</div>'
        document.getElementyById("p2").innerHTML='<div class="win">X</div>'
        document.getElementyById("p3").innerHTML='<div class="win">X</div>'
    }
    if(wygrana2=="XXX"){ 
        document.getElementyById("p4").innerHTML='<div class="win">X</div>
        document.getElementyById("p5").innerHTML='<div class="win">X</div>'
        document.getElementyById("p6").innerHTML='<div class="win">X</div>'
    }       
    if(wygrana3=="XXX"){   
        document.getElementyById("p7").innerHTML='<div class="win">X</div>'
        document.getElementyById("p8").innerHTML='<div class="win">X</div>'
        document.getElementyById("p9").innerHTML='<div class="win">X</div>'
    }        
    if(wygrana4=="XXX"){  
        document.getElementyById("p1").innerHTML='<div class="win">X</div>'
        document.getElementyById("p4").innerHTML='<div class="win">X</div>'
        document.getElementyById("p7").innerHTML='<div class="win">X</div>'
    }
    if(wygrana5=="XXX"){ 
        document.getElementyById("p2").innerHTML='<div class="win">X</div>'
        document.getElementyById("p5").innerHTML='<div class="win">X</div>'
        document.getElementyById("p8").innerHTML='<div class="win">X</div>'
    }
    if(wygrana6=="XXX"){  
        document.getElementyById("p3").innerHTML='<div class="win">X</div>'
        document.getElementyById("p6").innerHTML='<div class="win">X</div>'
        document.getElementyById("p9").innerHTML='<div class="win">X</div>'
    }
    if(wygrana7=="XXX"){
        document.getElementyById("p1").innerHTML='<div class="win">X</div>'
        document.getElementyById("p5").innerHTML='<div class="win">X</div>'
        document.getElementyById("p9").innerHTML='<div class="win">X</div>'  
    }
    if(wygrana8=="XXX"){  
        document.getElementyById("p3").innerHTML='<div class="win">X</div>'
        document.getElementyById("p5").innerHTML='<div class="win">X</div>'
        document.getElementyById("p7").innerHTML='<div class="win">X</div>'
    }
    
    if(wygrana1=="OOO"){
        document.getElementyById("p1").innerHTML='<div class="win">O</div>'
        document.getElementyById("p2").innerHTML='<div class="win">O</div>'
        document.getElementyById("p3").innerHTML='<div class="win">O</div>'
    }
    if(wygrana2=="OOO"){ 
        document.getElementyById("p4").innerHTML='<div class="win">O</div>
        document.getElementyById("p5").innerHTML='<div class="win">O</div>'
        document.getElementyById("p6").innerHTML='<div class="win">O</div>'
    }       
    if(wygrana3=="OOO"){   
        document.getElementyById("p7").innerHTML='<div class="win">O</div>'
        document.getElementyById("p8").innerHTML='<div class="win">O</div>'
        document.getElementyById("p9").innerHTML='<div class="win">O</div> 
    }        
    if(wygrana4=="OOO"){  
        document.getElementyById("p1").innerHTML='<div class="win">O</div>'
        document.getElementyById("p4").innerHTML='<div class="win">O</div>'
        document.getElementyById("p7").innerHTML='<div class="win">O</div>'
    }
    if(wygrana5=="OOO"){ 
        document.getElementyById("p2").innerHTML='<div class="win">O</div>'
        document.getElementyById("p5").innerHTML='<div class="win">O</div>'
        document.getElementyById("p8").innerHTML='<div class="win">O</div>'
    }
    if(wygrana6=="OOO"){  
        document.getElementyById("p3").innerHTML='<div class="win">O</div>'
        document.getElementyById("p6").innerHTML='<div class="win">O</div>'
        document.getElementyById("p9").innerHTML='<div class="win">O</div>'
    }
    if(wygrana7=="OOO"){
        document.getElementyById("p1").innerHTML='<div class="win">O</div>'
        document.getElementyById("p5").innerHTML='<div class="win">O</div>'
        document.getElementyById("p9").innerHTML='<div class="win">O</div>'  
    }
    if(wygrana8=="OOO"){  
        document.getElementyById("p3").innerHTML='<div class="win">O</div>'
        document.getElementyById("p5").innerHTML='<div class="win">O</div>'
        document.getElementyById("p7").innerHTML='<div class="win">OO</div>'
    }
}