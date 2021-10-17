import React from 'react';
import { CardContainer, CardContent, CardImage, CardText, CardTitle, CardSubtitle } from './styles';

interface CardProps {
  title: string,
  image?: string,
  text: string,
  subtitle?: string,
  hideImage?: boolean
}

const Card: React.FC<CardProps> = ({ children, title, image, text, subtitle, hideImage}) => {
  const isImageVisible = !hideImage;

  return (
    <CardContainer>
      <CardContent>
        {isImageVisible && <CardImage src={image} />}
        <CardTitle>
          {title}
        </CardTitle>
        {subtitle && <CardSubtitle> {subtitle} </CardSubtitle>}
        <CardText>
          {text}
        </CardText>
        {children}
      </CardContent>
    </CardContainer>
  )
}

export default Card;