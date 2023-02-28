import { Button, Grid, Loading } from "@nextui-org/react";

const MyButton = () => {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Button shadow color="primary" auto>
          Primary
        </Button>
      </Grid>
      <Grid>
        <Button shadow color="secondary" auto>
          Secondary
        </Button>
      </Grid>
      <Grid>
        <Button auto color="success" rounded bordered>
          Success
        </Button>
      </Grid>
      <Grid>
        <Button disabled auto bordered color="primary" css={{ px: "$13" }}>
          <Loading color="currentColor" size="sm" />
        </Button>
      </Grid>
      <Grid>
        <Button bordered color="warning" auto>
          Warning
        </Button>
      </Grid>
      <Grid>
        <Button flat color="error" auto>
          Error
        </Button>
      </Grid>
      <Grid>
        <Button shadow color="gradient" auto>
          Gradient
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export default MyButton;
