class PostsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource param_method: :my_sanitizer
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
     @post = Post.new(my_sanitizer)
     if @post.save
       flash[:notice] = 'La noticia se ha añadido correctamente'
       redirect_to "/posts/"
     else
       flash[:alert] = @post.errors.full_messages
       render 'new'
     end
  end

  def edit
    post
  end

  def update
    if post.update(my_sanitizer)
      flash[:notice] = 'La noticia se ha modificado correctamente'
      redirect_to '/posts/'
    else
      flash[:alert] = Post.errors.full_messages
    end
  end

  def destroy
   if post.present?
     post.destroy
     flash[:notice] = "El post se ha eliminado correctamente"
   else
     flash[:alert] = "El post no existe"
   end
   redirect_to '/posts'
  end

  private
    def post
      @post = Post.find_by(id: params[:id])
    end
    def my_sanitizer
      params.require(:post).permit(:title, :content, :user_id)
    end
end
