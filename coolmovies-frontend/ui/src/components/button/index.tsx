import React from 'react';
import { IconType } from 'react-icons';
import { ButtonContainer, LinkContainer } from './styles';

interface ButtonProps {
  text: string,
  color?: `#${string}`,
  fontColor?: `#${string}`,
  border?: `${number}px ${string} #${string}`,
  radius?: `${number}px`,
  size?: 'sm' | 'md' | 'lg',
  Icon?: IconType,
  onClick?: () => void,
  link?: string
}

const Button: React.FC<ButtonProps> = ({ text, size = 'lg', border, radius, fontColor, link, onClick, color, Icon }) => {  
  const renderIcon = () => Icon && <Icon />;

  const buttonWidth = {
    sm: 'auto',
    md: '50%',
    lg: '100%'
  };

  const buttonSize = buttonWidth[size];

  const instanceProps = {
    size: buttonSize,
    onClick: onClick,
    border: border,
    color: color,
    radius: radius,
    fontColor: fontColor
  }

  return (
    <>
    { link ? 
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