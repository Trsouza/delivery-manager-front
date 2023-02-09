//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers, roleUser } from "../../services/user-service";
import { IUser } from '../../interfaces/IUser';

export function Home() {
  //const navigate = useNavigate();

  const [users, setUsers] = useState<any>();

  useEffect(() => {

    roleUser().then(data => {
      setUsers([...data])
      console.log(data)
    })
    .catch(error => {
          //console.log(error)
    })

    getUsers().then(data => {
      setUsers([...data])
      console.log(data)
    })
    .catch(error => {
          //console.log(error)
    })

  }, []);

  return (
    <>
      <div className="tabs">
        <header>
          <h1 data-testid={"title"}>Home</h1>
          {users && users.map((user: IUser ) => {
            return (
                <p key={user.id}>{user.name}</p>
              )
          }
          )}
        </header>
      </div>
    </>
  );
}
