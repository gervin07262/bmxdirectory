class RenameVestuaryToDressingRommsToCircuits < ActiveRecord::Migration[5.0]
  def change
    rename_column :circuits, :vestuary, :dressing_rooms
  end
end
