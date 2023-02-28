import { Navbar, Text, Link } from "@nextui-org/react";

const MyNavbar = () => {
  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
  ];

  return (
    <Navbar isCompact variant="sticky">
      <Navbar.Brand>
        <Text h3>MyCompanyLogo</Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link isActive href="#">
          About Us
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Contacts</Navbar.Link>
      </Navbar.Content>
      {/* <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content> */}
      <Navbar.Toggle aria-label="toggle navigation" />
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item} alignItems="flex-end">
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
