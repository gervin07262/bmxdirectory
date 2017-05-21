class AddFieldsToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :location_x, :string
    add_column :shops, :location_y, :string
    add_column :shops, :web, :string
  end
end
