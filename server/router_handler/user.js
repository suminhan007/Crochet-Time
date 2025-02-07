exports.register = async (req,res) => {
  const { email, password } = req.body;
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json({ user });
  res.send('register OK')
}

exports.login = async (req,res) => {
  const { email, password } = req.body;
const { user, error } = await supabase.auth.signIn({ email, password });
if (error) {
  return res.status(400).json({ error: error.message });
}
res.status(200).json({ user });
res.send('login OK');
}