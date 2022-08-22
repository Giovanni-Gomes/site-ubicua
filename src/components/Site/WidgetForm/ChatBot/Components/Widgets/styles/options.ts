import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const OptionsButton = styled.button`
  margin: 5px;
  border: 1px solid;
  border-radius: 25px;
  padding: 4px;
  border-color: blue;
  background: transparent;
  text-align: center;
  cursor: pointer;
  :hover{
    background: blue;
  }
`;
