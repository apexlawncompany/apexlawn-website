// Upload limits shared by the forms (browser) and /api/send-mail (server).
//
// Vercel refuses any request larger than 4.5 MB before our code even runs, on
// every plan. Photos share a 4 MB budget, leaving room for the text fields.
// On a server without that ceiling, raise UPLOAD_BUDGET_BYTES here: the forms,
// the progress ring and the server check all follow this one number.
export const UPLOAD_BUDGET_BYTES = 4 * 1024 * 1024;

// Most photos a customer can attach to one request.
export const MAX_FILES = 10;
