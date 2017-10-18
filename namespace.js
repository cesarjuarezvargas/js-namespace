var JUAR0008 = {
    init: function(){
        let cesardiv = document.createElement("div");
        cesardiv.className="box";
        cesardiv.textContent="JUAR0008";
        console.log("script in JUAR0008 called");
        let findboxes = document.querySelector("#boxes");
        cesardiv.addEventListener("click",JUAR0008.clicked);
        cesardiv.addEventListener("mouseover",JUAR0008.mouseover);
        cesardiv.addEventListener("mouseout",JUAR0008.mouseout);
        findboxes.appendChild(cesardiv);
        
    },
    
    clicked:function(ev){
        ev.currentTarget.style.borderColor="#F70300";
        ev.currentTarget.style.backgroundColor="#006B21";
        
    },
    
    mouseover:function(ev){
        ev.currentTarget.classList.toggle("highlight");
},
    mouseout: function(ev){
        ev.currentTarget.classList.toggle("highlight");
    }
    
}


//JUAR0008.init();


//JUAR0008.changetored ("this is a test")
//changetored: function(ev){
//        
//    }

//1. create a div,
//
//2. give it the CSS className "box",
//
//3. add your username as text,
//
//4. append the div to the element with the id "boxes",
//
//5. add three event listeners. The listeners it needs are a click listener, a mouseover listener, and a mouseout listener.
//
//6. The mouseover and mouseout functions will toggle a CSS className called "highlight".
//
//7. Your click function should change the color of your border and the background-color of the box.