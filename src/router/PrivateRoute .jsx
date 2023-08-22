import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  const user = useSelector((state) => state.user.currentUser);
  const isLoading = useSelector((state) => state.user.isLoading); // Replace with your loading state

  if (isLoading) {
    // You can return a loading indicator or any desired content here
    return <div>Loading...</div>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
