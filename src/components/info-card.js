import { Card, Col, Text, Row, Button } from "@nextui-org/react";
import classes from "@/styles/Home.module.css";

const InfoCard = (props) => {
  const { title, label, imageUrl, aNumber } = props;
  return (
    <Card className={classes.mycard}>
      <Card.Header>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {label}
          </Text>
          <Text h4 color="white">
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image src={imageUrl}></Card.Image>
      <Card.Footer className={classes.myfooter} isBlurred>
        <Row className={classes.myrow}>
          <Col>
            <Text color="#d1d1d1" size={16}>
              {aNumber} hours of exp
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="primary">
                <Text
                  size={12}
                  color="inherit"
                  transform="uppercase"
                  weight="bold"
                >
                  Subscribe now!
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default InfoCard;
