import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button<{ border?: string, color?: string, size?: string, radius?: string, fontColor?: string }>`
  background-color: ${({ color }) => color};
  padding: 10px 12px;
  color: ${({ fontColor }) => fontColor};
  width: ${({ size }) => size};
  outline: none;
  cursor: pointer;
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    opacity: .95;
    transform: scale(0.98); 
    box-shadow: 0 0 8px ${({ color }) => color};
  }
`;

export const LinkContainer = styled(Link)<{ border?: string, color?: string, size?: string, radius?: string, fontColor?: string }>`
  background-color: ${({ color }) => color};
  padding: 10px 12px;
  color: ${({ fontColor }) => fontColor};
  width: ${({ size }) => size};
  outline: none;
  cursor: pointer;
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: .95;
    transform: scale(0.98); 
    box-shadow: 0 0 8px ${({ color }) => color};
  }
`;