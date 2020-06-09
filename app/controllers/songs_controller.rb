class SongsController < ApplicationController
  def index
    @songs = Song.all

    respond_to do |format|
      format.json {
          render :json => @songs
      }
    end
  end

  def show
    @song = Song.find(params[:id])
    @album = @song.album
    @artist = @album.artist

    songInfo = {song: @song, album: @album, artist: @artist}

    respond_to do |format|
      format.json {
          render :json => songInfo
      }
    end
  end
end