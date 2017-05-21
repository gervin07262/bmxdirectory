class AddAddressToCircuits < ActiveRecord::Migration[5.0]
  def change
    add_column :circuits, :address, :string
  end
end
