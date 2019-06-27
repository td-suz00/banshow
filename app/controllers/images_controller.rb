class ImagesController < ApplicationController
  before_action :authenticate_user!, except: :index
  protect_from_forgery except: :destroy

  $grades = ["１年生", "２年生", "３年生", "４年生", "５年生", "６年生"]
  $subjects = ["国語", "社会", "算数", "理科"]
  $textbook_companies = ["東京書籍", "学校図書", "三省堂", "教育出版", "光村図書", "日本文教出版", "大日本図書", "啓林館", "信州教育出版社"]

  def index
    @images = Image.all.order("created_at DESC").page(params[:page]).per(10)

    if user_signed_in?
      @favorites = Favorite.where(user_id: current_user.id)
    end

  end

  def new
    @image = Image.new
  end

  def create
    image = Image.new(image_params)
    if image.save
      flash[:notice] = '投稿が完了しました'
      redirect_to action: :index
    else
      flash[:alert] = '未入力項目があります'
      redirect_back(fallback_location: root_path)
    end
  end

  def edit
    @image = Image.find(params[:id])

    # @image.imageをバイナリーデータにしてビューで表示できるようにする

    require 'base64'
    require 'aws-sdk'
    if Rails.env.production?
      client = Aws::S3::Client.new(
                             region: 'ap-northeast-1',
                             access_key_id: ENV['AWS_ACCESS_KEY_ID'],
                             secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
                             )
      binary_data = client.get_object(bucket: 'upload-banshow-images', key: image.image_url.file.path).body.read
      gon.image << Base64.strict_encode64(binary_data)
      
    else
      binary_data = File.read(@image.image.file.file)
      gon.image = Base64.strict_encode64(binary_data)
    end

    # require 'base64'
    # binary_data = File.read(@image.image.file.file)
    # gon.image = Base64.strict_encode64(binary_data)

  end

  def update
    image = Image.find(params[:id])
    if image.update(image_params)
      flash[:notice] = '編集が完了しました'
      redirect_to user_mypages_path(current_user)
    else
      flash[:alert] = '未入力項目があります'
      redirect_back(fallback_location: root_path)
    end

  end

  def destroy
    image = Image.find(params[:id])
    if image.user_id == current_user.id
      image.destroy
    end
    flash[:notice] = '板書を削除しました'
    redirect_to user_mypages_path(current_user)
  end

  def search
    @favorites = Favorite.where(user_id: current_user.id)

    if search_params[:grade] && search_params[:subject] && search_params[:unit]
      # まず単元名であいまい検索
      unit_searched_images = Image.where("unit LIKE ?", "%#{search_params[:unit]}%")

      # 教科書会社が選ばれているかどうかで条件分岐
      if params[:image][:textbook_company]
        @images = unit_searched_images.where(grade: search_params[:grade]).where(subject: search_params[:subject]).where(textbook_company: params[:image][:textbook_company]).page(params[:page]).per(10)
      else
        @images = unit_searched_images.where(grade: search_params[:grade]).where(subject: search_params[:subject]).page(params[:page]).per(10)
      end

    else
      flash[:alert] = '未入力項目があります'
      redirect_back(fallback_location: root_path)
    end

  end

  private
  def image_params
    params.require(:image).permit(:image, :grade, :subject, :textbook_company, :unit).merge(user_id: current_user.id)
  end

  def search_params
    params.require(:image).permit(:grade, :subject, :unit)
  end

end
