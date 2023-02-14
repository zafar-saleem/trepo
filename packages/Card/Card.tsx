import { StyledCard } from './Card.styled';

type TCard = {
  children?: React.ReactDOM;
  bgColor?: string;
}

export const Card: React.FC<TCard> = ({ children, bgColor }) => {
  return (
    <StyledCard bgColor={bgColor}>
      {children}
    </StyledCard>
  );
}