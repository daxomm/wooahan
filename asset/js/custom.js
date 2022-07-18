$(function(){

//가로 드롭다운 메뉴

$('.menu-item').hover(function(){
  
  if( $(this).find('ul').length == 1){
    $('.header').addClass('active');
    $(this).find('.sub-box').stop().fadeIn(100)
    $(this).find('.link-sub').first().addClass('activity')
  }
  },function(){
    $('.header').removeClass('active');
    $('.sub-box').stop().fadeOut(100);
  })

  // 서브메뉴 호버했을 때 글자색 빼기
   
  
  $('.nav-area .link-sub').mouseover(function () {
    $('.nav-area .link-sub').removeClass('activity')
    $(this).addClass('activity')
  });
  $('.nav-area .link-sub').mouseout(function () {
    $(this).removeClass('activity')
  });
  
  

  //사이드 메뉴 열고 닫기
  $(".header .btn-menu").click(function (e) {
    e.preventDefault();
    $('.side-deimmed').addClass('show')
    $('body').addClass('overflowHidden')
    $('.side-area').addClass('on')
  })
  $(".header .logo-area").click(function (e) {
    e.preventDefault();
    $('.side-deimmed').removeClass('show')
    $('body').removeClass('overflowHidden')
    $('.side-area').removeClass('on')
  })

  // 사이드 메뉴 안의 아코디언 메뉴

  $('.header .side-area .btn-down').on("click", function(e){
    e.preventDefault()
    $(this).parent().siblings('.sub-menu-list').slideToggle();
    $(this).toggleClass('on');
  });


  //메인 비주얼

  var swiper = new Swiper(".sc-visual .swiper", {
  loop: true,
  speed:1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable : true,
  },
});


// 관련 사이트

$('.site-area .btn-site').click(function(e){
  e.preventDefault()
  $('.site-list').stop().slideToggle();
})

// footer 관련 사이트 버튼

$('.site-area .btn-site').click(function(e){
  e.preventDefault()
  $('.btn-arrow').toggleClass('on');
})


// 비디오 정지 , 재생

$('.btn-pause').click(function(e){
  e.preventDefault();
  $('.video-area').addClass('active');
  $('.sc-service video')[0].pause();
})

$('.btn-play').click(function(e){
  e.preventDefault();
  $('.video-area').removeClass('active');
  $('.sc-service video')[0].play();
})


}) // function(){}