//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers, roleUser } from "../../services/user-service";

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
          <h1 data-testid={"title"}>Tathiane</h1>
          {JSON.stringify(users)}
        </header>
      </div>
    </>
  );
}
