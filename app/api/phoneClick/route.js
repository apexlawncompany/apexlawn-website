import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // accept JSON
    const payload = await req.json();
    const { type, value, source, timestamp } = payload || {};

    // basic validation
    if (!type || !value) {
      return new Response(JSON.stringify({ error: "Missing data" }), {
        status: 400,
      });
    }

    // create transporter 
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const now = new Date();
    const options = {
      timeZone: "America/New_York", // Adding Apex, NC timezone
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const localTime = now.toLocaleTimeString("en-US", options);
    const subject = type === "phone" ? "📞 Phone Click" : "Click Event";
    const text = `You received a ${type} click.
    Value: ${value}
    Source: ${source || "website"}
    Time: ${localTime}`;

    const html = `<h3>You received a ${type} click.</h3>
    <p><strong>Value:</strong> ${value}</p>
    <p><strong>Source:</strong> ${source || "website"}</p>
    <p><strong>Time:</strong> ${localTime}</p>`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVERS_MAIL,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Phone click emailed" }), {
      status: 200,
    });
  } catch (err) {
    console.error("phoneClick error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Server error" }),
      { status: 500 }
    );
  }
}
