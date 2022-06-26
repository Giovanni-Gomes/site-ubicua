import styled from 'styled-components';

import avatarImage from '/assets/portal/imgs/image.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 76px;
  height: 40px;
  right: 2rem;
  top: 12px;
`;

export const AvatarCustom = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  border-radius: 50%;

  width: 56px;
  height: 56px;


  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  flex: 1;
  background: url(${avatarImage});
  background-size: cover;

`
