$(function(){
  function buildMyComment(data){
    if (data.user_icon_image != null) {
      var html = `
                  <div class = mine>
                    <div class = my_info>
                      <div class = my_image>
                        <img src=${data.user_icon_image} class=icon_image>
                      </div>
                      <div class = my_name>
                        ${data.user_nickname}
                      </div>
                    </div>

                    <div class = my_comment>
                      ${data.text}
                    </div>
                  </div>
                  <div class = my_comment_time >
                    ${data.created_at}
                  </div>
                `
      return html
    } else {
      var html = `
                  <div class = mine>
                    <div class = my_info>
                      <div class = my_image>
                        <img src="/assets/no_avator.png" class=icon_image>
                      </div>
                      <div class = my_name>
                        ${data.user_nickname}
                      </div>
                    </div>

                    <div class = my_comment>
                      ${data.text}
                    </div>
                  </div>
                  <div class = my_comment_time >
                    ${data.created_at}
                  </div>
                `
      return html
    }
  }

  function buildOtherComment(data){
    if (data.user_icon_image != null) {
      var html = `
                  <div class = other>
                    <div class = other_user_info>
                      <div class = other_user_image>
                        <img src=${data.user_icon_image} class=icon_image>
                      </div>
                      <div class = other_user_name>
                        ${data.user_nickname}
                      </div>
                    </div>
                    <div class = other_user_comment>
                      ${data.text}
                    </div>
                  </div>
                  <div class = other_user_comment_time >
                    ${data.created_at}
                  </div>
                `
      return html
    } else {
      var html = `
                  <div class = other>
                    <div class = other_user_info>
                      <div class = other_user_image>
                        <img src="/assets/no_avator.png" class=icon_image>
                      </div>
                      <div class = other_user_name>
                        ${data.user_nickname}
                      </div>
                    </div>
                    <div class = other_user_comment>
                      ${data.text}
                    </div>
                  </div>
                  <div class = other_user_comment_time >
                    ${data.created_at}
                  </div>
                `
      return html
    }
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

      console.log(data)

      if(data.comment_user_id==data.image_user_id){
        var html = buildMyComment(data);
        $('.comment').prepend(html)
      }else{
        var html = buildOtherComment(data);
        $('.comment').prepend(html)
      }
      $('#new_comment')[0].reset()
    })

    .fail(function(){
      alert('error');
    })
  })
})
