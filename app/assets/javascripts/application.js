// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
// Bootstrap Sass
//= require bootstrap
//= require rails-ujs
//= require activestorage
// require turbolinks
//= require_tree .

// var luminousTrigger = document.querySelector('.luminous');
// if( luminousTrigger !== null ) {
//     new Luminous(luminousTrigger);
// }

// $(function(){
//   $fileField = $('#file')
 
//   // 選択された画像を取得し表示
//   $($fileField).on('change', $fileField, function(e) {
//     console.log(this)

//     file = e.target.files[0]
//     reader = new FileReader(),
//     $preview = $("#img_field");
 
//     reader.onload = (function(file) {
//       return function(e) {
//         $preview.empty();
//         $preview.append($('<img>').attr({
//           src: e.target.result,
//           width: "100%",
//           class: "preview",
//           title: file.image
//         }));
//       };
//     })(file);
//     reader.readAsDataURL(file);
//   });
// });

// $(function(){
//   // 'use strict';

//   // MENUを押すとhide-menuクラスが外れてポップアップメニューが展開する
//   $('#menu-open').on('click', function(){
//     console.log(this)
//     $('.menu-wrap').removeClass('hide-menu');
//   });

//   // CLOSEを押すとhide-menuクラスが付与されてポップアップメニューが閉じる
//   $('#menu-close').on('click', function(){
//     $('.menu-wrap').addClass('hide-menu');
//   });

// });

// $(function(){
//   $("#favorite_button").on("click", function(e){
//     // console.log(this)
//     $(this).hide().append($("#favorite_delete" ))
//     // $(this).append($("#favorite_delete_button"))
//   })
// })

// $(function(){
//   $("#favorite_delete_button").on("click", function(){
//     // console.log(this)
//     $(this).hide().append($("#favorite_button"))
//     // $(this).append($("#favorite_button"))
//   })
// })


// $(function(){
//   $("#favorite_button").on("click", function(e){
//     e.preventDefault();

//     // console.log(this)

//     // var html1 = $("#favorite_button").prop('outerHTML');
//     // var html2 = $("#favorite_delete_button").prop('outerHTML');
//     // var html3 = $("#favorite_button").html();

//     // console.log(html1)
//     // console.log(html2)
//     // console.log(html3)

//     var image = $("#favorite_button").image
//     console.log(image)

//     $.ajax({
//       url: "/images/:image_id/add",
//       type: "POST",
//       // data: formData,
//       dataType: 'json',
//     })

//     .done(function(){
//       // console.log(this)
//       $(this).replaceWith($("#favorite_delete_button"))
      
//     })


//     // $(this).replaceWith($("#favorite_delete_button"))
//   })
// })

// $(function(){
//   $("#favorite_delete_button").on("click", function(){
//     // console.log(this)

//     // var html1 = $("#favorite_button").prop('outerHTML');
//     // var html2 = $("#favorite_delete_button").prop('outerHTML');
//     // var html3 = $(".favorite_count").html();

//     // console.log(html1)
//     // console.log(html2)
//     // console.log(html3)


//     $(this).replaceWith($("#favorite_button"))
//   })
// })


// = button_to "お気に入り解除", image_delete_path(image), method: :delete, id: "favorite_delete_button"
// = button_to "お気に入り", image_add_path(image), method: :post, id: "favorite_button"
