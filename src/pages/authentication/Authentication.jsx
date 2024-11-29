import React from "react";
import AuthenticationComponent from "../../components/authenticationComponent/AuthenticationComponent";
import Welcome from "../../components/welcome/Welcome";
import ForgetPassword from "../../components/forgetPassword/ForgetPassword";
import RegeneratePassword from "../../components/regeneratePassword/RegeneratePassword";

const Authentication = () => {
  return (
    <>
      <AuthenticationComponent />
      <Welcome />
      <ForgetPassword />
      <RegeneratePassword />
    </>
  );
};

export default Authentication;
