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

  def show_latest
    @albums = Album.select('albums.*, artists.name as artist_name').joins(:artist).order(year_released: :desc).take(6)

    respond_to do |format|
      format.json {
          render :json => @albums
      }
    end
  end
end