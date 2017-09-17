class CreateHackerNews < ActiveRecord::Migration[5.1]
  def change
    create_table :hacker_news do |t|
      t.string :heading
      t.string :link

      t.timestamps
    end
  end
end
