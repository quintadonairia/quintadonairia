import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import GoogleSheetsAuth from "./auth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const auth = await GoogleSheetsAuth();
  const sheets = google.sheets({ version: "v4", auth });

  if (req.method === "POST") {
    try {
      const {
        name,
        checkIn,
        checkOut,
        guests: { adults, children },
        rooms,
        email,
      } = req.body;

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Reservas!A:Z",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[name, checkIn, checkOut, adults, children, rooms, email]],
        },
      });
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const data = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Reservas!A:Z",
      });

      return res.status(200).json(data.data.values);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error getting spreadsheet data", success: false });
    }
  }
}
