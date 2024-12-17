import React, { useState } from "react";
import AuthenticationComponent from "../../components/authenticationComponent/AuthenticationComponent";
import Welcome from "../../components/welcome/Welcome";
import NotRegisteredYet from "../../components/notRegisterYet/NotRegisterYet";

const Authentication = () => {
  const [userExisted, setUserExisted] = useState(false);
  const [authenticatedComponent, setAuthenticatedComponent] = useState(true);

  return (
    <>
      {authenticatedComponent && (
        <AuthenticationComponent
          setUserExisted={setUserExisted}
          setAuthenticatedComponent={setAuthenticatedComponent}
        />
      )}
      {userExisted && (
        <Welcome
          setUserExisted={setUserExisted}
          setAuthenticatedComponent={setAuthenticatedComponent}
        />
      )}
    </>
  );
};

export default Authentication;
