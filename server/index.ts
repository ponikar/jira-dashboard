import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/issues", async (req, res) => {
   try {
    const { data } = await axios.get(
        `${process.env.VITE_JIRA_API_END_POINT}/search?jql=project=${process.env.VITE_JIRA_PROJECT_KEY}`,
        {
        headers: {
            Authorization: `Basic ${process.env.VITE_JIRA_API_TOKEN}`,
        },
        }
    );
    return res.json(data);
   } catch(e) {
      return res.status(500).json({ error: e.message });
   }
});

app.post("/issues", async (req, res) => {
    try {
        const { data } = await axios.post(
            `${process.env.VITE_JIRA_API_END_POINT}/issue`,
            {
                fields: {
                    project: {
                        key: process.env.VITE_JIRA_PROJECT_KEY,
                    },
                    ...req.body,
                    issuetype: {
                        id: 10002,
                    }
                }
            },
           {
            headers: {
                Authorization: `Basic ${process.env.VITE_JIRA_API_TOKEN}`,
                "Content-Type": "application/json",
            },
           }
        );
        return res.json(data);
    } catch(e) {
        console.log("error while creating an issue", e?.response?.data?.errors );
        return res.status(500).json({ error: e?.response?.data?.errors });
    }
})

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
