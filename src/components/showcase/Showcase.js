import "./showcase.css";
import shashlik from "../../images/shashlik.png";
import tayoq from "../../images/tayoq.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Showcase = () => {
  return (
    <>
      <div className="showcase">
        <Container className="container">
          <div className="left">
            <h5>Chase the new Flavour</h5>
            <h1>The key to Fine dining</h1>
            <p>
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus{" "}
            </p>
            <Button className="showcase-btn">Explore Menu</Button>{" "}
          </div>
          <div className="right">
            <img alt="" src={shashlik} className="shashlik"></img>
            <img alt="" src={tayoq} className="tayoq"></img>
            <span className="scrol">Scroll</span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Showcase;
