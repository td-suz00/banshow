class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :image,   null: false
      t.string :subject, null: false
      t.string :grade, null: false
      t.string :textbook_company, null: false
      t.string :unit, null: false
      t.integer :favorite_count

      t.timestamps
    end
  end
end
