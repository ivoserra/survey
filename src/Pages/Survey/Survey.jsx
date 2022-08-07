import { useContext } from "react";
import { useParams } from "react-router-dom";
import AnimatePage from "../../components/Animation/GlobalAnimation";

import Header from "../../components/Header/Header";
import PageProgressBar from "../../components/PageProgressBar/PageProgressBar.jsx";
import Select from "../../components/Select/Select.jsx";
import Error from "../../components/Error/Error";
import { UserContext } from "../../Context/UserContext";

export default function Survey() {
  const { api } = useContext(UserContext);
  const { questionPath } = useParams();


  const data = api.question.find((item) => item.path === questionPath);

  if (!data) {
    return <Error />;
  }

  const index = api.question.findIndex((item) => item.path === data.path);
  const length = api.question.length - 1;

  return (
    <AnimatePage>
      <section className="Page">
        <section className="page-inner">
          <Header path={data.path} />
          <h3>{data.name}</h3>
          <h2>{data.title}</h2>

          {data.options.length > 0 && (
            <Select options={data.options} path={data.path} />
          )}

          {data.path === "question0" ? null : (
            <PageProgressBar index={index} length={length} />
          )}
        </section>
      </section>
    </AnimatePage>
  );
}
