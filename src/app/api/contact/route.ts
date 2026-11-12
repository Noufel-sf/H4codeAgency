import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten() },
        { status: 400 }
      );
    }

    // In production, integrate email notification (Resend, SendGrid, SMTP, Slack webhook)
    console.log('Project inquiry received:', result.data);

    return NextResponse.json({
      success: true,
      message: 'Inquiry processed successfully'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

