class CircuitsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource param_method: :my_sanitizer
  def index
    @circuits = Circuit.all
  end

  def new
    @circuit = Circuit.new
  end

  def create
     @circuit = Circuit.new(my_sanitizer)
     if @circuit.save
       flash[:notice] = 'El circuito se ha añadido correctamente'
       redirect_to "/circuits/"
     else
       flash[:alert] = @circuit.errors.full_messages
       render 'new'
     end
  end

  def edit
    circuit
  end

  def update
    if circuit.update(my_sanitizer)
      flash[:notice] = 'El circuito se ha modificado correctamente'
      redirect_to "/circuits/"
    else
      flash[:alert] = circuit.errors.full_messages
    end
  end

  private
    def circuit
      @circuit = Circuit.find_by(id: params[:id])
    end
    def my_sanitizer
      params.require(:circuit).permit(:name, :location_x, :location_y, :web,
      :dressing_rooms, :price, :training_classes, :address, :state, :user_id)
    end
end
