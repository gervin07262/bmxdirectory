class AddStateToCircuits < ActiveRecord::Migration[5.0]
  def change
    add_column :circuits, :state, :integer
  end
end
