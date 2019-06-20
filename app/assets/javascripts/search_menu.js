// 検索メニュー表示
$(function(){
  // MENUを押すとhide-menuクラスが外れてポップアップメニューが展開する
  $('#menu-open').on('click', function(){
    $('.menu-wrap').removeClass('hide-menu');
  });

  // CLOSEを押すとhide-menuクラスが付与されてポップアップメニューが閉じる
  $('#menu-close').on('click', function(){
    $('.menu-wrap').addClass('hide-menu');
  });
});
