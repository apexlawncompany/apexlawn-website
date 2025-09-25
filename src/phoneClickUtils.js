import { getCookie } from "./cookies";

export const sendPhoneClickMail = (phone) => {
  try {
    var sourceValue = getCookie("lead_source") || "website";
    var payload = JSON.stringify({
      page: "click",
      type: "phone",
      value: phone,
      source: sourceValue,
      timestamp: new Date().toISOString()
    });

    // Prefer sendBeacon (non-blocking during navigation)
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      var blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/phoneClick", blob);
      return;
    }

    // Fallback: fetch with keepalive
    if (typeof fetch !== "undefined") {
      fetch("/api/phoneClick", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true
      }).catch((e) => {
        // swallow errors silently — we don't want to block navigation
        console.error("sendPhoneClickMail fallback error", e);
      });
    }
  } catch (e) {
    console.error("sendPhoneClickMail error", e);
  }
};
