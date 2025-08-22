// server.js
const express = require('express');
const fetch = require('node-fetch');  // npm install node-fetch@2
const app = express();
const PORT = process.env.PORT || 3000;  // Renderでは環境変数PORTを使用

app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send('URLを指定してください');

  try {
    const response = await fetch(url);
    const body = await response.text();
    res.send(body);
  } catch (err) {
    res.status(500).send('取得エラー: ' + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`CORSプロキシサーバーがポート ${PORT} で起動`);
});
