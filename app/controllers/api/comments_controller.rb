class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render 'api/comments/comment', comment: @comment
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
    params.require(:comment).permit(:author_id, :track_id, :body)
  end
end
