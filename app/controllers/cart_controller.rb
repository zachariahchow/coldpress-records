class CartController < ApplicationController
  def show
    @cart_products = @cart.cart_details.map{ |detail|
      {product: ProductOption.find(detail.product_option.id).product, option: ProductOption.find(detail.product_option.id).option, product_option: ProductOption.find(detail.product_option.id)}}

    @customer_cart_info = {customer: @customer, cart: @cart, cartDetails: @cart.cart_details, cartProducts: @cart_products }

    respond_to do |format|
      format.json {
          render :json => @customer_cart_info
      }
      format.html { redirect_to("/") }
    end
  end
end