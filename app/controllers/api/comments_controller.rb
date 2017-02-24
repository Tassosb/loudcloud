class Api::CommentsController < ApplicationController
  before_action :require_login!

  def create
    @comment = current_user.authored_comments.new(comment_params)

    if @comment.save
      render :show, comment: @comment
    else
      render @comment.errors, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy if @comment

    render json: {}, status: 200
  end

  private
  def comment_params
    params.require(:comment).permit(:track_id, :body, :track_time)
  end
end
