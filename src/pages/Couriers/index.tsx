//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContextAuth } from "../../context/auth/useContextAuth";
import { getUsers } from "../../services/user-service";
import { IUser } from '../../interfaces/IUser';

export function Couriers () {
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
      <div className="tabs">
        <header>
          <h1 data-testid={"title"}>Couriers  - {user?.name  }--- {signed.toString()}</h1>
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
