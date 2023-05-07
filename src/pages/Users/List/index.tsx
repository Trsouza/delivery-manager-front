import { useEffect, useState } from "react";
import { getUsers } from "../../../services/user-service";
import { UserTable } from '../../../components/Tables/User';

export function UserList() {

  const [users, setUsers] = useState<any>();

  useEffect(() => {
    getUsers().then(data => {
      setUsers([...data])
    })
      .catch(error => {
      })

  }, []);


  return (
    <>

      <UserTable users={users} />

    </>
  );
}
