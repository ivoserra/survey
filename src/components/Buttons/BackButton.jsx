import { Link } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

import "./BackButton.scss";

export default function BackButton(props) {
  const { setAnimation } = useContext(UserContext);

  function Animation() {
    setAnimation({
      initial: { opacity: 0, x: -1000 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 1000 },
    });
  }

  if (props.welcome) {
    return (
      <Link to="/" className="btn-back" onClick={Animation}>
        <ArrowLeft className="icon" />
        <p>BACK</p>
      </Link>
    );
  }

  if (props.survey) {
    return (
      <Link to="/survey" className="btn-back" onClick={Animation}>
        <ArrowLeft className="icon" />
        <p>BACK</p>
      </Link>
    );
  }

  return (
    <Link
      to={`/survey/${props.backPage}`}
      onClick={Animation}
      className="btn-back"
    >
      <ArrowLeft className="icon" />
      <p>BACK</p>
    </Link>
  );
}
