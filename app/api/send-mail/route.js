import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const reqObj = await req.json();
    const { page } = reqObj;
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
          const { email, name, phone, request, details } = reqObj;
          mailData = {
            subject: `New Client Inquiry`,
            text: `You have received a new submission on your form from ${name}
      Full Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service Request: ${request}
      Details: ${details}
      `,
          };
        }
        break;
      case "drone":
        const { name, email, phone, location, address, day, details } = reqObj;
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
        `,
        };
      default:
        break;
    }
    if (!mailData) {
      throw "Invalid data";
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_MAIL,
      ...mailData,
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
