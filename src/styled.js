import styled from 'styled-components';

export const Header = styled.h3``;

export const Container = styled.div``;

export const Button = styled.button`
  width: 50px;
  margin: 5px;
  color: #fff;
  background-color: ${props => props.positive ? '#227A50' : '#C13035'};
`;
