const express = require('express')
const { createClient } = require('@supabase/supabase-js')

const router = express.Router()
const userHandler = require('../router_handler/user')

const supabaseUrl = 'https://dxzusoigsbcetdauouzs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4enVzb2lnc2JjZXRkYXVvdXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4OTczNDAsImV4cCI6MjA1NDQ3MzM0MH0.gxVrdRaMzhlXk8oI9mQfk4CDQbPWn6zP6q_SoZj44D4';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

router.post('/register', userHandler.register)

router.post('/login', userHandler.login)

module.exports = router