class AddFieldsToCircuits < ActiveRecord::Migration[5.0]
  def change
    add_column :circuits, :vestuary, :integer
    add_column :circuits, :price, :float
    add_column :circuits, :training_classes, :integer
  end
end
