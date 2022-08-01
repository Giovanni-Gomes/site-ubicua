import styled from 'styled-components'
import { Popover } from '@headlessui/react'

// Index
export const Container = styled.div`
  background-color: rgb(24 24 27 / 1);
  padding: 1rem;
  position: relative;
  border-radius: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  width: calc(100vw-2rem);

  @media (min-width: 768px) {
    width: auto;
  }
`

export const Footer = styled.footer`
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  color: rgb(163 163 163 / 1);
`

// FeedbackType
export const HeaderSpan = styled.span`
  font-size: 1.25rem /* 20px */;
  line-height: 1.5rem /* 28px */;
  color: white;
`

// CLoseButton
export const PopButton = styled(Popover.Button)`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  border: none;
  color: rgb(161 161 170);
  background: transparent;

  &:hover {
    color: rgb(244 244 245);
  }

  > :first-child {
    width: 1rem;
    height: 1rem;
  }
`

export const Content = styled.div`
  display: flex;
  padding: 2rem 0;
  gap: 0.5rem;
  width: 100%;
`

export const ButtonCard = styled.button`
  /* background-color: rgb(39 39 42 / 1); */
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  padding: 1.25rem 2rem;
  width: 9rem;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  border-width: 500px;
  border: transparent;

  &:hover {
    /* border: 0.05rem solid #8257e6; */
    opacity: 0.7;
  }
  &:focus {
    /* border: 2px solid #8257e6; */
    outline: none;
  }
`

// FeedbackContent
export const HeaderButton = styled.button`
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  color: rgb(161 161 170 / 1);
  background: transparent;
  border: none;
  &:hover {
    color: rgb(244 244 245 / 1);
  }
  > :first-child {
    width: 1rem;
    height: 1rem;
  }
`

export const WrapperTitle = styled.span`
  font-size: 1.25rem /* 20px */;
  line-height: 1.5rem /* 24px */;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const Form = styled.form`
  margin: 1rem 0;
  width: 100%;
`

export const Textarea = styled.textarea`
  display: block;
  box-sizing: border-box;
  padding: 0.5rem;
  min-width: 404px;
  width: 100%;
  min-height: 120px;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  color: rgb(244 244 245 / 1);
  border-color: rgb(82 82 91 / 1);
  background-color: transparent;
  border-radius: 4px;

  &::placeholder {
    color: rgb(161 161 170 / 1);
  }
  &:focus {
    border-color: #8257e6;
    box-shadow: inset 0 0 0 calc(1px + 0px) #8257e6;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: #444;
  }
  ::-webkit-scrollbar-thumb {
    background: #333;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #222;
  }

  resize: none;
`

export const FooterForm = styled.footer`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  align-items: center;

  > button.submit {
    padding: 0.5rem;
    background-color: #8257e6;
    border-radius: 4px;
    border-color: transparent;
    flex: 1 1 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: white;

    &:hover {
      background-color: #996dff;
    }

    &:focus {
      border-color: #8257e6;
      box-shadow: inset 0 0 0 calc(2px + 0px) rgb(24 24 27);
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    &:disabled {
      opacity: 0.5;
    }
    &:disabled:hover {
      background-color: rgb(130 87 230 / 1);
    }
  }

  > :first-child {
    /* padding: 0.5rem; */
    background: rgb(24 24 27);
    border-radius: 4px;
    border: transparent;
    color: white;

    &:hover {
      background: rgb(63 63 70);
    }

    &:focus {
      border-color: #8257e6;
      box-shadow: inset 0 0 0 calc(2px + 0px) #8257e6;
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`

// FeedbackSuccess
export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;
  width: 384px;
  color: white;

  > span {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    margin-top: 0.5rem /* 8px */;
  }

  > button {
    padding: 0.5rem 1.5rem;
    background-color: rgb(39 39 42);
    border-radius: 4px;
    border-color: transparent;
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem /* 14px */;
    line-height: 1.5rem /* 24px */;
    margin-top: 1rem;
    color: white;

    &:hover {
      background-color: rgb(63 63 70);
    }

    &:focus {
      border-color: #8257e6;
      box-shadow: inset 0 0 0 calc(2px + 0px) rgb(24 24 27);
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`

// Loading
export const WrapperLoading = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  > :first-child {
    width: 1rem;
    height: 1rem;
    animation: spin 1s linear infinite;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`

// ScreenshotButton
export const ButtonScreenshot = styled.button`
  padding: 0.25rem /* 4px */;
  width: 2.5rem;
  height: 2.5rem;
  border-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: rgb(161 161 170 / 1);

  &:hover {
    color: rgb(244 244 245 / 1);
  }
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`

export const OtherButtonScreenshot = styled.button`
  padding: 0.5rem /* 8px */;
  background-color: rgb(39 39 42 / 1);
  border-radius: 4px;
  border-color: transparent;
  &:hover {
    background-color: rgb(63 63 70 / 1);
  }
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: inset 0 0 0 2px #18181b,
      inset 0 0 0 calc(2px + 2px) rgb(130 87 230 / 1),
      inset 0 0 0 calc(2px + #18181b) #18181b, 0 0 #0000;
  }

  > :first-child {
    width: 1.5rem;
    height: 1.5rem;
  }
`
