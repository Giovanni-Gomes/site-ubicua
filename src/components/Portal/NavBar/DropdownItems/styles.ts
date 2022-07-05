import styled from 'styled-components';

export const Container = styled.a`
text-decoration: none;
color: ${(props: any) => props.theme.textPrimary};
height: 45px;
width: 100%;
display: flex;
align-items: center;
border-radius: 1rem;
transition: var(--speed); //background
padding: 0.5rem 0.5rem;
font-size: 16px;


&:hover {
  background: ${(props: any) => props.theme.hover};

}
> .icon-right {
  margin-left: auto;
}
`;
