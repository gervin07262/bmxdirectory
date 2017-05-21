class AddBicycleRepairToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :bicycle_repair, :integer
  end
end
