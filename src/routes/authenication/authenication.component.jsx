import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenicationContainer } from "./authenication.styles.jsx";
const Authentication = () => {
  return (
    <AuthenicationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenicationContainer>
  );
};
export default Authentication;
