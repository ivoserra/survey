import styled from "styled-components";
import "./PageProgressBar.scss";

const Container = styled.div`
  height: 15px;
  width: 100%;
  position: relative;
`;

const BaseBox = styled.div`
  height: 14px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border: 1px solid #707070;
  border-radius: 20px;
  opacity: 1;
  background: #0d0d0d 0% 0% no-repeat padding-box;
`;

const Progress = styled(BaseBox)`
  height: 14px;
  width: ${({ percent }) => percent}%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-top-right-radius: ${(props) =>
    props.percent === 100 ? "20px" : "0px"};
  border-bottom-right-radius: ${(props) =>
    props.percent === 100 ? "20px" : "0px"};
`;

export default function PageProgressBar(props) {
  const { index, length } = props;

  const percent = (100 / length) * index;

  return (
    <section className="Progress-bar">
      <section className="progress-text">
        <p>
          Question {index} OUT OF {length}
        </p>
      </section>

      <Container>
        <BaseBox />
        <Progress percent={percent} />
      </Container>
    </section>
  );
}
