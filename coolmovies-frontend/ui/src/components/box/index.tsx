import React from 'react';
import { BoxContainer, BoxContent } from './styles';

interface BoxProps {
  backgroundImage?: string,
  withoutBackground?: boolean
}

const Box: React.FC<BoxProps> = ({ children, backgroundImage = '', withoutBackground = false}) => { 
  return (
    <BoxContainer background={backgroundImage} withoutBackground={withoutBackground}>
      <BoxContent>
        {children}
      </BoxContent>
    </BoxContainer>
  )
}

export default Box;