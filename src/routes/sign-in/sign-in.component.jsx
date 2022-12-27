import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>wassup, youre on the signin page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
    </div>
  );
};
export default SignIn;
