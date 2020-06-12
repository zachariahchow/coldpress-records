class ApplicationController < ActionController::Base
  before_action :current_shopping_cart

  def current_shopping_cart

    if session[:customer]

      if Customer.exists?(session[:customer])
        @customer = Customer.find(session[:customer])
      else
        @customer = Customer.create
      end

      if Cart.exists?(session[:cart])
        @cart = Cart.find(session[:cart])
      else
        @cart = Cart.create(customer_id: @customer.id)
      end

    else
      @customer = Customer.create
      session[:customer] = @customer.id
      @cart = Cart.create(customer_id: @customer.id)
      session[:cart] = @cart.id
    end

  end
end