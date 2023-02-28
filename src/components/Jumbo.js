import { Grid, Col, Text, Button } from "@nextui-org/react";
import classes from "@/styles/Home.module.css";

const Jumbo = () => {
  return (
    <Grid.Container justify="center" className={classes.jumbo}>
      <Grid xs={12} sm={6} alignItems="center" className={classes.jumbogrid}>
        <Col>
          <Text className={classes.jumbotext} weight={"bold"} size={65}>
            Build your dreams
          </Text>
          <Text className={classes.jumbotext} weight={"bold"} size={65}>
            with our tools
          </Text>
          <Button
            size="md"
            shadow
            color="gradient"
            className={classes.jumbobutton}
          >
            Join our team
          </Button>
        </Col>
      </Grid>
    </Grid.Container>
  );
};

export default Jumbo;
