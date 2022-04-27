function animate2(id,delay,animationName){
    document.getElementById(id).style.animation=animationName;
    document.getElementById(id).style.animationDelay=delay+"s";
}

function scroll() {

    var scrolled = window.scrollY;
    // console.log(scrolled);
    if(scrolled>430){
        if(document.getElementById('cont-1').getAttribute("data-scrolled")==="false"){
            animate2("cont-1",0,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            document.getElementById('cont-1').setAttribute("data-scrolled","true");
        }
    }

    if(scrolled>1040){
        if(document.getElementById('cont-2').getAttribute("data-scrolled")==="false"){
            animate2("cont-2",0,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            document.getElementById('cont-2').setAttribute("data-scrolled","true");
        }
    }

    if(scrolled>1650){
        if(document.getElementById('cont-3').getAttribute("data-scrolled")==="false"){
            animate2("cont-3",0,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            document.getElementById('cont-3').setAttribute("data-scrolled","true");
        }
    }

    if(scrolled>2260){
        if(document.getElementById('cont-4').getAttribute("data-scrolled")==="false"){
            animate2("cont-4",0,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            document.getElementById('cont-4').setAttribute("data-scrolled","true");
        }
    }

    if(scrolled>2870){
        if(document.getElementById('cont-5').getAttribute("data-scrolled")==="false"){
            animate2("cont-5",0,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            document.getElementById('cont-5').setAttribute("data-scrolled","true");
        }
    }

    if(scrolled>3480){
        if(document.getElementById('cont-6').getAttribute("data-scrolled")==="false"){
            animate2("cont-6",0,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            document.getElementById('cont-6').setAttribute("data-scrolled","true");
        }
    }

    if(scrolled>4020){
        if(document.getElementById('end-icon-container').getAttribute("data-scrolled")==="false"){
            // animate2("icon-1",0,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            animate2("icon-2",0.5,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            animate2("icon-3",1,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            animate2("icon-4",1.5,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            animate2("icon-5",2,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            animate2("end-largetext-container",2.5,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
            animate2("end-smalltext-container",3.0,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
        }
    }

}

function href(el,newWindow) {
    if(newWindow) {
        window.open(el.getAttribute("data-link"));
    }
    else{
        window.location=el.getAttribute("data-link");
    }
}