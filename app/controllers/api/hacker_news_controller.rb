class Api::HackerNewsController < ApplicationController
	def show
		@hacker_news = HackerNews.find(params[:id])
	end
end
