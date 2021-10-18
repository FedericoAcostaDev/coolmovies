import React from 'react';
import Box from '../../components/box';
import Button from '../../components/button';
import Card from '../../components/card';

import { ButtonsBox } from './styles';
import { BsFillPencilFill } from 'react-icons/bs';
import { FaListAlt } from 'react-icons/fa';

interface HomeProps {
  title: string,
  text: string,
  subtitle?: string
}

const Home: React.FC<HomeProps> = ({ title, text, subtitle }) => {
  const consoleLog = () => {
    console.log('oi')
  }

  return (
    <Box>
      <Card title={title} text={text} subtitle={subtitle}>
        <ButtonsBox>
          <Button
            text="Start a review"
            link="/review"
            Icon={BsFillPencilFill}
            color="#2ECC68"
            border="2px solid #00B242"
          />
          <Button
            text="All reviews"
            link="/all-reviews"
            Icon={FaListAlt}
            onClick={consoleLog}
            color="#8B1044"
            border="2px solid #6C0E39"
          />
        </ButtonsBox>
      </Card>
    </Box>
  )
}

Home.defaultProps = {
  title: 'Welcome back!',
  text: "Have you been watching movies lately? Maybe it's time for you to share with us. Why don't you start writing a new review?",
  subtitle: "It's been a while!"
}

export default Home;