import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  margin: 0.2rem 0.5rem;

  > button {
    font-size: 1.2em;
    background: none;
    border: none;
    color: var(--bg-primary);
    cursor: pointer;
    transition: color 0.3s ease;
  }

  > button:last-child {
    padding-bottom: 0.2rem;
    color: var(--color-gray);
  }

  > button:focus {
    outline: none;
    opacity: 0.1;

  }

`;

export const ToggleControl = styled.span`
  position: relative;
  padding: 0 6px;
  display: flex;
  align-items: center;

  label {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    background: #fff;
    opacity: 0.9;
    background-color: #f6f6f6;
  }

`

export const Input = styled.input.attrs({ type: 'checkbox' })`
  width: 40px;
  height: 10px;
  background: #555;
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;

  :checked+label {
    left: 30px;
  }

  :focus {
    outline: solid 0.12rem white;
  }
`
