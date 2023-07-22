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
