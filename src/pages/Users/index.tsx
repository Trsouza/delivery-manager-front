//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContextAuth } from "../../context/auth/useContextAuth";
import { getUsers } from "../../services/user-service";
import { IUser } from '../../interfaces/IUser';
import { UserTable } from '../../components/Tables/User';

export function Users() {
  //const navigate = useNavigate();

  const { user, signed } = useContextAuth();
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    getUsers().then(data => {
      setUsers([...data])
      console.log(data, " d")
    })
      .catch(error => {
        //console.log(error)
      })

  }, []);


  return (
    <>

      <UserTable users={users} />

    </>
  );
}
