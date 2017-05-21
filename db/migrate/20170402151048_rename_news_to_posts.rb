class RenameNewsToPosts < ActiveRecord::Migration[5.0]
  def change
    rename_table :news, :posts
  end
end
