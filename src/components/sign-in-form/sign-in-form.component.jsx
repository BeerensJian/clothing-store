import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  SignInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await SignInAuthUserWithEmailAndPassword(
        data.get("email"),
        data.get("password")
      );
      console.log(response);
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
    <div className="sign-up-container">
      <h2>Have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput label="Email" type="email" required name="email" />
        <FormInput label="Password" type="password" required name="password" />

        <div className="button-group">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
