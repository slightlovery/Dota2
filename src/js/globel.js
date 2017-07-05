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
        tabs.find('.u_tab .u_active').removeClass('u_active');
        _this.addClass('u_active');
    })
});