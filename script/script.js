$(function(){
    // $(".main > li").hover(function(){
    //     $(".sub").stop().slideDown();
    // }, function(){
    //     $(".sub").stop().slideUp();
    // })

    $(".main > li").mouseover(function(){
        $(".sub").stop().slideDown();
    })

    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp();
    })


    //슬라이드이미지 영역
    // var n=0;

    // setInterval(function(){
        
    //     if(n==2){
    //         n=0;
    //     }else{
    //         n++;
    //         // n=n+1;
    //         // n+=1;
    //     }
    //     console.log("n:", n);

    //     pos= -n*300 + "px";
    //     console.log("pos:", pos);

    //     $(".move").animate({top:pos}, 500)

    // }, 2500)



    setInterval(move, 2500);

    function move(){
        $(".move").animate({top:"-300px"}, 500, function(){
            $(".move").css({top:"0"});
            $(".move").append($(".move li").eq(0));
            // $(".move").append($(".move li").first());
            // $(".move").append($(".move li:nth-child(1)"));
        });   
    }

    // setInterval(function(){
    //     $(".move").animate({top:"-300px"}, 500, function(){
    //         $(".move").css({top:"0"});
    //         $(".move").append($(".move li").eq(0));
    // })

    

    //탭메뉴
    $(".noti_gall h2").click(function(){
        $(".noti_gall h2").addClass("off");
        $(this).removeClass("off");

        $(".noti_gall ul").hide();
        $(this).next().css({display:"flex"});
    })//


    //팝업
    $(".p_click").click(function(){
        $(".pop").show();
    })

    $(".close").click(function(){
        $(".pop").hide();
    })
})//