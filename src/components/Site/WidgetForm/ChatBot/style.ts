import styled from 'styled-components'

export const ContainerChatBot = styled.div`
  z-index: 16;
  position: fixed;
  bottom: 0;
  right: 1rem;
  display: flex;
  max-width: 25rem;
  @media (min-width: 768px) {
    bottom: 0;
    right: 2.5rem;
  }

  .react-chatbot-kit-chat-message-container {
    height: 28.125rem;
    background: ${(props) => props.theme.colors['gray-600']}; //red
  }

  .react-chatbot-kit-chat-container {

  }
  .react-chatbot-kit-chat-inner-container {}
  .react-chatbot-kit-chat-header {
    background: ${(props) => props.theme.colors.secondary};
  }
  .react-chatbot-kit-chat-input-container {}
  .react-chatbot-kit-chat-input {
    min-width: 22rem;
    background: ${(props) => props.theme.colors['gray-900']}; //#567572ff;
    color: white;
    padding: 0.8rem 0.8rem;
  }
  .react-chatbot-kit-chat-input-form {
    display: flex;
    flex-direction: row;
    /* background: ${(props) => props.theme.colors.white}; //#867872ff;
    color: white; */
  }
  .react-chatbot-kit-chat-input::placeholder {}
  .react-chatbot-kit-chat-btn-send {
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    align-items: center;
  }
  .react-chatbot-kit-chat-btn-send-icon {
    width: 100%;
  }
  .react-chatbot-kit-chat-bot-message-container {
    display: flex;
    flex-direction: row;
    padding: 1rem;
  }
  .react-chatbot-kit-chat-bot-message {
    padding: 0.5rem;
    border-radius: 8px;
    background: ${(props) => props.theme.colors['primary-300']};
  }
  .react-chatbot-kit-chat-bot-message-arrow {}
  .react-chatbot-kit-chat-bot-avatar-container {}
  .react-chatbot-kit-chat-bot-avatar-icon {}
  .react-chatbot-kit-chat-bot-avatar-letter {}
  .react-chatbot-kit-chat-bot-loading-icon-container {}
  .chatbot-loader-container {}
  .react-chatbot-kit-error {}
  .react-chatbot-kit-error-container {}
  .react-chatbot-kit-error-header {}
  .react-chatbot-kit-error-docs {}

  .react-chatbot-kit-user-chat-message {
    padding: 0.5rem;
    border-radius: 8px;
    background: ${(props) => props.theme.colors['gray-900']};
  }
  .react-chatbot-kit-user-chat-message-container{
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
  }





  /* .app-chatbot-button-icon {
    width: 25px;
    height: 25px;
  } */

  /* #chatbot-loader #chatbot-loader-dot1 {}
  #chatbot-loader #chatbot-loader-dot2 {}
  #chatbot-loader #chatbot-loader-dot3 {} */

  /* .react-chatbot-kit-chat-btn-send-icon {
    max-width: 40px;
    max-height: 40px;
    background-color: red;
    border: 0;
    padding: 0;
  } */
  /* max-width: 200px; */
`
