import NextButton from "../../components/Buttons/NextButton";
import AnimatePage from "../../components/Animation/GlobalAnimation";

export default function Error() {
  return (
    <AnimatePage>
      <section className="Page">
        <section className="page-inner">
          <h3>... ups something went wrong !</h3>
          <h2>The question does not exist</h2>

          <NextButton error="error" />
        </section>
      </section>
    </AnimatePage>
  );
}
