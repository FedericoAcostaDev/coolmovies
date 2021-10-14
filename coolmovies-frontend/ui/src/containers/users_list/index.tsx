import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getUsersData } from '../../sevices/queries/users';

function UsersList(){
  const { error, loading, data } = useQuery(getUsersData);
  const [users, setUsers] = useState([]);

  useEffect(() => { data && setUsers(data) }, [data]);

  console.log(users)

  return (
    <div>
      
    </div>
  )
}

export default UsersList;