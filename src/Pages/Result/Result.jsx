import { useContext } from "react";
import { Link } from "react-router-dom";
import AnimatePage from "../../components/Animation/GlobalAnimation";
import ScoreBar from "../../components/ScoreBar/ScoreBar";
import { UserContext } from "../../Context/UserContext";


export default function Result() {
  const { user, score, setScore } = useContext(UserContext);

  function FinalScore(score) {
    const obj = score;
    const sum = Object.values(obj).reduce((pre, cur) => pre + Number(cur), 0);
    const result = Math.floor(sum / 0.16);
    return result;
  }

  return (
    <AnimatePage>
      <section className="Page">
        <section className="page-inner">
          <h3>Result</h3>
          <section className="Result-user">
            <h2>Your Score</h2>

            <h4>
              <span>{"{"}</span>
              {user}
              <span>{"}"}</span>
            </h4>
          </section>

          <section className="Result-score">
            <h2 className="result">{FinalScore(score)}</h2>
            <p className="points">Points</p>
          </section>

          <ScoreBar percent={FinalScore(score)} />

          <section>
            <Link
              to="/"
              onClick={(e) => setScore({})}
              className="Button btn-next"
            >
              <p>START NEW</p>
            </Link>
          </section>
        </section>
      </section>
    </AnimatePage>
  );
}
