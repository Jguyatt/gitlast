import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface SalesInquiryData {
  name: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: SalesInquiryData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'company', 'companySize'];
    for (const field of requiredFields) {
      if (!data[field as keyof SalesInquiryData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Sales Inquiry from Twinly Website:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
Company Size: ${data.companySize}

Submitted at: ${new Date().toISOString()}
    `;

    // Check if email configuration is available
    const hasEmailConfig = process.env.GMAIL_APP_PASSWORD && process.env.GMAIL_USER;
    
    if (hasEmailConfig) {
      // Send email using Nodemailer
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: 'mohid2007zk@gmail.com',
          subject: 'New Sales Inquiry - Twinly',
          text: emailContent,
          html: `
            <h2>New Sales Inquiry from Twinly Website</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Company Size:</strong> ${data.companySize}</p>
            <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Don't fail the request if email fails
      }
    } else {
      console.log('Email configuration not available, skipping email send');
      console.log('Sales inquiry data:', emailContent);
    }

    // Always return success response
    return NextResponse.json(
      { 
        message: 'Sales inquiry submitted successfully',
        emailSent: hasEmailConfig
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing sales inquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
