function menuFadeOut(scrollTop){
  var $scrollNav = $('.l-header__scrollNav');
      windowHeight = $(window).height();

      if(scrollTop >= windowHeight + 80) {
        $scrollNav.removeClass('hide');
      }else {
        $scrollNav.addClass('hide');
      }
}

function scrollFadeinUp(scrollTop){
  var windowHeight = $(window).height();

  if(scrollTop > windowHeight + 80){
    $('.fadeIn').addClass('scrollIn');
  }
}

function scrollEvent(){
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();

    scrollFadeinUp(scrollTop);
    menuFadeOut(scrollTop);
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
//  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
  scrollEvent();
});

// *ハンバーガー
$(function() {
  $('.p-hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});

// *ふわっと
$(window).on('load scroll', function (){

  var box = $('.fadeIn');
  var animated = 'animated';

  box.each(function(){

    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > boxOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });

});

// フェードする前のcssを定義
//   $('.scroll-fade').css({
//       opacity: 0,
//       transform: 'translateY('+ effect_move +'px)',
//       transition: effect_time + 'ms'
//   });

//   // スクロールまたはロードするたびに実行
//   $(window).on('scroll load', function(){
//       var scroll_top = $(this).scrollTop();
//       var scroll_btm = scroll_top + $(this).height();
//       effect_pos = scroll_btm - effect_pos;

//       // effect_posがthis_posを超えたとき、エフェクトが発動
//       $('.scroll-fade').each( function() {
//           var this_pos = $(this).offset().top;
//           if ( effect_pos > this_pos ) {
//               $(this).css({
//                   opacity: 1,
//                   transform: 'translateY(0)'
//               });
//           }
//       });
//   });
// });
// *ふわっと２