import { ButtonStyleProps } from '../components/button';

export interface ThemeBase {
  palette?: {
    color?: string,
    background?: string,
    fontFamily?: string 
  },
  button?: ButtonStyleProps,
  link?: ButtonStyleProps
}
