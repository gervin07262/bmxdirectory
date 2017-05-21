class AddHoraryToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :horary, :string
  end
end
