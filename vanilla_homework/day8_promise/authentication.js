export const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne.graham@email.com",
    password: "1drowssapencoded",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin.howell@email.com",
    password: "2drowssapencoded",
  },
];

// Encode password by reversing it + appending "encoded"
export const encodePassword = (password) => {
  return password.split("").reverse().join("") + "encoded";
};

// Decode password by removing "encoded" + reversing back
export const decodePassword = (encrypted) => {
  const stripped = encrypted.replace(/encoded$/, "");
  return stripped.split("").reverse().join("");
};

// Fetch user by email; throw error if not found
export const getUserByEmail = async (email) => {
  const user = users.find((u) => u.email === email);
  if (!user) throw new Error("User not found");
  return user;
};

// Verify the password; throw error if incorrect
export const verifyPassword = async (password, encrypted) => {
  const decoded = decodePassword(encrypted);
  if (password !== decoded) throw new Error("Invalid password");
  return true;
};

// Login: fetch user by email and verify password
export const login = async (email, password) => {
  try {
    const user = await getUserByEmail(email);
    await verifyPassword(password, user.password);
    return user;
  } catch (err) {
    throw err;
  }
};
