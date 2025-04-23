export const sendMail = async (formData, page) => {
  try {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("request", formData.request);
    data.append("details", formData.details);
    data.append("location", formData.location);
    data.append("address", formData.address);
    data.append("day", formData.day);
    data.append("page", page || "appointment");
    if (formData.images && formData.images.length > 0) {
      formData.images.forEach((file, idx) => {
        data.append("images", file); // use same key if backend expects multiple with same name
      });
    }
    const res = await fetch("/api/send-mail", {
      method: "POST",
      body: data,
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
