import { KanbanBoard } from './Board.styled';

type TBoard = {
  children?: React.ReactDOM;
}

export const Board: React.FC<TBoard> = ({ children }) => {
  return (
    <KanbanBoard>
      {children}
    </KanbanBoard>
  );
}