import styled from 'styled-components';

export const Container = styled.a`
text-decoration: none;
color: ${(props: any) => props.theme.textPrimary};
height: 45px;
width: 100%;
display: flex;
align-items: center;
border-radius: var(--border-radius);
transition: var(--speed); //background
padding: 0.1rem;

&:hover {
  background: ${(props: any) => props.theme.hover};
}
> .icon-right {
  margin-left: auto;
}
`;
