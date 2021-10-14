import React from 'react';
import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { getUsersData } from '../../sevices/queries/users';

const ReviewList: React.FC = () => {
  const { error, loading, data } = useQuery(getUsersData);
  const [users, setUsers] = useState([]);

  useEffect(() => { data && setUsers(data) }, [data]);

  console.log(users)

  return (
    <div>
      
    </div>
  )
}

export default ReviewList;