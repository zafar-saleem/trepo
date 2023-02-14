import styled from 'styled-components';

export const StyledPopup = styled.div`
  display: block;
  max-width: 400px;
  max-height: 150px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 2;
  background-color: #fff;
  padding: 1em;
`;

export const StyledBackdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #000;
  opacity: .5;
`;
