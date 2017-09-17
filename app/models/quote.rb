class Quote < ApplicationRecord
	def next_id
		self.class.where("id > ?", self.id).pluck(:id).first
	end

	def prev_id
		self.class.where("id < ?", self.id).pluck(:id).last
	end

end
