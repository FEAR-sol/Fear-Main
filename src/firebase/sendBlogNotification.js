import { getAllSubscribers } from './subscribeService';

/**
 * Send blog notification to all subscribers via Resend
 * 
 * @param {Object} blog - Blog details
 * @param {string} blog.title - Blog title
 * @param {string} blog.slug - Blog slug for URL
 * @param {string} blog.excerpt - Short description
 */
export const sendBlogNotification = async (blog) => {
  try {
    // Get all subscribers
    const subscribers = await getAllSubscribers();
    
    if (subscribers.length === 0) {
      return { success: false, message: 'No subscribers found' };
    }

    const RESEND_API_KEY = process.env.REACT_APP_RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      console.error('Resend API key not found');
      return { success: false, message: 'Email service not configured' };
    }

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'FEAR Agency <onboarding@resend.dev>',
        to: subscribers,
        subject: `New Blog from FEAR Agency: ${blog.title}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #1a1a1a; padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #BFBCB6; margin: 0; font-size: 24px;">FEAR Agency</h1>
            </div>
            <div style="background: #f5f5f5; padding: 30px; border-radius: 0 0 8px 8px;">
              <h2 style="color: #1a1a1a; margin-top: 0;">${blog.title}</h2>
              <p style="color: #666; line-height: 1.6; font-size: 16px;">${blog.excerpt}</p>
              <a href="https://fearagency.in/blogs/${blog.slug}" 
                 style="display: inline-block; background: #1a1a1a; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; margin-top: 20px; font-weight: 500;">
                Read Full Blog →
              </a>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
              <p style="color: #999; font-size: 12px; margin: 0;">
                You're receiving this because you subscribed to FEAR Agency updates.<br/>
                <a href="https://fearagency.in" style="color: #666;">Visit our website</a>
              </p>
            </div>
          </div>
        `
      })
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: `Notification sent to ${subscribers.length} subscribers`,
        emailId: data.id
      };
    } else {
      console.error('Resend API error:', data);
      return {
        success: false,
        message: data.message || 'Failed to send emails'
      };
    }
  } catch (error) {
    console.error('Send notification error:', error);
    return {
      success: false,
      message: 'Failed to send notifications: ' + error.message
    };
  }
};
