class CartDetailsController < ApplicationController
  def create

      @existing_detail = CartDetail.where(product_option_id: params[:product_option_id])[0]

      if @existing_detail
        @existing_detail.update(quantity: @existing_detail[:quantity] + 1)
      else
        CartDetail.create(cart_id: params[:cart_id], product_option_id: params[:product_option_id], quantity: 1)
      end

  end

  def destroy
      CartDetail.where(cart_id: params[:cart_id], product_option_id: params[:product_option_id]).destroy_all
  end

  def update_quantity
    CartDetail.where(cart_id: params[:cart_id], product_option_id: params[:product_option_id]).update(quantity: params[:quantity])
  end
end