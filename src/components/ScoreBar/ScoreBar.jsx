import styled from "styled-components";

const Container = styled.div`
margin-bottom:50px;
height:6.05vh;
width:33.5vw;
position: relative;
@media screen and (min-width:320px) and (max-width:1024px){
width:50%;
}
`;

const BaseBox = styled.div`
  height: 53px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border: 1px solid #ffffff;
  opacity: 1;
  background: #0d0d0d 0% 0% no-repeat padding-box;
`;

const Progress = styled(BaseBox)`
  height: 53px;
  width: ${({ percent }) => percent}%;
  background: #ffffff 0% 0% no-repeat padding-box;
`;

export default function ScoreBar(props) {
  const { percent } = props;

  return (
    <Container className="scoreBar">
      <BaseBox />
      <Progress percent={percent} />
    </Container>
  );
}
