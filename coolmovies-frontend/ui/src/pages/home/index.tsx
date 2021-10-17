import React from 'react';
import Box from '../../components/box';
import Card from '../../components/card';

interface HomeProps {
  title: string,
  text: string,
  subtitle?: string
}

const Home: React.FC<HomeProps> = ({ title, text, subtitle }) => { 
  return (
    <Box>
      <Card title={title} text={text} subtitle={subtitle} />
    </Box>
  )
}

Home.defaultProps = {
  title: 'Welcome back!',
  text: "Have you been watching movies lately? Maybe it's time for you to share with us. Why don't you start writing a new review?",
  subtitle: "It's been a while!"
}

export default Home;