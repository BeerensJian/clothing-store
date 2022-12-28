import {
  CreateAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
    <div>
      <h1>Create an account</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Display Name</label>
        <input type="text" required name="displayName" />

        <label htmlFor="">Email</label>
        <input type="email" required name="email" />

        <label htmlFor="">Password</label>
        <input type="password" required name="password" />

        <label htmlFor="">Confirm Password</label>
        <input type="password" required name="confirmPassword" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
