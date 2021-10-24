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
      $('.globalMenuSp').toggleClass('active');
  });
});

$('.globalMenuSp').on('click',function(){
  $('.p-hamburger').toggleClass('active');
  $(this).toggleClass('active');
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


    // *スライダー＊
    $('.slider').slick({
      autoplay: true,//自動的に動き出すか。初期値はfalse。
      infinite: true,//スライドをループさせるかどうか。初期値はtrue。
      speed: 500,//スライドのスピード。初期値は300。
      slidesToShow: 3,//スライドを画面に3枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
      nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
      centerMode: true,//要素を中央ぞろえにする
      variableWidth: true,//幅の違う画像の高さを揃えて表示
      dots: true,//下部ドットナビゲーションの表示
    });