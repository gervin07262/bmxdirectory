class CreateCircuits < ActiveRecord::Migration[5.0]
  def change
    create_table :circuits do |t|
      t.string :name
      t.string :location_x
      t.string :location_y
      t.string :web

      t.timestamps
    end
  end
end
