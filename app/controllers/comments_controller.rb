class CommentsController < ApplicationController

  def new
    @image = Image.find(params[:image_id])
    @comments = Comment.where(image_id: @image.id)
  end

  def create
    @comment = Comment.create(text: comment_params[:text], image_id: comment_params[:image_id], user_id: current_user.id )

    respond_to do |format|
      format.html { redirect_back(fallback_location: root_path) }
      format.json
    end

  end

  private
  def comment_params
    params.permit(:text, :image_id)
  end

end
