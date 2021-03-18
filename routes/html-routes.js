const path = require('path');
const router = require().Router();

router.get('/', (req, res) => [
  res.sendFile(path.join(__dirname, '../public/index.html')),
]);
