class AddUserIdToCircuits < ActiveRecord::Migration[5.0]
  def change
    add_reference :circuits, :user, index: true, foreign_key: true
  end
end
