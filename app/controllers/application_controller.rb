class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    return @current_user if @current_user
    token = Session.find_by(token: session[:session_token])
    @current_user = token ? token.user : nil
  end

  def logged_in?
    !!current_user
  end

  def log_out!
    current_user.try(:remove_session!, session[:session_token])
    session[:session_token] = nil
  end

  def log_in!(user)
    session[:session_token] = user.add_session!(request.env["HTTP_USER_AGENT"])
  end

  def require_login!
    return if logged_in?
    render json: { session: ["You must be logged in to do that"] }, status: 422
  end
end
