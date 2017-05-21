class AddStateToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :state, :integer
  end
end
