class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  mount_uploader :icon_image, ImageUploader

  has_many :images
  has_many :favorites
  has_many :images, through: :favorites
  has_many :comments
end
