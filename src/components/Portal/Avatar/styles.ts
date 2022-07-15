import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const AvatarCustom = styled.img`
  padding: 0px;
  /* margin-top: 5px; */
  border-radius: 50%;
  width: 50px;
  height: 50px;


  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  flex: 1;




`
