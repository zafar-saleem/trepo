import styled from 'styled-components';

type TCardProps = {
  bgColor?: string;
}

export const StyledCard = styled.div<TCardProps>`
  width: 100%;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1em;
  box-sizing: border-box;
  background-color: ${props => props.bgColor || `transparent`};
  color: ${props => props.bgColor && `#fff`};
`;
