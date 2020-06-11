class CartDetailsController < ApplicationController
  def create
      CartDetail.create(cart_id: params[:cart_id], product_option_id: params[:product_option_id])
  end

  def destroy
      CartDetail.where(cart_id: params[:cart_id], product_option_id: params[:product_option_id]).destroy_all
  end
end