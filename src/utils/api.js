const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

/**
 * Subscribe an email to the FEAR newsletter
 * @param {string} email
 * @returns {{ success: boolean, message: string }}
 */
export const subscribeToNewsletter = async (email) => {
  try {
    const res = await fetch(`${BASE_URL}/api/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.status === 201) return { success: true, message: data.message };
    if (res.status === 409) return { success: false, duplicate: true, message: data.message };

    return { success: false, message: data.message || 'Something went wrong.' };
  } catch {
    return { success: false, message: 'Unable to connect. Please try again.' };
  }
};
