import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await sendEmail({
      to: email,
      subject: "You're on the WeKraft waitlist!",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to WeKraft</title>
</head>
<body style="margin:0;padding:0;background:#09090b;font-family:'Inter',Arial,sans-serif;color:#e4e4e7;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#111113;border:1px solid #27272a;border-radius:16px;overflow:hidden;max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a5f,#0f1729);padding:40px 40px 32px;text-align:center;border-bottom:1px solid #1d4ed8/20;">
              <p style="margin:0 0 12px;font-size:28px;font-weight:700;letter-spacing:-0.5px;color:#ffffff;">
                WeKraft
              </p>
              <p style="margin:0;font-size:13px;color:#93c5fd;letter-spacing:2px;text-transform:uppercase;font-weight:600;">
                Build Together · Craft Faster
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 8px;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">
                You're on the list. 🎉
              </p>
              <p style="margin:0 0 24px;font-size:14px;color:#a1a1aa;line-height:1.7;">
                Hey there ROX ! this side — thanks for joining the WeKraft waitlist. You're among the first to know when we launch.
              </p>

              <p style="margin:0 0 10px;font-size:14px;color:#d4d4d8;line-height:1.7;">
                Here's what's coming your way:
              </p>

              <!-- Feature list -->
              <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #27272a;">
                    <span style="color:#3b82f6;font-size:14px;margin-right:10px;">→</span>
                    <span style="font-size:14px;color:#d4d4d8;">AI-powered PM Agent that plans &amp; tracks for you</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #27272a;">
                    <span style="color:#3b82f6;font-size:14px;margin-right:10px;">→</span>
                    <span style="font-size:14px;color:#d4d4d8;">Skill-based team matching — find your crew</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #27272a;">
                    <span style="color:#3b82f6;font-size:14px;margin-right:10px;">→</span>
                    <span style="font-size:14px;color:#d4d4d8;">Real-time collaboration with deadline intelligence</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;">
                    <span style="color:#3b82f6;font-size:14px;margin-right:10px;">→</span>
                    <span style="font-size:14px;color:#d4d4d8;">Founding member pricing — locked in for early users</span>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a
                      href="https://wekraft.xyz"
                      style="display:inline-block;padding:13px 32px;background:#2563eb;color:#ffffff;text-decoration:none;border-radius:10px;font-size:14px;font-weight:600;letter-spacing:0.3px;"
                    >
                      Visit WeKraft →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #27272a;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#52525b;">
                Team ROX is behind this development. 
              </p>
              <p style="margin:0;font-size:12px;color:#3f3f46;">
                © ${new Date().getFullYear()} WeKraft · team@wekraft.xyz
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[waitlist/send-email]", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
