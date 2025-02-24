export const sendMail = async (formData, page) => {
  try {
    const data = {
      ...(formData || {}),
      page: page || "appointment",
    };
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const { message } = await res.json();
    if (!message) {
      throw "Failed to send mail";
    }
    console.log("Msg:", message);
  } catch (err) {
    console.log("failed to send mail:", err);
  }
};
