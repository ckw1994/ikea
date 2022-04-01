$(function(){
    $('#gnb > ul > li').hover(
        function () {
            $(this).children().addClass('on');
        },
        function () {
            $(this).children().removeClass('on')
        }
    );


    // mobile - 사이트맵 토글 버튼
    $('#m-site-map-btn').click(function(){
        $('#gnb').toggleClass('on');
    })

// pc - 사이트맵 여/닫기 버튼
// 열기
$(function(){
    $('#pc-site-map-btn').click(function(){
        $('.site-map-modal').addClass('on');
    })
})
// 닫기
$(function(){
    $('#close-btn').click(function(){
        $('.site-map-modal').removeClass('on');
    })
})

})

