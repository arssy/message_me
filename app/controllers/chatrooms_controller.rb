class ChatroomsController < ApplicationController
  def index
    @messages = Message.all.includes(:user)
  end
end
