import { getCookie } from "@/src/cookies"; // helper above

export const sendMail = async (formData, page) => {
  try {
    const data = new FormData();
    data.append("name", formData.name || "");
    data.append("email", formData.email || "");
    data.append("phone", formData.phone || "");
    data.append("request", formData.request || "");
    data.append("details", formData.details || "");
    data.append("location", formData.location || "");
    data.append("address", formData.address || "");
    data.append("day", formData.day || "");
    data.append("page", page || "appointment");

    // Source: prefer state, fallback to cookie
    const sourceValue = formData.source || getCookie("lead_source") || "website";
    data.append("source", sourceValue);

    if (formData.images && formData.images.length > 0) {
      formData.images.forEach((file) => data.append("images", file));
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
