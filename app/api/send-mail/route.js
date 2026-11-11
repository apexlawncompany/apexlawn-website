import nodemailer from "nodemailer";

// Asks Google whether the captcha token from the form is genuine and unused.
// The browser-side checkbox alone can be skipped by a bot posting straight to
// this route; this server-side check can't. Any doubt counts as a fail.
async function verifyCaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("send-mail: RECAPTCHA_SECRET_KEY is not set");
    return false;
  }
  if (!token) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error("send-mail: captcha check failed:", err?.message || err);
    return false;
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Refuse before anything else happens (no email is built or sent).
    const captchaOk = await verifyCaptcha(formData.get("captchaToken"));
    if (!captchaOk) {
      return Response.json(
        { error: "Captcha check failed. Please tick the box again." },
        { status: 400 }
      );
    }

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const requestDay = formData.get("request");
    const details = formData.get("details");
    const location = formData.get("location");
    const address = formData.get("address");
    const day = formData.get("day");
    const page = formData.get("page");
    const source = formData.get("source") || "website"; // 👈 new
    const files = formData.getAll("images");
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

    let mailData = null;
    switch (page) {
      case "appointment":
        {
          // const { email, name, phone, request, details } = reqObj;
        mailData = {
          subject: `New Client Inquiry`,
          text: `You have received a new submission on your form from ${name}
      Full Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service Request: ${requestDay}
      Details: ${details}
      Source: ${source}
      `,
        };
        }
        break;
      case "drone":
        // const { name, email, phone, location, address, day, details } = reqObj;
        mailData = {
          subject: `New Client Inquiry`,
          text: `You have received a new submission on your drone form from ${name}
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Address: ${address}
        Service Request: ${day}
        Details: ${details}
        Source: ${source}
        `,
        };
      default:
        break;
    }
    if (!mailData) {
      throw "Invalid data";
    }

    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        };
      })
    );

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVERS_MAIL,
      ...mailData,
      attachments: files.length ? attachments : [],
    };

    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("error-->", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
