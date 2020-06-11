class ApplicationController < ActionController::Base
  before_action :current_shopping_cart

  def current_shopping_cart

    if session[:customer]
      @customer = session[:customer]
      @cart = Cart.find(session[:cart])
    else
      @customer = Customer.create
      session[:customer] = @customer.id
      @cart = Cart.create(customer_id: @customer.id)
      session[:cart] = @cart.id
    end

  end
end