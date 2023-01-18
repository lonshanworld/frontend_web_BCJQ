$(document).ready(function(){

    // Start Header Section
    
    // Start banner Section 
    // $(".carousel").carousel({
    //     interval:1000
    // });
    // End banner Section

    // End Header Section

    // Start Info Section 
    $(window).scroll(function(){
        let getscrollpoint = $(this).scrollTop();
        // console.log(getscrollpoint);
        if(getscrollpoint >=220){
            $(".infotexts").addClass("fromlefts");
            $(".infopics").addClass("fromrights");
        }else{
            $(".infotexts").removeClass("fromlefts");
            $(".infopics").removeClass("fromrights");
        }
    });
    // End Info Section

    //Start Premises Section 
  
    $("#light-slider").lightSlider({
        item: 4,
        auto: true,
        loop:true,
        slideMove:1,
        speed:600
    }).play();

    //End Premises Section

    // Start Pricing Section
    $(window).scroll(function(){
        let getscroll = $(this).scrollTop();
        // console.log(getscroll);

        if(getscroll >= 2450){
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("moverights");
            $(".cardthrees").addClass("movebottoms");
        }else{
            $(".cardones").removeClass("movelefts");
            $(".cardtwos").removeClass("moverights");
            $(".cardthrees").removeClass("movebottoms");
        }
    });
    // End Pricing Section
    $("#accordion").accordion();

    // Start footer section 
    $("#getyear").text(new Date().getUTCFullYear());
    // End footer Section



    // Start Progress 
    $(window).scroll(function(){
        var getprogress = $("#progress");
        var getprogressvalues = $("#progressvalues");
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

//By Jquery
        // var getscrollheight = $(document).height();
        // // console.log(getscrollheight);
        // var getclientheight = $(window).height();
        // // console.log(getclientheight);

        // var calheight = getscrollheight - getclientheight;
        // var getfinalheight = Math.round(getscrolltop * 100 / calheight);
        // // console.log(getfinalheight);

//By javascript
        var getscrollheight = document.documentElement.scrollHeight;
        // console.log(getscrollheight);
        var getclientheight = document.documentElement.clientHeight;
        // console.log(getclientheight)
        var calheight = getscrollheight-getclientheight;
        var getfinalheight = Math.round(getscrolltop * 100 / calheight);
        // console.log(getfinalheight);



        getprogressvalues.text(`${getfinalheight}%`);

        getprogress.css({
            "background": `conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
        });

        // st * 100/(pjheight-cvheight)
    });
    // End Progress


    // Start ADV section
    $("#videos").click(function(){
        var getmodal = $(this).data("bs-target");
        var getvideosrc = $(this).data("video");
        var videourlwithauto = getvideosrc + "?autoplay=1";
        
        $(getmodal+" iframe").attr("src",videourlwithauto);

        $("videomodel button.btn-close").click(function(){
            $(getmodal+ " iframe").attr("src", getvideosrc);
        });

        $(getmodal).click("hidden.bs.modal",function(){
            $(getmodal+ " iframe").attr("src", getvideosrc);
        });
    }); 
    // End ADV section
});

// 28FR

// 4PS