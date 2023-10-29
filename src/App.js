import React, { useState } from 'react';
import styled from 'styled-components';
import loginSvg from './assets/login.svg'; // Adjust the path as needed
import eye from './assets/view.png'
import hide from './assets/hide.png'

const LoginPage = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const RightPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 55%;
  }
`;

const RightContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const InputLabel = styled.label`
  width: 100%;
  margin: 8px 0;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 768px) {
    width: 90%;
  }
`;

const PasswordField = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: 92%;
  }
`;

const PasswordInputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 10px 5px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: 'Poppins', sans-serif;
  
`;

const PasswordToggle = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 80%; /* Adjust the width as needed */
  padding: 12px;
  background-color:  #00539C;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  margin-top: 15px;
  align-self: center; /* Center the button with respect to the parent */
  font-family: 'Poppins', sans-serif;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const RegisterLink = styled.p`
  text-align: left;
  margin-top: 10px;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

const CheckboxesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const CheckBoxLabel = styled.label`
  flex: 1;
  font-family: 'Poppins', sans-serif;
`;

const CheckBoxInput = styled.input`
  margin-right: 5px;
`;



const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginPage>
      <ContentWrapper>
        <LeftPanel>
          <img
            src={loginSvg}
            alt="Company Logo"
            style={{ width: '65%', height: '300px' }}
          />
        </LeftPanel>
        <RightPanel>
          <Title>Login</Title>
          <RightContentContainer>
            <InputLabel htmlFor="username">Login ID</InputLabel>
            <InputField
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputLabel htmlFor="password">Password</InputLabel>
            <PasswordField>
              <PasswordInputContainer>
                <PasswordInput
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordToggle onClick={togglePasswordVisibility}>
                  {showPassword ? 
                    <img src={eye} alt="pass logo" style={{ width: '20px', height: '20px' }}/> 
                    : 
                    <img src={hide} alt="pass Logo" style={{ width: '20px', height: '20px' }}/>}
                </PasswordToggle>
              </PasswordInputContainer>
            </PasswordField>
            <CheckboxesContainer>
              <CheckBoxLabel>
                 <CheckBoxInput type="checkbox" id="rememberMe"  />
                    Remember me
                  </CheckBoxLabel>
              <CheckBoxLabel style={{ color: '#FF69B4', marginLeft: '38%' }}>
                  Forgot Password.?
              </CheckBoxLabel>
            </CheckboxesContainer>
            <CheckboxesContainer>
              <CheckBoxLabel>
                <CheckBoxInput type="checkbox" id="acceptTerms" />
                agree to <span style={{color: '#FF69B4'}}>terms & conditions</span>
              </CheckBoxLabel>
            </CheckboxesContainer>
            <SubmitButton>Login</SubmitButton>
            <RegisterLink>Don't have an account? <span style={{color: '#FF69B4'}}> Register Here</span> </RegisterLink>
          </RightContentContainer>
        </RightPanel>
      </ContentWrapper>
    </LoginPage>
  );
};

export default App;
