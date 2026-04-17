import { subscribeToNewsletter as firebaseSubscribe } from '../firebase/subscribeService';

/**
 * Subscribe an email to the FEAR newsletter
 * @param {string} email
 * @returns {{ success: boolean, message: string }}
 */
export const subscribeToNewsletter = async (email) => {
  return await firebaseSubscribe(email);
};
