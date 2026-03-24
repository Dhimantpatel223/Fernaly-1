import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Notify site owner about new subscriber
    await transporter.sendMail({
      from: `"Fernaly Website" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FDFAF5; border-radius: 12px; overflow: hidden;">
          <div style="background: #2a1f1a; padding: 24px 32px;">
            <h1 style="color: #FDFAF5; margin: 0; font-size: 20px; font-weight: 400; letter-spacing: 2px;">✦ FERNALY</h1>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #2a1f1a; margin-top: 0; font-size: 18px;">🎉 New Newsletter Subscriber</h2>
            <p style="color: #4f3e36; line-height: 1.7;">
              A new visitor has subscribed to the Fernaly newsletter:
            </p>
            <div style="background: #f5f0e8; border-radius: 8px; padding: 20px; margin-top: 16px;">
              <p style="margin: 0; color: #2a1f1a; font-size: 16px;">
                📧 <a href="mailto:${email}" style="color: #E8836E;">${email}</a>
              </p>
            </div>
            <p style="color: #8c7365; font-size: 13px; margin-top: 16px;">
              Subscribed on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
          <div style="background: #f5f0e8; padding: 16px 32px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #8c7365;">Fernaly Newsletter System</p>
          </div>
        </div>
      `,
    });

    // Send welcome email to the subscriber
    await transporter.sendMail({
      from: `"Fernaly" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: `Welcome to Fernaly! ✦ You're subscribed`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FDFAF5; border-radius: 12px; overflow: hidden;">
          <div style="background: #2a1f1a; padding: 24px 32px;">
            <h1 style="color: #FDFAF5; margin: 0; font-size: 20px; font-weight: 400; letter-spacing: 2px;">✦ FERNALY</h1>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #2a1f1a; margin-top: 0;">Welcome to Fernaly!</h2>
            <p style="color: #4f3e36; line-height: 1.7;">
              Thank you for subscribing to our newsletter! You'll be the first to know about:
            </p>
            <ul style="color: #4f3e36; line-height: 2; padding-left: 20px;">
              <li>🌿 New product arrivals</li>
              <li>✨ Special offers & exclusive deals</li>
              <li>💡 Curated beauty tips & inspiration</li>
              <li>📦 Product launch announcements</li>
            </ul>
            <div style="background: #f5f0e8; border-radius: 8px; padding: 20px; margin-top: 20px; text-align: center;">
              <p style="margin: 0; color: #8c7365; font-style: italic;">
                "Nature-inspired excellence, curated for you."
              </p>
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

    return Response.json({ success: true, message: 'You\'ve been subscribed successfully!' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return Response.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
