import { db } from "../firebase/firebase";

import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

/* ==========================
   USERS
========================== */

// Create or update a user profile
export const createUserProfile = async (user) => {
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name: user.displayName || "",
    email: user.email,
    photoURL: user.photoURL || "",
    createdAt: serverTimestamp(),
  });
};

// Get a user profile
export const getUserProfile = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }

  return null;
};

/* ==========================
   INCIDENT REPORTS
========================== */

// Add a new incident report
export const addIncident = async (incident) => {
  const docRef = await addDoc(collection(db, "incidents"), {
    ...incident,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};

// Get all incident reports
export const getIncidents = async () => {
  const snapshot = await getDocs(collection(db, "incidents"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Update an incident
export const updateIncident = async (id, data) => {
  await updateDoc(doc(db, "incidents", id), data);
};

// Delete an incident
export const deleteIncident = async (id) => {
  await deleteDoc(doc(db, "incidents", id));
};

/* ==========================
   SOS ALERTS
========================== */

// Create an SOS alert
export const createSOSAlert = async (alert) => {
  const docRef = await addDoc(collection(db, "sosAlerts"), {
    ...alert,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};

// Get all SOS alerts
export const getSOSAlerts = async () => {
  const snapshot = await getDocs(collection(db, "sosAlerts"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};