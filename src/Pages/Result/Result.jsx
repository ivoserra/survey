import { useContext } from "react";
import AnimatePage from "../../components/Animation/GlobalAnimation";
import NextButton from "../../components/Buttons/NextButton";
import ScoreBar from "../../components/ScoreBar/ScoreBar";
import { UserContext } from "../../Context/UserContext";

export default function Result() {
  const { user, score } = useContext(UserContext);

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
            <NextButton welcome="welcome" />
          </section>
        </section>
      </section>
    </AnimatePage>
  );
}
