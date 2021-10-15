import React from 'react';
import Box from '../../components/box';
import { Title } from './styles';

interface HomeProps {
  title: string,
}

const Home: React.FC<HomeProps> = ({ title }) => { 
  return (
    <Box>
      <Title>
        {title}
      </Title>
    </Box>
  )
}

Home.defaultProps = {
  title: 'Welcome back!'
}

export default Home;