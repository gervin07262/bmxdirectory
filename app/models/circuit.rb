class Circuit < ApplicationRecord
  belongs_to :user
  resourcify
  validates :name, :location_x, :location_y, presence: true
end
