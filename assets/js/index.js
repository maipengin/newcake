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
// $(window).on('load scroll', function (){

//   var box = $('.fadeIn');
//   var animated = 'animated';

//   box.each(function(){

//     var boxOffset = $(this).offset().top;
//     var scrollPos = $(window).scrollTop();
//     var wh = $(window).height();

//     if(scrollPos > boxOffset - wh + 100 ){
//       $(this).addClass(animated);
//     }
//   });

// });

function fadeAnime(){

  //動きの指定
    $('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
      }else{
      $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
      }
      });
  }
  // 2. 定義した名前をページが読み込まれた後・スクロールした後それぞれのきっかけに指定

  // 画面をスクロールをしたら動く場合の記述
    $(window).scroll(function (){

      fadeAnime();/* アニメーション用の関数を呼ぶ*/

    });// ここまで画面をスクロールをしたら動く場合の記述

  // 画面が読み込まれたらすぐに動く場合の記述
    $(window).on('load', function(){

      fadeAnime();/* アニメーション用の関数を呼ぶ*/

    });// ここまで画面が読み込まれたらすぐに動く場合の記述


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