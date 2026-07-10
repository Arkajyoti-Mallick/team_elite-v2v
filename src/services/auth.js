import {
  auth,
  googleProvider,
} from "../firebase/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";

/**
 * Sign up with email & password
 */
export const signup = async (name, email, password) => {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  await updateProfile(userCredential.user, {
    displayName: name,
  });

  return userCredential.user;
};

/**
 * Login with email & password
 */
export const login = async (email, password) => {
  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  return userCredential.user;
};

/**
 * Login with Google
 */
export const googleLogin = async () => {
  const result = await signInWithPopup(
    auth,
    googleProvider
  );

  return result.user;
};

/**
 * Logout
 */
export const logout = async () => {
  await signOut(auth);
};

/**
 * Reset Password
 */
export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};