import { ThemeBase } from "./types";
import { BsPlusCircle } from 'react-icons/bs';

export const PrimaryTheme: ThemeBase = {
  palette: {
    color: '#F5F510',
    background: '#0B0108'
  },
  button: {
    color: '#D2A02C',
    fontColor: '#060603',
    border: '1px solid #E7E73C',
    radius: '8px',
    size: 'lg',
    Icon: BsPlusCircle
  },
  link: {
    color: '#AF4437',
    fontColor: '#FFF',
    border: '1px solid #903E34',
    radius: '8px',
    size: 'lg'
  }
}