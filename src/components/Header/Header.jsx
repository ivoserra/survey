import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import "./Header.scss";

export default function Header(props) {
  const { user } = useContext(UserContext);

  if (props.path === "question0") {
    return null;
  }

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
