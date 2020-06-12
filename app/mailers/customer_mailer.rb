class CustomerMailer < ApplicationMailer
  default from: 'coldpressrecordsdemo@gmail.com'

  def confirm_order_email
    @order = Order.find(params[:order_id])
    @order_details = @order.order_details
    mail(to: @order.customer_email, subject: 'Thank you for your Order!')
  end
end