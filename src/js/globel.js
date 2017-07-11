/**
 * Created by user on 2017/7/4.
 */
$(function(){
    $('.carousel').carousel({
        interval: 5000
    });

    $('.u_container .u_tabs').on('click','.u_tab', function () {
        var _this = $(this);
        var index = _this.index();
        var tabs = _this.parent('.u_tabs');
        var panels = tabs.siblings('.u_panels');
        tabs.find('.u_tab.u_active').removeClass('u_active');
        _this.addClass('u_active');
        panels.find('>.u_panel.u_active').removeClass('u_active');  //'>',Child Selectors子对象选择符,所有子对象
        panels.find('>.u_panel').eq(index).addClass('u_active');
    });

    $('.u_container .u_video_tabs').on('click','.u_video_tab', function () {
        var _this = $(this);
        var index = _this.index();
        var tabs = _this.parent('.u_video_tabs');
        var panels = tabs.siblings('.u_panels');
        tabs.find('.u_video_tab.u_active').removeClass('u_active');
        _this.addClass('u_active');
        panels.find('>.u_panel.u_active').removeClass('u_active');  //'>',Child Selectors子对象选择符,所有子对象
        panels.find('>.u_panel').eq(index).addClass('u_active');
    });
    
    $('.u_section .u_activity_list').on('focus','.u_activity_type', function () {
        var _this = $(this);
        var index = _this.dataset.type-1;
        var list = _this.parent('.u_activity_list');
        list.find(".u_activity_type.selected").removeClass('.selected');
        _this.addClass('.selected');
        var content = $('.u_container .u_section .u_activity_border');
        content.find('>.u_activity_container.u_active').removeClass('u_active');
        content.find('>.u_activity_container').eq(index).addClass('u_active');
    });

    $('.nav_main .nav_bar').on('mouseenter','.link_div', function () {
        var _this = $(this);
        var nav = _this.parent('.nav_bar');
        nav.find('.link_div.link_active').removeClass('link_active');
        _this.addClass('link_active')
    }).on('mouseout',function(){
        var _this = $(this);
        _this.find('>.link_div.link_active').removeClass('link_active');
    });


});