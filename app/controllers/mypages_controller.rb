class MypagesController < ApplicationController
  before_action :authenticate_user!

  def index
    @images = Image.all.where( user_id: current_user.id ).order("created_at DESC").page(params[:page]).per(10)
  end
end
