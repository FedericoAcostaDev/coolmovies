import React from 'react';
import Box from '../../components/box';
import { Title } from './styles';

interface ProfileProps {
  title: string,
}

const Profile: React.FC<ProfileProps> = ({ title }) => { 
  return (
    <Box>
      <Title>
        {title}
      </Title>
    </Box>
  )
}

Profile.defaultProps = {
  title: 'Welcome back!'
}

export default Profile;