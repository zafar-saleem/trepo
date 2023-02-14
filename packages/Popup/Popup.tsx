import { createPortal } from 'react-dom';
import { StyledBackdrop, StyledPopup } from './Popup.styled';

type TPopup = {
  children?: React.ReactDOM;
  showPopup: boolean;
  setShowPopup: () => void;
}

export const Popup: React.FC<TPopup> = ({ children, showPopup, setShowPopup }) => {
  return (
    <>
      {
        showPopup && createPortal(
          <>
            <StyledBackdrop onClick={() => setShowPopup(!showPopup)}></StyledBackdrop>
            <StyledPopup>
              {children}
            </StyledPopup>
          </>,
        document.body)
      }
    </>
  );
}