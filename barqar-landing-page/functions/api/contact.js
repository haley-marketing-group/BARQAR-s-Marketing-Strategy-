/**
 * Cloudflare Pages Function for handling contact form submissions
 * This runs as a serverless edge function
 */

export async function onRequestPost(context) {
  try {
    const { request } = context;
    
    // Parse form data
    const formData = await request.json();
    
    // Validate honeypot field (spam prevention)
    if (formData.honeypot) {
      return new Response(JSON.stringify({ error: 'Invalid submission' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'company', 'consent'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields', 
          fields: missingFields 
        }), 
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }), 
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // Prepare email content
    const emailContent = {
      to: 'jeff@barqar.com', // UPDATE THIS EMAIL ADDRESS
      from: 'noreply@barqar.com', // Replace with verified sender
      subject: `New Strategic Blueprint Request from ${formData.fullName}`,
      text: `
New Strategic Marketing Blueprint Request

Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone || 'Not provided'}

Consent: ${formData.consent ? 'Yes' : 'No'}

Submitted: ${new Date().toISOString()}
      `,
    };
    
    // TODO: Integrate with email service (SendGrid, Mailgun, etc.)
    // Example for SendGrid:
    // const SENDGRID_API_KEY = context.env.SENDGRID_API_KEY;
    // await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(emailContent),
    // });
    
    // TODO: Integrate with CRM (HubSpot, Salesforce, etc.)
    // Example for HubSpot:
    // const HUBSPOT_API_KEY = context.env.HUBSPOT_API_KEY;
    // await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     properties: {
    //       email: formData.email,
    //       firstname: formData.fullName.split(' ')[0],
    //       lastname: formData.fullName.split(' ').slice(1).join(' '),
    //       company: formData.company,
    //       phone: formData.phone,
    //     },
    //   }),
    // });
    
    // Log submission (for now)
    console.log('Form submission received:', emailContent);
    
    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your submission!' 
      }), 
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    
  } catch (error) {
    console.error('Form submission error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: 'Please try again later.' 
      }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// Handle OPTIONS request for CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

