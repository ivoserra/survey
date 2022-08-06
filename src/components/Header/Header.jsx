import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import "./Header.scss";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <section className="Header">
      <p>
        SURVEY FOR: <span>{"{{"}</span>
        {user}
        <span>{"}}"}</span>
      </p>
    </section>
  );
}
