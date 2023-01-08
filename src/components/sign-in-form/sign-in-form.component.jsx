import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonGroup } from "./sign-in-form.styles";
import { AuthenicationContainer } from "../sign-up-form/sign-up-form.styles";
import {
  SignInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const { user } = await SignInAuthUserWithEmailAndPassword(
        data.get("email"),
        data.get("password")
      );
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Incorrect email");
          break;
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        default:
          break;
      }

      console.error("There was an error signing in", error.code);
    }
  };

  return (
    <AuthenicationContainer>
      <h2>Have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput label="Email" type="email" required name="email" />
        <FormInput label="Password" type="password" required name="password" />

        <ButtonGroup>
          <Button type="submit">Sign In</Button>

          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonGroup>
      </form>
    </AuthenicationContainer>
  );
};
export default SignInForm;
