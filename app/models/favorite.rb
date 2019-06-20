class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :image, counter_cache: :favorite_count
end
