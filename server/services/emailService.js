const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Validate email service configuration before sending.
 * Returns null if valid, or an error string if misconfigured.
 */
const validateEmailConfig = () => {
  if (!process.env.RESEND_API_KEY) return 'RESEND_API_KEY is not set.';
  if (!process.env.FROM_EMAIL) return 'FROM_EMAIL is not set.';
  return null;
};

/**
 * Build the notification email HTML
 */
const buildEmailHtml = ({ title, description, slug, type }) => {
  const baseUrl = process.env.CLIENT_URL || 'http://localhost:3000';
  const contentPath = type === 'article' ? 'articles' : 'blogs';
  const readUrl = slug ? `${baseUrl}/${contentPath}/${slug}` : `${baseUrl}/${contentPath}`;
  const typeLabel = type === 'article' ? 'Article' : 'Blog';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New ${typeLabel} from FEAR</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f0;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f0;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#1a1a1a;padding:32px 40px;border-radius:16px 16px 0 0;text-align:center;">
              <p style="margin:0;color:#e8e4dc;font-size:11px;font-weight:600;letter-spacing:0.25em;text-transform:uppercase;font-family:sans-serif;">
                FEAR Studio
              </p>
              <p style="margin:8px 0 0;color:#9a9a8a;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;font-family:sans-serif;">
                New ${typeLabel} Published
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px 40px 32px;">
              <p style="margin:0 0 8px;color:#9a9a8a;font-size:11px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;font-family:sans-serif;">
                Just Published
              </p>
              <h1 style="margin:0 0 16px;color:#1a1a1a;font-size:26px;font-weight:500;line-height:1.3;font-family:'Georgia',serif;">
                ${title}
              </h1>
              <p style="margin:0 0 32px;color:#6b6b5a;font-size:15px;line-height:1.7;font-family:sans-serif;">
                ${description}
              </p>
              <a href="${readUrl}"
                style="display:inline-block;background:#1a1a1a;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:100px;font-size:13px;font-weight:600;letter-spacing:0.05em;font-family:sans-serif;">
                Read ${typeLabel} →
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background:#ffffff;padding:0 40px;">
              <hr style="border:none;border-top:1px solid #e8e4dc;margin:0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#ffffff;padding:24px 40px 32px;border-radius:0 0 16px 16px;text-align:center;">
              <p style="margin:0;color:#9a9a8a;font-size:12px;font-family:sans-serif;line-height:1.6;">
                You're receiving this because you subscribed to FEAR Studio updates.<br/>
                <a href="${baseUrl}" style="color:#1a1a1a;text-decoration:underline;">Visit FEAR Studio</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
};

/**
 * Send notification email to a batch of subscribers
 * Resend supports up to 50 recipients per call — we chunk for safety
 */
const sendNotificationEmails = async ({ subscribers, title, description, slug, type }) => {
  const configError = validateEmailConfig();
  if (configError) {
    console.error(`[emailService] Cannot send notification emails: ${configError}`);
    return { totalSent: 0, errors: [{ batch: 0, error: configError }] };
  }

  const BATCH_SIZE = 50;
  const from = `${process.env.FROM_NAME || 'FEAR Studio'} <${process.env.FROM_EMAIL}>`;
  const typeLabel = type === 'article' ? 'Article' : 'Blog';
  const subject = `New ${typeLabel} from FEAR: ${title}`;
  const html = buildEmailHtml({ title, description, slug, type });

  let totalSent = 0;
  const errors = [];

  // Chunk subscribers into batches
  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE);
    const toAddresses = batch.map((s) => s.email);

    try {
      await resend.emails.send({
        from,
        to: toAddresses,
        subject,
        html,
      });
      totalSent += batch.length;
    } catch (err) {
      errors.push({ batch: i / BATCH_SIZE + 1, error: err.message });
      console.error(`[emailService] Batch ${i / BATCH_SIZE + 1} failed:`, err.message);
    }
  }

  return { totalSent, errors };
};

/**
 * Send a welcome email to a new subscriber
 */
const sendWelcomeEmail = async (email) => {
  const configError = validateEmailConfig();
  if (configError) {
    console.error(`[emailService] Cannot send welcome email: ${configError}`);
    return; // Non-critical — fail silently but with a log
  }

  const baseUrl = process.env.CLIENT_URL || 'http://localhost:3000';
  const from = `${process.env.FROM_NAME || 'FEAR Studio'} <${process.env.FROM_EMAIL}>`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f0;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background:#1a1a1a;padding:32px 40px;border-radius:16px 16px 0 0;text-align:center;">
            <p style="margin:0;color:#e8e4dc;font-size:11px;font-weight:600;letter-spacing:0.25em;text-transform:uppercase;font-family:sans-serif;">FEAR Studio</p>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:40px;border-radius:0 0 16px 16px;">
            <h1 style="margin:0 0 16px;color:#1a1a1a;font-size:24px;font-weight:500;font-family:'Georgia',serif;">You're in.</h1>
            <p style="margin:0 0 24px;color:#6b6b5a;font-size:15px;line-height:1.7;font-family:sans-serif;">
              Welcome to the FEAR community. You'll get weekly insights on AI, web, and digital growth — straight to your inbox.
            </p>
            <a href="${baseUrl}/articles" style="display:inline-block;background:#1a1a1a;color:#fff;text-decoration:none;padding:14px 32px;border-radius:100px;font-size:13px;font-weight:600;font-family:sans-serif;">
              Explore Articles →
            </a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();

  try {
    await resend.emails.send({ from, to: [email], subject: 'Welcome to FEAR Studio', html });
  } catch (err) {
    // Non-critical — log but don't fail the subscription
    console.error('[emailService] Welcome email failed:', err.message);
  }
};

module.exports = { sendNotificationEmails, sendWelcomeEmail };
