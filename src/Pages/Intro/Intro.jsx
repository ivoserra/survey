import { useContext } from "react";
import AnimatePage from "../../components/Animation/GlobalAnimation";
import BackButton from "../../components/Buttons/BackButton";
import NextButton from "../../components/Buttons/NextButton";
import { UserContext } from "../../Context/UserContext";

export default function Intro() {
  const { setUser, api } = useContext(UserContext);

  const data = api.survey;

  return (
    <AnimatePage>
      <section className="Page">
        <section className="page-inner">
          <h3>{data.name}</h3>
          <h2>{data.title}</h2>
          <section className="Select-section">
            <input
              onChange={(e) => setUser(e.target.value)}
              placeholder="John Doe"
            ></input>
          </section>

          <NextButton nextPage="question1" />
          <BackButton welcome="welcome" />
        </section>
      </section>
    </AnimatePage>
  );
}
