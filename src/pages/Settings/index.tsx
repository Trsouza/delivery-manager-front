//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContextAuth } from "../../context/auth/useContextAuth";

export function Settings () {
  //const navigate = useNavigate();

  const { user, signed } = useContextAuth();

  return (
    <>
      <div className="tabs">
        <header>
          <h1 data-testid={"title"}>Setting {user?.name}</h1>
          
        </header>
      </div>
    </>
  );
}
