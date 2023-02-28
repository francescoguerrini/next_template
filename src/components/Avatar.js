import { Avatar, Grid, Image } from "@nextui-org/react";
import classes from "@/styles/Home.module.css";

const MyAvatar = () => {
  return (
    <div className={classes.myclass2}>
      <Grid>
        <Avatar
          src="https://littlevisuals.co/images/felagi.jpg"
          css={{ size: "$20" }}
        />
      </Grid>
      <Grid>
        <Image
          width={170}
          height={130}
          objectFit="fill"
          src="https://littlevisuals.co/images/made-in.jpg"
          className={classes.myavatar}
        />
      </Grid>
    </div>
  );
};

export default MyAvatar;
