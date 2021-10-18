import React from 'react';
import { IconType } from 'react-icons';
import { ButtonContainer, LinkContainer } from './styles';

interface ButtonProps extends ButtonStyleProps {
  text: string,
  theme?: ButtonStyleProps,
  onClick?: () => void,
  link?: string
}

export interface ButtonStyleProps {
  color?: `#${string}`,
  fontColor?: `#${string}`,
  border?: `${number}px ${string} #${string}`,
  radius?: `${number}px`,
  size?: 'sm' | 'md' | 'lg',
  Icon?: IconType
}

const Button: React.FC<ButtonProps> = ({ text, size = 'lg', border, radius, fontColor, link, onClick, color, Icon, theme }) => {
  const IconComponent = Icon || theme?.Icon
  const renderIcon = () => IconComponent && <IconComponent />;

  const buttonWidth = {
    sm: 'auto',
    md: '50%',
    lg: '100%'
  };

  const sizeIndex = theme?.size || size;
  const buttonSize = buttonWidth[sizeIndex];

  const instanceProps = {
    size: buttonSize,
    onClick: onClick,
    border: theme?.border || border,
    color: theme?.color || color,
    radius: theme?.radius || radius,
    fontColor: theme?.fontColor || fontColor
  }

  return (
    <>
      {link ? 
        <LinkContainer to={link} {...instanceProps}>
          {renderIcon()}
          {text}
        </LinkContainer> : 
        <ButtonContainer {...instanceProps}>
          {renderIcon()}
          {text}
        </ButtonContainer>
      }
    </>
  )
}

Button.defaultProps = {
  color: '#1E90FF',
  border: '2px solid #4682B4',
  radius: '10px',
  fontColor: '#FFF'
}

export default Button;