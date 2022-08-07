import { useContext } from "react";
import AnimatePage from "../../components/Animation/GlobalAnimation";
import NextButton from "../../components/Buttons/NextButton";
import { UserContext } from "../../Context/UserContext";

export default function Welcome() {
  const { api } = useContext(UserContext);

  const data = api.welcome;

  return (
    <AnimatePage>
      <section className="Page">
        <section className="page-inner">
          <h1>{data.title}</h1>
          <p className="lorem">{data.text}</p>
          <NextButton nextPage="question0" />
        </section>
      </section>
    </AnimatePage>
  );
}
