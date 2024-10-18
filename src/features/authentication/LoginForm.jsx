import { useState } from "react";
import Button from "../../ui/Button.jsx";
import Form from "../../ui/Form.jsx";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical.jsx";
import SpinnerMini from "../../ui/SpinnerMini.jsx";
import { useLogin } from "./useLogin.js";

function LoginForm() {
  const [email, setEmail] = useState("demo-user@mail.com");
  const [password, setPassword] = useState("H4LRRLU3zQej7rkJ");
  const { login, isPending: isLoginLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">
          {!isLoginLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
