class FavoritesController < ApplicationController
  protect_from_forgery
  before_action :authenticate_user!

  def index
    @favorites = Favorite.where(user_id: current_user.id)
    images = @favorites.map{|favorite| Image.find_by(id: favorite.image_id)}
    @images = Kaminari.paginate_array(images).page(params[:page]).per(10)
  end

  def create
    image = Image.find(params[:image_id])
    if Favorite.create(user_id: current_user.id, image_id: image.id)
      redirect_back(fallback_location: root_path)
    else
      redirect_back(fallback_location: root_path)
    end
  end

  def destroy
    image = Image.find(params[:image_id])

    if favorite = Favorite.find_by(user_id: current_user.id, image_id: image.id)
      favorite.destroy
      redirect_back(fallback_location: root_path)
    else
      redirect_back(fallback_location: root_path)
    end
  end

end
