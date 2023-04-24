# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) controller class for blog posts
class BlogPostsController < ApplicationController
  def index
    # ---2) retrieve all blog posts and assign to @posts
    @posts = BlogPost.all
  end

  # ---3) method to display one blog post based on id from url
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Used to display a form to create a new blog post
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Make a new blog post with title and content. If it is valid then redirect to the new blog post page
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This method is used to show a form to update a blog post with a specific ID
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) After finding a blog post with a specified ID, update it. If it is valid then redirect to show the blog post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Redirect to show all blog posts
      redirect_to blog_posts_path
    end
  end

  # ---9) Methods only accessable to this class
  private
  def blog_post_params
    # ---10) Specify the permitted parameters for a blog post
    params.require(:blog_post).permit(:title, :content)
  end
end
