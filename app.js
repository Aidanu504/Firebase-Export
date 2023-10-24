const express = require('express');
const bodyParser = require('body-parser');
const exportModule = require('./export');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const fs = require('fs');
    const formHtml = fs.readFileSync('./index.html', 'utf8');
    res.send(formHtml);
  });

app.post('/export', async (req, res) => {
  const firebaseUrl = req.body.firebaseUrl;
  const adminSdkPath = req.body.adminSdkPath;

  if (!firebaseUrl || !adminSdkPath) {
    return res.status(400).send('Firebase URL and Admin SDK path are required.');
  }

  try {
    await exportModule.exportData(firebaseUrl, adminSdkPath);
    res.send('Data exported to CSV and JSON');
  } catch (error) {
    console.error('Error exporting data:', error);
    res.status(500).send('Error exporting data');
  }
  process.exit(0)
});

const port = 3000; // can be changed to change local host adress 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
