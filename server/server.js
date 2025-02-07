const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:false}))
const port = 3000;

const userRouter = require('./router/user')
app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});