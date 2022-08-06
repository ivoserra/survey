import { useContext } from "react";
import { useParams } from "react-router-dom";
import AnimatePage from "../../components/Animation/GlobalAnimation";

import Header from "../../components/Header/Header";
import PageProgressBar from "../../components/PageProgressBar/PageProgressBar.jsx";
import Select from "../../components/Select/Select.jsx";
import { UserContext } from "../../Context/UserContext";


export default function Question() {
  const { api }=useContext(UserContext)
  const { questionPath } = useParams();
  console.log(questionPath);

  const data = api.question.find((item) => item.path === questionPath);

  const index = api.question.findIndex((item) => item.path === data.path) + 1;
  const length = api.question.length;

  return (
    <AnimatePage>
      <section className="Page">
        <section className="page-inner">
          <Header />
          <h3>{data.name}</h3>
          <h2>{data.title}</h2>

          {data.options.length > 0 && (
            <Select options={data.options} path={data.path} />
          )}

          <PageProgressBar index={index} length={length} />
        </section>
      </section>
    </AnimatePage>
  );
}
