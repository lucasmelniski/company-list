import React from "react";
import UsersPage from "../pages/usersPage";
import Header from "./header/header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <UsersPage />
    </>
  );
};

export default App;
