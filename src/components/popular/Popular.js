import "./popular.css";
import first from "../../images/popular/1.png";
import second from "../../images/popular/2.png";
import third from "../../images/popular/3.png";
import fourth from "../../images/popular/4.png";
import starWhite from "../../images/popular/Star-white.png";
import starYellow from "../../images/popular/Star-yellow.png";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Popular = () => {
  return (
    <>
      <div className="popular">
        <Container className="container">
          <h2>Popular Dishes</h2>
          {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
          <div className="card-wrapper">
            <Card className="card-each text-center">
              <Card.Img src={first} />
              <Card.Body>
                <Card.Title>Barbecue Shish kebab Shashlik Skewer</Card.Title>
                <Card.Text>
                  <div className="img-wrapper">
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starWhite}></img>
                  </div>
                  <p className="dollar">$12.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center card-each">
              <Card.Img src={second} />
              <Card.Body>
                <Card.Title>Barbecue Shish kebab Shashlik Skewer</Card.Title>
                <Card.Text>
                  <div className="img-wrapper">
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starWhite}></img>
                  </div>
                  <p className="dollar">$12.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center card-each">
              <Card.Img src={third} />
              <Card.Body>
                <Card.Title>Barbecue Shish kebab Shashlik Skewer</Card.Title>
                <Card.Text>
                  <div className="img-wrapper">
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starWhite}></img>
                  </div>
                  <p className="dollar">$12.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center card-each">
              <Card.Img src={fourth} />
              <Card.Body>
                <Card.Title>Barbecue Shish kebab Shashlik Skewer</Card.Title>
                <Card.Text>
                  <div className="img-wrapper">
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starYellow}></img>
                    <img alt="" src={starWhite}></img>
                  </div>
                  <p className="dollar">$12.00</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Popular;
