import {
  CreateAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

const SignUpForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    if (data.get("password") !== data.get("confirmPassword")) {
      throw new Error("Passwords do not match");
    }

    try {
      const { user } = await CreateAuthUserWithEmailAndPassword(
        data.get("email"),
        data.get("password")
      );
      await createUserDocumentFromAuth(user, {
        displayName: data.get("displayName"),
      });

      form.reset();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("The email is already in use, cannot create new account");
      }
      console.log("There was an error", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account yet?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
        />
        <FormInput label="Email" type="email" required name="email" />
        <FormInput label="Password" type="password" required name="password" />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
