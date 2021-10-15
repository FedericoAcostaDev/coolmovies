import React from 'react';
import { BoxContainer, BoxContent } from './styles';

interface BoxProps {
  Component?: React.FC,
  background?: string
}

const Box: React.FC<BoxProps> = ({ Component, background, ...props }) => {
  const renderWrappedComponent = () => Component && <Component {...props} />;
  
  return (
    <BoxContainer>
      <BoxContent>
        { renderWrappedComponent() }
      </BoxContent>
    </BoxContainer>
  )
}

export default Box;