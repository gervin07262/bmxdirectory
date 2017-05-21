class AddBicycleRentalToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :bicycle_rental, :integer
  end
end
