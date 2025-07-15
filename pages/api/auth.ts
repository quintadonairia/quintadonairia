import { google } from "googleapis";

export default async function GoogleSheetsAuth() {
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS, "base64").toString(
      "utf-8"
    )
  );

  const auth = await google.auth.getClient({
    projectId: credentials.project_id,
    credentials: {
      type: "service_account",
      private_key: credentials.private_key,
      client_email: credentials.client_email,
      client_id: credentials.client_id,
      token_url: credentials.token_uri,
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return auth;
}
