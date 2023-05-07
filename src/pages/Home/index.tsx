import { useContextAuth } from "../../context/auth/useContextAuth";

export function Home() {

  const { user, signed } = useContextAuth();

  return (
    <>
      <div className="">
        <header>
          <h1 data-testid={"title"}>Home  - {user?.name}--- {signed.toString()}</h1>
        </header>
      </div>
    </>
  );
}
