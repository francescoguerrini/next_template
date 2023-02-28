import React, { useState } from "react";
import { Modal, Button, Image, Text, Link } from "@nextui-org/react";

const AModal = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto flat color="error" onPress={handler}>
        Open modal
      </Button>
      <Modal noPadding open={visible} onClose={closeHandler}>
        <Modal.Header
          css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
        >
          <Text color="#363449">
            Photo by{" "}
            <Link
              color
              rel="noopener noreferrer"
              target="_blank"
              href="https://littlevisuals.co/images/made-in.jpg"
            >
              Annie Spratt
            </Link>{" "}
            on{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://littlevisuals.co/images/made-in.jpg"
            >
              Unsplash
            </Link>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            showSkeleton
            src="https://littlevisuals.co/images/made-in.jpg"
            width={400}
            height={490}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AModal;
