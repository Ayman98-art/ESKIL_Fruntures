//***********Start loading****************//
$(`document`).ready(function(){
    $(`.loading`).fadeOut(2000 , function(){
        $("body").css("overflow-y","auto")
    })
})
//***********End loading****************//

//***********Start btnTop****************//
let btnTop =document.getElementById("btnTop")
let bottomHeader = document.getElementById("bottomHeader");


btnTop.addEventListener("click", function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

window.onscroll = function(){
    if(scrollY >= 350){
        btnTop.classList.replace("hide","show")
        bottomHeader.classList.add("header__top")
    }
    else{
        btnTop.classList.replace("show","hide")
        bottomHeader.classList.remove("header__top")
    }
}
//***********End btnTop****************//

//***********Start change Photos****************//
$("#bigIge_s1").click(function(){
    $("#bigIge").attr("src","assets/store/lambs/1 (5).webp")
})

$("#bigIge_s2").click(function(){
    $("#bigIge").attr("src","assets/store/lambs/1 (7).webp")
})

$("#bigIge_s3").click(function(){
    $("#bigIge").attr("src","assets/store/lambs/1 (4).webp")
})

$("#bigIge_s4").click(function(){
    $("#bigIge").attr("src","assets/store/lambs/1 (1).webp")
})
//***********End change Photos****************//

//***********Start Slider one****************//
$('#owl-one').owlCarousel({
    rtl:true,
    loop:true,
    margin:0,
    nav:false,
    items:1,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1000,
})
//***********End Slider one ****************//

//***********Start Slider two****************//
$('#owl-two').owlCarousel({
    ltr:true,
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})
//***********End Slider two ****************//