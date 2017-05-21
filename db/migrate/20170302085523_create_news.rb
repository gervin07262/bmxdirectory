class CreateNews < ActiveRecord::Migration[5.0]
  def change
    create_table :news do |t|
      t.string :title
      t.text :content
      t.datetime :date
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
