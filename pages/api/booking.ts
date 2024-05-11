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

      const result = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Reservas!A:Z",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[name, checkIn, checkOut, adults, children, rooms, email]],
        },
      });

      res.status(200).json({
        message: "Data appended successfully",
        success: true,
        result: result.data,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error processing the request", success: false });
    }
  } else {
    try {
      const result = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Reservas!A:Z",
      });

      return res.status(200).json(result.data.values);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error getting spreadsheet data", success: false });
    }
  }
}
