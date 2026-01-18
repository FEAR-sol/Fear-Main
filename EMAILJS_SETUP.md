# EmailJS Setup Guide

## Current Configuration

Your contact form is now integrated with EmailJS using the following credentials:

- **Service ID**: `service_aomni84`
- **Template ID**: `template_lil0gr7`
- **Public Key**: `iarwc3ySVBw62bKxF`
- **Destination Email**: `fear.agency.contact@gmail.com`

## EmailJS Template Variables

Make sure your EmailJS template includes these variables:

- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email address
- `{{message}}` - The message content
- `{{to_email}}` - Destination email (fear.agency.contact@gmail.com)

## Template Example

Here's a sample template you can use in EmailJS:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

## Features Implemented

✅ Form validation
✅ Loading states during submission
✅ Success/error feedback messages
✅ Form reset after successful submission
✅ Responsive design maintained
✅ Smooth animations preserved

## Testing

1. Fill out the contact form on your website
2. Check that the email arrives at fear.agency.contact@gmail.com
3. Verify all form fields are included in the email
4. Test error handling by temporarily using invalid credentials

## Troubleshooting

If emails aren't being sent:

1. Verify your EmailJS service is active
2. Check that the template ID matches exactly
3. Ensure your public key is correct
4. Check browser console for any error messages
5. Verify your EmailJS account has sufficient quota