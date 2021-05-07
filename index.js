var width, height;
$(function(){
    width = window.innerWidth;
    height = window.innerHeight;
    $("#bg").css("width", width + "px");
    $("#bg").css("height", height + "px");
    $("#menu").css("height", height + "px");
    var menu_width = parseInt(width/5); 
    $("#menu").css("width", menu_width + "px");
    $("#menu_title").css("width", menu_width + "px");
    var font_size = parseInt(menu_width / 10);
    $("#menu_title").css("font-size", font_size + "px");
    font_size = parseInt(menu_width / 14);
    $("#first_bar").css("font-size", font_size + "px");
    var second_bar_first_height = parseInt(height/14)
    font_size = parseInt(menu_width / 20);
    $("#second_bar_first").css("height", second_bar_first_height + "px");
    $("#second_bar_first").css("weight", menu_width + "px");
    $("#second_bar_first").css("font-size", font_size + "px");
    $(".second_bar").css("height", second_bar_first_height + "px");
    $(".second_bar").css("weight", menu_width + "px");
    $(".second_bar").css("font-size", font_size + "px");
    var vspace = parseInt((second_bar_first_height-font_size)/2);
    var font_height = vspace - 2 ;
    $("#second_bar_first_title").css("top",  font_height + "px");
    $(".second_bar_title").css("top",  font_height + "px");
    $(".menu_img_start").css("top",  vspace + "px");
    var hspace = parseInt(menu_width / 15 * 2);
    $(".menu_img_start").css("margin-left",  hspace + "px");
    hspace = parseInt( hspace  / 5 );
    $(".menu_img_start").css("margin-right",  hspace + "px");
    $(".menu_img_start").css("top",  vspace + "px");
    $(".menu_img_end").css("top",  vspace + "px");
    hspace = parseInt( menu_width * 0.1 );
    $(".menu_img_end").css("left",  hspace + "px");
    hspace = parseInt( hspace / 2  );
    $("#first_bar").css("margin-left",  hspace + "px");
    $(".menu_img_start").css("weight",  font_size + "px");
    $(".menu_img_start").css("height",  font_size + "px");
    $(".menu_img_end").css("weight",  font_size + "px");
    $(".menu_img_end").css("height",  font_size + "px");
    font_size = parseInt( font_size / 4 * 3 );
    $("#copy").css("font-size", font_size+ "px");
    vspace = parseInt(height * 0.1);
    $("#copy").css("top", vspace + "px");
    $("#copy").css("weight", menu_width + "px"); 
    var section_width = menu_width * 4 -60;
    $(".section").css("width", section_width +  "px" );
    var left  = menu_width + 40;
    $(".section").css("left",left  + "px");
    $(".section").css("height", height + "px");
    $("a").css("width", section_width + "px");
    $(".section_img").css("max-width", section_width + "px");
    $(".section_img").after("<br>");
    $("#home").css("width", parseInt(menu_width / 10 * 4) + "px");
    $("#home").css("height", parseInt(menu_width / 20 * 2.5) + "px");
    $("#home").css("line-height", parseInt(menu_width / 20 * 2.5) + "px");
    $("#home").css("top", parseInt(menu_width / 20) + "px");
});
$(function(){
    $("#second_bar_first").click(function(){
        window.location.href = $(this).attr("href");
    });
    $(".second_bar").each(function () {
        if ($(this).attr("href") == undefined) {
            $(this).click(function () {
                alert("正在施工");
            });
        }
        else {
            window.location.href = $(this).attr("href");
        }
    })
});