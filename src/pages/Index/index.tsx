//import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IUser } from '../../interfaces/IUser';
import { useContextAuth } from "../../context/auth/useContextAuth";

export function Index() {

  const [users] = useState<any>();
  const { user } = useContextAuth();

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
