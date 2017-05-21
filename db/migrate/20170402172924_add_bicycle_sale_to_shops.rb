class AddBicycleSaleToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :bicycle_sale, :integer
  end
end
