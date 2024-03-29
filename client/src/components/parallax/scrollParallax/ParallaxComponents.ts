import styled from "styled-components";

type LayerProps = {
  scrollValue: number;
  inset: number;
};
export const Container = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const BottomLayer = styled.div.attrs<LayerProps>(
  ({ scrollValue, inset }) => ({
    style: {
      transform: `translateY(${Math.min(scrollValue, inset)}px)`,
    },
  })
)<LayerProps>`
  position: absolute;
  top: ${(props) => -props.inset}px;
  bottom: ${(props) => -props.inset}px;
  left: ${(props) => -props.inset}px;
  right: ${(props) => -props.inset}px;
`;

export const TopLayer = styled.div.attrs<LayerProps>(
  ({ scrollValue, inset }) => ({
    style: {
      transform: `translateY(${Math.min(scrollValue, inset)}px)`,
    },
  })
)<LayerProps>`
  position: absolute;
  top: ${(props) => -props.inset}px;
  bottom: ${(props) => -props.inset}px;
  left: ${(props) => -props.inset}px;
  right: ${(props) => -props.inset}px;
`;
