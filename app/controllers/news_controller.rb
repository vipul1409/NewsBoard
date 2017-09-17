class NewsController < ApplicationController
  def home
  	@first_quote_id = Quote.first.id
  end
end
