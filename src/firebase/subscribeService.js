import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

/**
 * Subscribe an email to the newsletter
 * @param {string} email 
 * @returns {Promise<{success: boolean, duplicate?: boolean, message: string}>}
 */
export const subscribeToNewsletter = async (email) => {
  try {
    // Check if email already exists
    const subscribersRef = collection(db, 'subscribers');
    const q = query(subscribersRef, where('email', '==', email.toLowerCase()));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return {
        success: false,
        duplicate: true,
        message: 'This email is already subscribed.'
      };
    }

    // Add new subscriber
    await addDoc(subscribersRef, {
      email: email.toLowerCase(),
      subscribedAt: serverTimestamp(),
      active: true
    });

    return {
      success: true,
      message: 'Successfully subscribed!'
    };
  } catch (error) {
    console.error('Subscribe error:', error);
    return {
      success: false,
      message: 'Failed to subscribe. Please try again.'
    };
  }
};

/**
 * Get all active subscribers
 * @returns {Promise<string[]>} Array of subscriber emails
 */
export const getAllSubscribers = async () => {
  try {
    const subscribersRef = collection(db, 'subscribers');
    const q = query(subscribersRef, where('active', '==', true));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => doc.data().email);
  } catch (error) {
    console.error('Get subscribers error:', error);
    return [];
  }
};
