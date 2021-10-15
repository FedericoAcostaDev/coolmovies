import React from 'react';
import { BoxContainer, BoxContent } from './styles';

interface BoxProps {
  background?: string
}

const Box: React.FC<BoxProps> = ({ children, background }) => { 
  return (
    <BoxContainer>
      <BoxContent>
        { children }
      </BoxContent>
    </BoxContainer>
  )
}

export default Box;