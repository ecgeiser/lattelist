class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  end

  def search
    parameters = { location: params[:loc], limit: 10 }
    render json: Yelp.client.search('coffee', parameters)
  end
end
