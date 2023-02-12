//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContextAuth } from "../../context/auth/useContextAuth";
import { getUsers } from "../../services/user-service";
import { IUser } from '../../interfaces/IUser';

export function Home() {
  //const navigate = useNavigate();

	const { user, signed } = useContextAuth();

  return (
    <>
      <div className="">
        <header>
          <h1 data-testid={"title"}>Home  - {user?.name  }--- {signed.toString()}</h1>
        </header>
      </div>
    </>
  );
}
