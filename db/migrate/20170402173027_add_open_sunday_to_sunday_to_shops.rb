class AddOpenSundayToSundayToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :open_sunday_to_sunday, :integer
  end
end
