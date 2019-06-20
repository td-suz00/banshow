// 画像投稿プレビュー表示
$(function(){
  $fileField = $('#file')

  // 選択された画像を取得し表示
  $($fileField).on('change', $fileField, function(e) {

    file = e.target.files[0]
    reader = new FileReader(),
    $preview = $("#img_field");

    reader.onload = (function(file) {
      return function(e) {
        $preview.empty();
        $preview.append($('<img>').attr({
          src: e.target.result,
          class: "preview",
          title: file.image
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });

  // edit時画像のプレビュー表示
  $(window).on("load", function(){
    $(".edit_image .fas").css("display", "none");
    $preview = $("#img_field");
    // $preview.empty();
    $preview.append($('<img>').attr({
      src: "data:image/jpeg;base64," + gon.image,
      class: "preview",
      title: file.image
    }));
  })
});


