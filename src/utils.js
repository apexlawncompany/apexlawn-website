import { getCookie } from "@/src/cookies"; // helper above

// Sends a form to /api/send-mail and waits for the answer.
// Returns { ok: true } or { ok: false, error } so the page can tell the
// customer what happened instead of failing silently.
export const sendMail = async (formData, page, captchaToken) => {
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
    data.append("captchaToken", captchaToken || "");

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

    if (res.status === 413) {
      return {
        ok: false,
        error:
          "Your photos are too large to send together. Please remove some and try again.",
      };
    }

    const body = await res.json().catch(() => ({}));
    if (!res.ok || !body.message) {
      return {
        ok: false,
        error: body.error || "Something went wrong sending your request. Please try again.",
      };
    }

    return { ok: true };
  } catch (err) {
    console.log("failed to send mail:", err);
    return {
      ok: false,
      error: "Couldn't reach the server. Please check your connection and try again.",
    };
  }
};
