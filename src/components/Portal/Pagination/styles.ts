import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* gap: 6px; */
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 8px auto;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  /* margin-right: 0.5rem; */
  font-size: 0.875rem;
  color: white;
  cursor: pointer;
  padding: 0 0.7rem;
  width: 0.875rem;
  background: ${(props) => props.theme.colors['gray-700']};
  &:hover {
    background: ${(props) => props.theme.colors['gray-500']};
  }

  &:disabled {
    background: ${(props) => props.theme.colors['primary-300']} ;
    cursor: default;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  gap: 2px;

  p {
    color: ${(props) => props.theme.colors['gray-300']};
    width: 8px;
    text-align: center;
  }
`;