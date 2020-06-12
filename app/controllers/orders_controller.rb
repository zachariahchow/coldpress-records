class OrdersController < ApplicationController
  def create
    Order.create(customer_email: params[:customer_email], customer_billing_address: params[:customer_billing_address], customer_shipping_address: params[:customer_shipping_address], customer_country: params[:customer_country], customer_phone: params[:customer_phone], status: 0, delivery_method: params[:delivery_method], total_price: params[:total_price])
    end

  def show
  end
end