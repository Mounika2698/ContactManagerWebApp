import { Container, Navbar, Brand, Nav } from "react-bootstrap";
import ProfileIcon from "../components/user.svg";

function Header() {
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#">Contact Manager </Navbar.Brand>
            <Nav className="header-logo-img me-auto">
              <img src={ProfileIcon} alt="profile" width="32px" height="32px" />
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Header;
