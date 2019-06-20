$(function(){
  function buildMyComment(data){
    var html = `
                <div class = mine>
                  <div class = my_info>
                    <div class = my_image>
                      <img src=${data.user_icon_image} class=icon_image>
                    </div>
                    <div class = my_name>
                      <p> ${data.user_nickname} </p>
                    </div>
                  </div>

                  <div class = my_comment>
                    <p> ${data.text} </p>
                  </div>
                </div>
              `
    return html
  }

  function buildOtherComment(data){
    var html = `
                <div class = other>
                  <div class = other_user_info>
                    <div class = other_user_image>
                    <img src=${data.user_icon_image} class=icon_image>
                    </div>
                    <div class = other_user_name>
                      <p> ${data.user_nickname} </p>
                    </div>
                  </div>

                  <div class = other_user_comment>
                    <p> ${data.text} </p>
                  </div>
                </div>
              `
    return html
  }


  $("#new_comment").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var image_id = $(".card.mb-3").attr("data-imageID")

    $.ajax({
      url: "/images/"+ image_id + "/comments",
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      // 送信者がimageのuserの場合と、それ以外で場合分け
      if(data.comment_user_id==data.image_user_id){
        var html = buildMyComment(data);
        $('.comment').append(html)
      }else{
        var html = buildOtherComment(data);
        $('.comment').append(html)
      }
      
      // 投稿メッセージまでスクロール
      $('.comments_page').animate({scrollTop: $('.comments_page')[0].scrollHeight}, 'fast');
      console.log(data)
      // テキストボックスを空に
      $('#new_comment')[0].reset()
    })

    .fail(function(){
      alert('error');
    })
  })
})
