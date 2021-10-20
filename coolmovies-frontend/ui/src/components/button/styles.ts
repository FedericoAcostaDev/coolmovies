import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button<{ border?: string, color?: string, size?: string, radius?: string, fontcolor?: string }>`
  background-color: ${({ color }) => color};
  padding: 10px 12px;
  color: ${({ fontcolor }) => fontcolor};
  width: ${({ size }) => size};
  outline: none;
  cursor: pointer;
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    opacity: .95;
    transform: scale(1.02); 
    box-shadow: 0 0 8px ${({ color }) => color};
  }
`;

export const LinkContainer = styled(Link)<{ border?: string, color?: string, size?: string, radius?: string, fontcolor?: string }>`
  background-color: ${({ color }) => color};
  padding: 10px 12px;
  color: ${({ fontcolor }) => fontcolor};
  width: ${({ size }) => size};
  outline: none;
  cursor: pointer;
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    opacity: .95;
    transform: scale(1.02); 
    box-shadow: 0 0 8px ${({ color }) => color};
  }
`;