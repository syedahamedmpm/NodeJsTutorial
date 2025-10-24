let users = [
  { id: 1, name: "Syed" },
  { id: 2, name: "Maryam" },
];

exports.getUsers = (req, res) => res.json(users);

exports.getUserById = (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

exports.createUser = (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
};
