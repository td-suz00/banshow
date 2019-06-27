json.text             @comment.text
json.user_icon_image  @comment.user.icon_image.url
json.user_nickname    @comment.user.nickname
json.comment_user_id  @comment.user.id
json.image_user_id    @comment.image.user.id
json.created_at       @comment.created_at.strftime("%Y-%m-%d %H:%M")
