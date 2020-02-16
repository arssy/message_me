class MessagesController < ApplicationController
  before_action :require_user

  def new
    
  end

  def create
    @message = current_user.messages.build(message_params)
    if @message.save
      ActionCable.server.broadcast "chatroom_channel", 
                                    status: 400, 
                                    content: render_message(@message)
    else
      flash[:error] = "Error when sending message"
      redirect_to root_path
    end
  end

  private
  def message_params
    params.require(:message).permit(:message)
  end

  def render_message(message)
    render partial: 'message', locals: {message: message}
  end
end
