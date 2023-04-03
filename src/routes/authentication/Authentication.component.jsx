import SignUpForm from "../../components/sign-up/sign-up-form.components";
import SignInForm from "../../components/sign-in/sign-in-form.component";

import "./authentication.style.scss";

const Authentiaction = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentiaction;
