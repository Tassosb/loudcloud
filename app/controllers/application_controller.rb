class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    token = Session.find_by(token: session[:session_token])

    return nil unless token
    @current_user ||= token.user
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.try(:remove_session!, session[:session_token])
    session[:session_token] = nil
  end

  def log_in!(user)
    session[:session_token] = user.add_session!(request.env("HTTP_USER_AGENT"))
  end
end
