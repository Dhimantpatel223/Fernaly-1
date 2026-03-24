import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports (587 uses STARTTLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Subject line mapping
    const subjectMap = {
      product: 'Product Inquiry',
      support: 'Customer Support',
      partnership: 'Partnership',
      feedback: 'Feedback',
      other: 'Other',
    };

    const subjectLine = `Fernaly Contact: ${subjectMap[subject] || subject} — from ${name}`;

    // Send email to site owner
    await transporter.sendMail({
      from: `"Fernaly Website" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: subjectLine,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FDFAF5; border-radius: 12px; overflow: hidden;">
          <div style="background: #2a1f1a; padding: 24px 32px;">
            <h1 style="color: #FDFAF5; margin: 0; font-size: 20px; font-weight: 400; letter-spacing: 2px;">✦ FERNALY</h1>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #2a1f1a; margin-top: 0; font-size: 18px;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; color: #8c7365; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; color: #2a1f1a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; color: #8c7365; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; color: #2a1f1a;"><a href="mailto:${email}" style="color: #E8836E;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; color: #8c7365; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; color: #2a1f1a;">${phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; color: #8c7365; vertical-align: top;">Subject</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; color: #2a1f1a;">${subjectMap[subject] || subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8c7365; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #2a1f1a; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f5f0e8; padding: 16px 32px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #8c7365;">This message was sent from the Fernaly website contact form.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: `"Fernaly" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: `Thank you for reaching out, ${name}! — Fernaly`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FDFAF5; border-radius: 12px; overflow: hidden;">
          <div style="background: #2a1f1a; padding: 24px 32px;">
            <h1 style="color: #FDFAF5; margin: 0; font-size: 20px; font-weight: 400; letter-spacing: 2px;">✦ FERNALY</h1>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #2a1f1a; margin-top: 0;">Thank you, ${name}!</h2>
            <p style="color: #4f3e36; line-height: 1.7;">
              We've received your message and appreciate you taking the time to reach out. 
              Our team will review your inquiry and get back to you as soon as possible.
            </p>
            <div style="background: #f5f0e8; border-radius: 8px; padding: 20px; margin-top: 20px;">
              <p style="margin: 0 0 8px; color: #8c7365; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Your message</p>
              <p style="margin: 0; color: #2a1f1a; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #8c7365; font-size: 14px; margin-top: 24px;">
              With warmth,<br/>
              <strong style="color: #2a1f1a;">The Fernaly Team</strong>
            </p>
          </div>
          <div style="background: #f5f0e8; padding: 16px 32px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #8c7365;">© ${new Date().getFullYear()} Fernaly · Nature-inspired excellence</p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
