import { UPLOAD_BUDGET_BYTES, MAX_FILES } from "@/src/uploadLimits";

// Photos are redrawn at most this many pixels on their longest side. That is
// plenty to see a lawn, and turns a typical 3-6 MB phone photo into roughly
// 0.3-0.6 MB.
const MAX_EDGE = 1600;
const JPEG_QUALITY = 0.8;
const LEAVE_ALONE_UNDER = 500 * 1024; // small photos are sent as they are

const PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/heic", "image/heif"];

function isPhoto(file) {
  if (PHOTO_TYPES.includes(file.type)) return true;
  // Some browsers don't label iPhone HEIC photos; fall back to the file name.
  return file.type === "" && /\.(heic|heif)$/i.test(file.name);
}

// Shrinks one photo in the browser by drawing it smaller and saving it as JPEG.
// Returns the original file if it's already small, is a GIF (would lose its
// animation), can't be read by this browser, or wouldn't get any smaller.
async function shrinkPhoto(file) {
  if (file.size <= LEAVE_ALONE_UNDER || file.type === "image/gif") return file;
  try {
    const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
    const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff"; // see-through PNGs get a white background
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close?.();

    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY)
    );
    if (!blob || blob.size >= file.size) return file;

    const name = file.name.replace(/\.[^.]+$/, "") + ".jpg";
    return new File([blob], name, { type: "image/jpeg", lastModified: file.lastModified });
  } catch {
    return file;
  }
}

export function bytesUsed(files) {
  return files.reduce((total, file) => total + file.size, 0);
}

// Adds newly picked files to the ones already chosen: photos only, shrunk,
// and only while they fit the upload budget. Returns the new list plus a
// message explaining anything that was left out ("" when everything fit).
export async function addPhotos(current, picked) {
  const files = [...current];
  const notPhoto = [];
  const noRoom = [];
  let tooMany = false;

  for (const file of picked) {
    if (!isPhoto(file)) {
      notPhoto.push(file.name);
      continue;
    }
    if (files.length >= MAX_FILES) {
      tooMany = true;
      continue;
    }
    const photo = await shrinkPhoto(file);
    if (bytesUsed(files) + photo.size > UPLOAD_BUDGET_BYTES) {
      noRoom.push(file.name);
      continue;
    }
    files.push(photo);
  }

  const messages = [];
  if (notPhoto.length) {
    messages.push(`Only photos can be attached (JPG, PNG, WebP, GIF or HEIC). Not added: ${notPhoto.join(", ")}.`);
  }
  if (tooMany) messages.push(`You can attach up to ${MAX_FILES} photos.`);
  if (noRoom.length) {
    messages.push(`Upload space is full. Not added: ${noRoom.join(", ")}. Remove a photo to make room.`);
  }
  return { files, message: messages.join(" ") };
}
