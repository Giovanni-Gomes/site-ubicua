import styled from 'styled-components'

export const ContainerChatBot = styled.div`
  z-index: 16;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 280px;
  @media (min-width: 768px) {
    bottom: 2.5rem;
    right: 2.5rem;
  }

  .react-chatbot-kit-chat-message-container {
    height: 400px;
    background: ${(props) => props.theme.colors['gray-700']}; //#c7d3d4ff;
  }

  .react-chatbot-kit-chat-input-form {
    background: ${(props) => props.theme.colors.white}; //#567572ff;
    color: white;
  }

  .app-chatbot-button-icon {
    width: 25px;
    height: 25px;
  }

  .react-chatbot-kit-chat-btn-send {
    max-width: 28px;
    max-height: 28px;
    color: ${(props) => props.theme.colors.secondary} !important;
    border: 0;
    padding: 0;
  }

  /* .react-chatbot-kit-chat-btn-send-icon {
    max-width: 40px;
    max-height: 40px;
    background-color: red;
    border: 0;
    padding: 0;
  } */
  /* max-width: 200px; */
`
