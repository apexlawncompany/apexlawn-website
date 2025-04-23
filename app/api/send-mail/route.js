import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // const reqObj = await req.json();
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const requestDay = formData.get("request");
    const details = formData.get("details");
    const location = formData.get("location");
    const address = formData.get("address");
    const day = formData.get("day");
    const page = formData.get("page");
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
