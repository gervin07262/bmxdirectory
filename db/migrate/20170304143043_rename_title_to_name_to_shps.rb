class RenameTitleToNameToShps < ActiveRecord::Migration[5.0]
  def change
    rename_column :shops, :title, :name
  end
end
