import { useContextAuth } from "../../context/auth/useContextAuth";

export function Settings() {

  const { user } = useContextAuth();

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
