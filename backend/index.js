const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "26bf1b2e-0354-468c-81a8-32240620cd8a" }}
        )
        return res.status(r.status).json(r.data);
    } catch(e) {
        return res.status(e.respone.status).json(e.respone.data);
    }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);