import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mail';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, teamSize, message } = await request.json();

    // Send email to guyattj39@gmail.com
    await sendEmail({
      to: 'guyattj39@gmail.com',
      subject: `New Sales Inquiry from ${name} at ${company}`,
      html: `
        <h2>New Sales Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Team Size:</strong> ${teamSize} users</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing sales inquiry:', error);
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 });
  }
}
