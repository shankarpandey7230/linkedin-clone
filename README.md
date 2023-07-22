#npx create-react-app@latest linkedin-clone

Clear up the project

#setting up the global style

#create Login Component

import styled from "styled-components";

import React from "react";

const Login = (props) => {
return (
<Container>

<Nav>
<a href="/">
<img src="/images/login-logo.svg" alt="" />
</a>
</Nav>
</Container>
);
};
export default Login

#Login Styled Components
const Container = styled.div` padding: 0px;`;
const Nav = styled.div`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;

& > a {
width: 135px;
height: 34px;
@media (max-width: 768px) {
padding: 0 5px;
}
}
`;

# Add Join Now button

        <div>
          <Join>Join Now</Join>
        </div>

# styled components

const Join = styled.a`  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }`;

# section

Add the following codes in Login.js

  <Section>
        <Hero>
          <h1>Welcome to Linkedin Community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
      </Section>
  # For styled components
  const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

img {
/_ z-index: -1; _/
width: 700px;
height: 670px;
position: absolute;
bottom: -2px;
right: -150px;
@media (max-width: 768px) {
top: 230px;
width: initial;
position: initial;
height: initial;
}
}
`;

# add google component

 <Form>
          <Google>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>

# styled components

const Form = styled.div`  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }`;
const Google = styled.button`
display: flex;
justify-content: center;
background-color: #fff;
align-items: center;
height: 56px;
width: 100%;
border-radius: 28px;
box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);

vertical-align: middle;
z-index: 0;
transition-duration: 167ms;
font-size: 20px;
color: rgba(0, 0, 0, 0.6);
&:hover {
background-color: rgba(207, 207, 207, 0.25);
color: rgba(0, 0, 0, 0.75);
}
`;

# For nested Routing use Outlet

# Add the following route in App.js

import Header from './components/Home';
import Home from './components/Header;

<Route path="/home" element={<Home />}>
<Route path="/home" element={<Header />}></Route>
</Route>

# Add and style navBar

import styled from "styled-components";

const Header = (props) => {
return (
<Container>
<Content>
<Logo>
<a href="/home">
<img src="/images/home-logo.svg" alt="" />
</a>
</Logo>
<Search>
<div>
<input type="text" placeholder="Search" />
</div>
<SearchIcon>
<img src="/images/search-icon.svg" alt="" />
</SearchIcon>
</Search>
<Nav>
<NavListWrap>
<NavList className="active">
<a>
<img src="/images/nav-home.svg" alt="" />
<span>Home</span>
</a>
</NavList>

            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                <img src="/images/user.svg" alt="" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>

              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>

);
};

const Container = styled.div`  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;`;

const Content = styled.div`  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;`;

const Logo = styled.span`  margin-right: 8px;
  font-size: 0px;`;

const Search = styled.div`  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }`;

const SearchIcon = styled.div`  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;`;

const Nav = styled.nav`  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }`;

const NavListWrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;

.active {
span:after {
content: "";
transform: scaleX(1);
border-bottom: 2px solid var(--white, #fff);
bottom: 0;
left: 0;
position: absolute;
transition: transform 0.2s ease-in-out;
width: 100%;
border-color: rgba(0, 0, 0, 0.9);
}
}
`;

const NavList = styled.li`
display: flex;
align-items: center;
a {
align-items: center;
background: transparent;
display: flex;
flex-direction: column;
font-size: 12px;
font-weight: 400;
justify-content: center;
line-height: 1.5;
min-height: 52px;
min-width: 80px;
position: relative;
text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }

}

&:hover,
&:active {
a {
span {
color: rgba(0, 0, 0, 0.9);
}
}
}
`;

const SignOut = styled.div`  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;`;

const User = styled(NavList)`
a > svg {
width: 24px;
border-radius: 50%;
}

a > img {
width: 24px;
height: 24px;
border-radius: 50%;
}

span {
display: flex;
align-items: center;
}

&:hover {
${SignOut} {
align-items: center;
display: flex;
justify-content: center;
}
}
`;

const Work = styled(User)`  border-left: 1px solid rgba(0, 0, 0, 0.08);`;

export default Header;
