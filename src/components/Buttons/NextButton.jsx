import { Link } from "react-router-dom";
import { ArrowCircleRight } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

import "./NextButton.scss";

export default function NextButton(props) {
  const { setAnimation } = useContext(UserContext);

  function Animate() {
    setAnimation({
      initial: { opacity: 0, x: 1000 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -1000 },
    });
  }

  if (props.survey) {
    return (
      <Link to="/survey" className="Button btn-start" onClick={Animate}>
        <p>START THE SURVEY</p>
        <ArrowCircleRight className="icon" />
      </Link>
    );
  }

  if (props.finish) {
    return (
      <Link to="/result" className="Button btn-next" onClick={Animate}>
        <p>FINISH</p>
        <ArrowCircleRight className="icon" />
      </Link>
    );
  }

  if (props.error) {
    return (
      <Link to="/" className="Button btn-next" onClick={Animate}>
        <p>MAIN PAGE</p>
        <ArrowCircleRight className="icon" />
      </Link>
    );
  }

  return (
    <Link
      to={`/survey/${props.nextPage}`}
      className="Button btn-next"
      onClick={Animate}
    >
      <p>NEXT</p>
      <ArrowCircleRight className="icon" />
    </Link>
  );
}
