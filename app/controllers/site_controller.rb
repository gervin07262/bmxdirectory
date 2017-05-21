class SiteController < ApplicationController
  def index
    @circuits = Circuit.all
  end
  def posts
      @posts = Post.all
      @events = Event.all
  end
  def post_detail
    @post = Post.find_by(id: params[:id])
  end
  def shops
    @shops = Shop.all
  end
  def events
    @events = Event.all
  end
  def get_circuits
    circuits = Circuit.all
    render json: circuits
  end

  def get_circuits_filter
    obj = params[:filter]
    circuits = Circuit.where(decode_json(obj))
    render json: circuits
  end

  def get_shops
    shops = Shop.all
    render json: shops
  end

  def get_shops_filter
    obj = params[:filter]
    circuits = Shop.where(decode_json(obj))
    render json: circuits
  end
private
  def decode_json(obj)
    j = ActiveSupport::JSON
    j.decode(obj)
  end
end
