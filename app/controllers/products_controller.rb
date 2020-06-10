class ProductsController < ApplicationController
  def index
    @products = Product.select('products.*, artists.name as artist_name').joins(:artist)
    @artists = Artist.select('artists.name, artists.id')
    @product_options = ProductOption.select('products.*, products.name as product_name, options.*, options.name as option_name, product_options.*').joins(:option, :product)
    @artists = Artist.select('artists.name, artists.id')

    productsInfo = {products: @products, product_options: @product_options, artists: @artists}

    respond_to do |format|
      format.json {
          render :json => productsInfo
      }
      format.html { redirect_to("/") }
    end
  end

  def show
    @product = ProductOption.select('products.*, products.name as product_name, options.*, options.name as option_name, product_options.*').joins(:option, :product).where(product_id: params[:id])

    @artist = Artist.find(@product[0].artist_id)

    productInfo = {product: @product, artist: @artist}

    # artistInfo = {artist: @artist, albums: @albums}

    respond_to do |format|
      format.json {
          render :json => productInfo
      }
      format.html { redirect_to("/") }
    end
  end
end