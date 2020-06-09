class AlbumsController < ApplicationController
  def index
    @albums = Album.all

    respond_to do |format|
      format.json {
          render :json => @albums
      }
    end
  end

  def show
    @album = Album.find(params[:id]);
    @songs = @album.songs

    albumInfo = {album: @album, songs: @songs}

    respond_to do |format|
      format.json {
          render :json => albumInfo
      }
    end
  end
end