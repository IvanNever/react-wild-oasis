import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const {
    isPending: isUserLoading,
    isAuthenticated,
    isFetching,
    fetchStatus,
  } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isUserLoading && !isFetching) {
      navigate("/login");
    }
  }, [isAuthenticated, isUserLoading, isFetching, navigate]);

  if (isUserLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
