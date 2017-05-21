class ShopsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource param_method: :my_sanitizer
  def index
    @shops = Shop.all
  end

  def new
    @shop = Shop.new
  end

  def create
     @shop = Shop.new(my_sanitizer)
     if @shop.save
       flash[:notice] = 'La tienda se ha añadido correctamente'
       redirect_to "/shops/"
     else
       flash[:alert] = @shop.errors.full_messages
       render 'new'
     end
  end

  def edit
    shop
  end

  def update
    if shop.update(my_sanitizer)
      flash[:notice] = 'La tienda se ha modificado correctamente'
      redirect_to '/shops/'
    else
      flash[:alert] = Shop.errors.full_messages
    end
  end

  private
    def shop
      @shop = Shop.find_by(id: params[:id])
    end
    def my_sanitizer
      params.require(:shop).permit(:name, :location_x, :location_y, :web, :description,
                                   :user_id, :bicycle_sale, :open_sunday_to_sunday,
                                   :bicycle_rental, :bicycle_repair, :address,
                                   :horary)
    end
end
