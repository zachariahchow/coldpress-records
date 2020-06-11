class CartController < ApplicationController
  def show
    @customer_cart_info = {customer: @customer, cart: @cart}

    respond_to do |format|
      format.json {
          render :json => @customer_cart_info
      }
      format.html { redirect_to("/") }
    end
  end
end