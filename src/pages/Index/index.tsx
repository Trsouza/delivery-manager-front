//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/user-service";
import { IUser } from '../../interfaces/IUser';
import { useContextAuth } from "../../context/auth/useContextAuth";

export function Index () {
  //const navigate = useNavigate();

  const [users, setUsers] = useState<any>();
  const { user, signed } = useContextAuth();

  // useEffect(() => {

  //   getUsers().then(data => {
  //     setUsers([...data])
  //     console.log(data, " d")
  //   })
  //     .catch(error => {
  //       //console.log(error)
  //     })

  // }, []);

  return (
    <>
      <div className="tabs">
        <header>
          <h1 data-testid={"title"}>Index {user?.name}</h1>
          {users?.length > 0 && users?.map((user: IUser) => {
            console.log(users?.length, "a")
            return (
              <div key={user?.id}>
                <p>{user.name} </p>
              </div>
            )
          }
          )}
        </header>
      </div>
    </>
  );
}
