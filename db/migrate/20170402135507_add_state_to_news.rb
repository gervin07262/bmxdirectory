class AddStateToNews < ActiveRecord::Migration[5.0]
  def change
    add_column :news, :state, :integer
  end
end
