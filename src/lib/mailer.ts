import nodemailer from "nodemailer";
import fs from "node:fs";
import path from "node:path";

interface AppSettings {
  emailSettings?: {
    RefLink?: string;
    EmailHost?: string;
    EmailPort?: number;
    EmailUsername?: string;
    EmailPassword?: string;
  };
  adminEmails?: string[];
}

function loadAppSettings(): AppSettings {
  const filename = path.join(process.cwd(), "appsettings.json");
  if (!fs.existsSync(filename)) return {};
  return JSON.parse(fs.readFileSync(filename, "utf-8")) as AppSettings;
}

// Server-only configuration: never import this module into a Client Component.
// Environment variables override the non-secret defaults in appsettings.json.
const settings = loadAppSettings();
const cfg = settings.emailSettings;
const port = Number(process.env.EMAIL_PORT || cfg?.EmailPort || 587);
const secure = process.env.EMAIL_SECURE ? process.env.EMAIL_SECURE === "true" : port === 465;
const username = process.env.EMAIL_USERNAME || cfg?.EmailUsername || "";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || cfg?.EmailHost || "",
  port,
  secure,
  requireTLS: !secure,
  auth: {
    user: username,
    pass: process.env.EMAIL_PASSWORD || cfg?.EmailPassword || "",
  },
  tls: { minVersion: "TLSv1.2" },
  connectionTimeout: 25_000,
  greetingTimeout: 25_000,
  socketTimeout: 25_000,
  disableUrlAccess: true,
});

export const MAIL_FROM = { name: "Phakama Women's Organization", address: username };

const adminEntries = process.env.ADMIN_EMAILS || process.env.ADMIN_EMAIL;
export const ADMIN_EMAILS = [...new Set(
  (adminEntries ? [adminEntries] : settings.adminEmails ?? ["admin@phakamawomens.org"])
    .flatMap((entry) => entry.split(/[,;]/))
    .map((email) => email.trim())
    .filter(Boolean),
)];

export const REF_LINK = process.env.EMAIL_REF_LINK || cfg?.RefLink || "https://www.phakamawomens.org";
export const LOGO_ATTACHMENT = {
  filename: "phakama-logo.png",
  path: path.join(process.cwd(), "public", "images", "phakama-logo.png"),
  cid: "phakama-logo@phakamawomens.org",
  contentType: "image/png",
  contentDisposition: "inline" as const,
};
