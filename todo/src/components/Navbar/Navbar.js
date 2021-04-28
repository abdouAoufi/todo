import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <Container>
          <InnerContainer>
            <div>
              <Element href="">
                <Logo src={menu} onClick={this.props.clickToggle} />
              </Element>
              <RouterLink to="/">
                <Logo src={logo} />
              </RouterLink>
            </div>
            <SearchContainer>
              <SearchInpuBar
                type="text"
                placeholder="Search for notes to-do's ..."
              />
              <IconHolder>
                <SearchIcon />
              </IconHolder>
            </SearchContainer>
            <LinkHolder>
              {/* <Link href="/">Get started</Link>
              <Link href="/"> features</Link> */}
              {this.props.isAuth ? (
                <RouterLink to="/logout">Log out</RouterLink>
              ) : (
                <div style={{ display: "inline" }}>
                  <RouterLink to="/signup">Sign Up</RouterLink>
                  <RouterLink to="/login">Login</RouterLink>
                </div>
              )}
            </LinkHolder>
          </InnerContainer>
        </Container>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(Navbar);

const Container = styled.nav`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  place-items: center;
  z-index: 500;
  box-shadow: 0px 5px 44px 2px rgba(0, 0, 0, 0.117);
`;

const InnerContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  place-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 30px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 450px;
  height: 35px;
  background-color: #e2f3f5;
`;

const SearchInpuBar = styled.input`
  border: none;
  background-color: inherit;
  flex: 0.9;
  padding-left: 8px;
  font-size: 1rem;
  outline: none;
  :selection {
    outline: none;
  }
`;

const IconHolder = styled.div`
  flex: 0.1;
  display: grid;
  place-items: center;
  height: 100%;
  :hover {
    background-color: #eee;
  }
`;

const LinkHolder = styled.div`{
  a {
    color : balck;
    font-weight : 600;
    margin-right : 12px;
  }
}`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  margin-right: 1rem;
  font-weight: 500;
`;

const Element = styled.div`
  display: inline;
  cursor: pointer;
  margin-right: 1rem;
`;
