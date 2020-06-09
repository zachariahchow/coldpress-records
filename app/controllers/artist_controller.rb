class ArtistController < ApplicationController

  def index
    @artists = Artist.all

    respond_to do |format|
      format.json {
          render :json => @artists
      }
      format.html { redirect_to("/") }
    end
  end

  def show
    @artist = Artist.find(params[:id]);
    @albums = @artist.albums

    artistInfo = {artist: @artist, albums: @albums}

    respond_to do |format|
      format.json {
          render :json => artistInfo
      }
      format.html { redirect_to("/") }
    end
  end
end