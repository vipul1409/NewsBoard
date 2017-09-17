class CreateQuotes < ActiveRecord::Migration[5.1]
  def change
    create_table :quotes do |t|
      t.text :text
      t.string :author

      t.timestamps
    end
  end
end
