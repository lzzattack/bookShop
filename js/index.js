/**
 * Created by lizhengzhou on 2017/1/8.
 */
//试一试的方法
function try_change(){
    var i=parseInt(Math.random()*5);
    $(".storey_three>.storey_two_left_body").hide();
    $(".storey_three>.storey_two_left_body").eq(i).show();
}
$(document).ready(function () {
    //切换显示畅销榜表头效果
    $(".storey_two_right>.three_floor>.three_body>.three_nav>li").on("mouseenter",function(){
        $(".storey_two_right>.three_floor>.three_body>.three_nav>li").css({
            "border-top":"1px solid rgb(208,208,208)",
            "z-index":"0"
        });
        $(".storey_two_right>.three_floor>.three_body>.three_content").hide();
        $(this).css({
            "border-top":"2px solid #487a6f",
            "border-bottom":"1px solid white",
            "z-index":"1"
        });
        var i=$(this).index();
        switch (i){
            case 0:
                $(".storey_two_right>.three_floor>.three_body>.zero").show();
                $(".storey_two_right>.three_floor>.three_body>.zero>ol>.first_Sellers>span").hide();
                $(".storey_two_right>.three_floor>.three_body>.zero>ol>.first_Sellers>a").hide();
                $(".storey_two_right>.three_floor>.three_body>.zero>ol>.first_Sellers>div").show();
                break;
            case 1:
                $(".storey_two_right>.three_floor>.three_body>.one").show();
                $(".storey_two_right>.three_floor>.three_body>.one>ol>.first_Sellers>span").hide();
                $(".storey_two_right>.three_floor>.three_body>.one>ol>.first_Sellers>a").hide();
                $(".storey_two_right>.three_floor>.three_body>.one>ol>.first_Sellers>div").show();
                break;
            case 2:
                $(".storey_two_right>.three_floor>.three_body>.two").show();
                $(".storey_two_right>.three_floor>.three_body>.two>ol>.first_Sellers>span").hide();
                $(".storey_two_right>.three_floor>.three_body>.two>ol>.first_Sellers>a").hide();
                $(".storey_two_right>.three_floor>.three_body>.two>ol>.first_Sellers>div").show();
                break;
            case 3:
                $(".storey_two_right>.three_floor>.three_body>.three").show();
                $(".storey_two_right>.three_floor>.three_body>.three>ol>.first_Sellers>span").hide();
                $(".storey_two_right>.three_floor>.three_body>.three>ol>.first_Sellers>a").hide();
                $(".storey_two_right>.three_floor>.three_body>.three>ol>.first_Sellers>div").show();
                break;
            case 4:
                $(".storey_two_right>.three_floor>.three_body>.four").show();
                $(".storey_two_right>.three_floor>.three_body>.four>ol>.first_Sellers>span").hide();
                $(".storey_two_right>.three_floor>.three_body>.four>ol>.first_Sellers>a").hide();
                $(".storey_two_right>.three_floor>.three_body>.four>ol>.first_Sellers>div").show();
                break;
        }
    });
    //切换显示新书热卖榜的效果
    $(".storey_two_right>.three_floor>.three_body>.three_content>ol>li").on("mouseenter",function () {
        $(".storey_two_right>.three_floor>.three_body>.three_content>ol>li>div").hide();
        $(".storey_two_right>.three_floor>.three_body>.three_content>ol>li>span").show();
        $(".storey_two_right>.three_floor>.three_body>.three_content>ol>li>a").show();
        $(this).children("span").hide();
        $(this).children("a").hide();
        $(this).find("div").show();
    });
    //独家特供位置的图书切换效果
    $(".nav>li").on("mouseenter",function () {
        $(".nav>li").css({
            "border":"2px solid transparent",
            "border-bottom":"2px solid transparent",
            "font-weight":"normal"
        });
        $(this).css({
            "border":"2px solid #4e8176",
            "border-bottom":"2px solid white",
            "font-weight":"bold"
        });
        $(".storey_two_left>.storey_two_left_body").hide();
        var i=$(this).index();
        switch(i){
            case 0:
                $(".zhuda").show();
                break;
            case 1:
                $(".tongshu1").show();
                break;
            case 2:
                $(".tongshu2").show();
                break;
            case 3:
                $(".wenyi").show();
                break;
            case 4:
                $(".xiaoshuo").show();
                break;
            case 5:
                $(".lizhi").show();
                break;
            case 6:
                $(".sheke").show();
                break;
            case 7:
                $(".jingying").show();
                break;
            case 8:
                $(".shenghuo").show();
                break;
            case 9:
                $(".jiaoyu").show();
                break;
            case 10:
                $(".dianzishu").show();
                break;
        }
    });
    //切换显示新书热卖榜表头效果
    $(".storey_one_right>.three_floor>.three_body>.three_nav>li").on("mouseenter",function(){
        $(".storey_one_right>.three_floor>.three_body>.three_nav>li").css({
           "border-top":"1px solid rgb(208,208,208)",
            "z-index":"0"
        });
        $(".storey_one_right>.three_floor>.three_body>.three_content").hide();
        $(this).css({
            "border-top":"2px solid #487a6f",
            "border-bottom":"1px solid white",
            "z-index":"1"
        });
        var i=$(this).index();
        switch (i){
            case 0:
                $(".storey_one_right>.three_floor>.three_body>.zero").show();
                $(".storey_one_right>.three_floor>.three_body>.zero>ol>.first_Sellers>span").hide();
                $(".storey_one_right>.three_floor>.three_body>.zero>ol>.first_Sellers>a").hide();
                $(".storey_one_right>.three_floor>.three_body>.zero>ol>.first_Sellers>div").show();
                break;
            case 1:
                $(".storey_one_right>.three_floor>.three_body>.one").show();
                $(".storey_one_right>.three_floor>.three_body>.one>ol>.first_Sellers>span").hide();
                $(".storey_one_right>.three_floor>.three_body>.one>ol>.first_Sellers>a").hide();
                $(".storey_one_right>.three_floor>.three_body>.one>ol>.first_Sellers>div").show();
                break;
            case 2:
                $(".storey_one_right>.three_floor>.three_body>.two").show();
                $(".storey_one_right>.three_floor>.three_body>.two>ol>.first_Sellers>span").hide();
                $(".storey_one_right>.three_floor>.three_body>.two>ol>.first_Sellers>a").hide();
                $(".storey_one_right>.three_floor>.three_body>.two>ol>.first_Sellers>div").show();
                break;
            case 3:
                $(".storey_one_right>.three_floor>.three_body>.three").show();
                $(".storey_one_right>.three_floor>.three_body>.three>ol>.first_Sellers>span").hide();
                $(".storey_one_right>.three_floor>.three_body>.three>ol>.first_Sellers>a").hide();
                $(".storey_one_right>.three_floor>.three_body>.three>ol>.first_Sellers>div").show();
                break;
            case 4:
                $(".storey_one_right>.three_floor>.three_body>.four").show();
                $(".storey_one_right>.three_floor>.three_body>.four>ol>.first_Sellers>span").hide();
                $(".storey_one_right>.three_floor>.three_body>.four>ol>.first_Sellers>a").hide();
                $(".storey_one_right>.three_floor>.three_body>.four>ol>.first_Sellers>div").show();
                break;
        }
    });
    //切换显示新书热卖榜的效果
    $(".storey_one_right>.three_floor>.three_body>.three_content>ol>li").on("mouseenter",function () {
        $(".storey_one_right>.three_floor>.three_body>.three_content>ol>li>div").hide();
        $(".storey_one_right>.three_floor>.three_body>.three_content>ol>li>span").show();
        $(".storey_one_right>.three_floor>.three_body>.three_content>ol>li>a").show();
        $(this).children("span").hide();
        $(this).children("a").hide();
        $(this).find("div").show();
    });
    //页面左上角送至北京效果
    $(".ddnewhead_area").on("mouseenter",function () {
        $(".ddnewhead_area_list").show();
        $(".ddnewhead_area_a").css({
            "background-color":"white",
        "background-position":"right -320px",
        "border":"1px solid #e6e6e6",
        "border-bottom":0,
        "z-index":100,
        "color": "#646464"
        })
    });
    $(".ddnewhead_area").on("mouseleave",function () {
        $(".ddnewhead_area_list").hide();
        $(".ddnewhead_area_a").css({
            "background-color":"transparent",
            "background-position":"right -303px",
            "border":"1px solid transparent",
            "z-index":100,
            "color": "#646464"
        });
    });
    $("#my_dd").on("mouseenter",function(){
        $("#__ddnav_mydd").show();
        $("#my_dd>a").css({
            "background-color":"white",
            "background-position":"right -320px",
            "border":"1px solid #e6e6e6",
            "border-bottom":"0",
            "z-index":"100",
            "color": "#646464"
        });
    });
    $("#my_dd").on("mouseleave",function () {
        $("#__ddnav_mydd").hide();
        $("#my_dd>a").css({
            "background-color":"transparent",
            "background-image": "url('image/head_sprite.png')",
            "background-position": "-5px -303px",
            "width":"87px",
            "border":"1px solid transparent",
            "padding":"7px 28px 5px 9px",
            "border-left":"1px solid #e6e6e6"
        })
    });
    $("#hover").on("mouseenter",function(){
        $("#__ddnav_bzzx").show();
        $("#hover>a").css({
            "background-color":"white",
            "background-position":"right -320px",
            "border":"1px solid #e6e6e6",
            "border-bottom":"0",
            "z-index":"100",
            "color": "#646464"
        })
    });
    $("#hover").on("mouseleave",function(){
        $("#__ddnav_bzzx").hide();
        $("#hover>a").css({
            "background-color":"transparent",
            "background-image": "url('image/head_sprite.png')",
            "background-position": "-5px -303px",
            "width":"87px",
            "border":"1px solid transparent",
            "padding":"7px 28px 5px 9px",
            "border-left":"1px solid #e6e6e6"
        })
    });
    $(".select").on("mouseenter",function(){
        $(".select_pop").show();
    });
    $(".select").on("mouseleave",function(){
        $(".select_pop").hide();
    });
    $(".level_one").on("mouseenter",function(){
        $(this).find(".inner_dl").show();
        var distance=$(this).position().top;//获取的是this元素顶部到父容器顶部的高度
        var inner_height=$(this).find(".inner_dl").height();//获取.inner_dl元素本身的高度
        var level_one_height=$(this).outerHeight();//获取的是this元素包括margin、border在内的一切高度
        var bottomdistance=level_one_height+distance;
        var offsetdistance=$(this).offset().top;//获取this元素顶部到body顶部的高度
        var hiddendistance=$(window).scrollTop();//获取滚动条距离浏览器顶部的高度，也就是滚动之后被隐藏部分的高度
        var a=offsetdistance-hiddendistance;//this元素到可视浏览器顶部的高度
        if(a<distance){
            if((level_one_height+a)>inner_height){
                $(this).find(".inner_dl").css({
                    "top":-(a-((level_one_height+a)-inner_height))
                });
            }else {
                $(this).find(".inner_dl").css({
                    "top":-(a)
                });
            }
        }else{
            if (bottomdistance>inner_height){
                $(this).find(".inner_dl").css({
                    "top":-(distance-(bottomdistance-inner_height))
                });
            }else {
                $(this).find(".inner_dl").css({
                    "top":-(distance)
                });
            }
        }
        $(this).find(".level_two").css({
            "border":"1px solid #487a6f",
            "border-right":"1px solid transparent"
        });
        $(this).find(".dd_level1").css({
            "border-bottom":"1px solid transparent"
        })
    });
    $(".level_one").on("mouseleave",function(){
        $(this).find(".inner_dl").hide();
        $(this).find(".level_two").css({
            "border":"1px solid #487a6f",
            "border-top":"none",
            "border-bottom":"none"
        });
        $(this).find(".dd_level1").css({
            "border-bottom":"1px dotted #849555"
        })
    });
    //轮播效果
    //图片自动切换的方法
    var imgcount = 0;//图片轮播用的参数
    var guangbiaocount = 0;//下标轮播用的参数
    var movewidth = 750;
    var timer = setInterval(indexnextpic, 3000);
    var subscriptdiv = $(".subscript div");
    //图片轮播方法
    function indexnextpic() {
        guangbiaocount++;
        imgcount++;
        if (imgcount > 5) {//判断是否播放到了最好一张图
            $(".exhibition_image").css({left: 0});
            imgcount = 1;
        }
        if (guangbiaocount > 0) {//判断是否处在第二张图，如果在第二张图，就可以把前面的变颜色
            subscriptdiv.eq(guangbiaocount - 1).css({
                "background-color": "white",
                "color":"black"
            });//变回原来的颜色
        }
        if (guangbiaocount >= 5) {//判断是否播放到了最后一个下标
            guangbiaocount = 0;
        }
        $(".exhibition_image").animate({left: -movewidth * imgcount}, 1500);//图片轮播
        subscriptdiv.eq(guangbiaocount).css({
            "background-color": "#ff4848",
            "color":"white"
        });//改变颜色
    };
    //当鼠标移动上去停止动画的效果
    $(".carousel_images").on("mouseenter",function(){
        clearInterval(timer);
    });
    $(".carousel_images").on("mouseleave",function () {
        timer = setInterval(indexnextpic, 3000);
    });
    //当鼠标移动到下标时跳转到相应图片的效果
    subscriptdiv.on("mouseenter",function () {
        guangbiaocount=subscriptdiv.index($(this));
        imgcount=guangbiaocount;
        subscriptdiv.css({
            "background-color": "white",
            "color":"black"
        });
        $(this).css({
            "background-color": "#ff4848",
            "color":"white"
        });
        //停止动画并且跳转到对应图片
        $(".exhibition_image").stop(true,true).css({
            left:-movewidth * imgcount
        });
    });
    //点击右标签时触发的图片轮播效果
    var newbookcount = 0;//图片轮播用的参数
    var newbookguangbiao = 0;//下标轮播用的参数
    $("#right_fanye_btn").on("click",function(){
        newbookcount++;
        if (newbookcount>3){
            $(".new_books").css({left:0});
            newbookcount=1;
        }
        $(".new_books").stop(true,true).animate({left: -movewidth * newbookcount}, 1000);
        $(".new_booksub li").css({"background-color": "rgb(208,208,208)"});
        newbookguangbiao++;
        if (newbookguangbiao>2){newbookguangbiao=0}
        $(".new_booksub li").eq(newbookguangbiao).css({"background-color": "#487a6f"});
    });
    //点击左标签时触发的图片轮播效果
    $("#left_fanye_btn").on("click",function(){
        newbookcount--;
        if(newbookcount<0){
            newbookguangbiao=3;
            newbookcount=2;
        }
        $(".new_books").stop(false,true).animate({left: -movewidth * newbookcount}, 1000);
        $(".new_booksub li").css({"background-color": "rgb(208,208,208)"});
        newbookguangbiao--;
        $(".new_booksub li").eq(newbookguangbiao).css({"background-color": "#487a6f"});
    });
    //点击右标签时触发的图片轮播效果
    var pre_sale_count = 0;//图片轮播用的参数
    var pre_sale_guangbiao = 0;//下标轮播用的参数
    $("#right_pre_sale_btn").on("click",function(){
        pre_sale_count++;
        if (pre_sale_count>3){
            $(".pre_sale_books").css({left:0});
            pre_sale_count=1;
        }
        $(".pre_sale_books").stop(true,true).animate({left: -238 * pre_sale_count}, 1000);
        $(".pre_sale_booksub li").css({"background-color": "rgb(208,208,208)"});
        pre_sale_guangbiao++;
        if (pre_sale_guangbiao>2){pre_sale_guangbiao=0}
        $(".pre_sale_booksub li").eq(pre_sale_guangbiao).css({"background-color": "#487a6f"});
    });
    //点击左标签时触发的图片轮播效果
    $("#left_pre_sale_btn").on("click",function(){
        pre_sale_count--;
        if(pre_sale_count<0){
            pre_sale_guangbiao=3;
            pre_sale_count=2;
        }
        $(".pre_sale_books").stop(false,true).animate({left: -238 * pre_sale_count}, 1000);
        $(".pre_sale_booksub li").css({"background-color": "rgb(208,208,208)"});
        pre_sale_guangbiao--;
        $(".pre_sale_booksub li").eq(pre_sale_guangbiao).css({"background-color": "#487a6f"});
    });
});