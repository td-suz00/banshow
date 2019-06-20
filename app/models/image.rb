class Image < ApplicationRecord
  mount_uploader :image, ImageUploader

  belongs_to :user
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
  has_many :comments, dependent: :destroy

  with_options presence: true do
    validates :image, :grade, :subject, :textbook_company, :unit
  end

  def favorite_user(user_id)
    favorites.find_by(user_id: user_id)
  end

end
