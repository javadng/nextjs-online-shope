export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(500).json({ message: "Bad Request" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(403)
      .json({ message: "Please privie a valid email or passwrod" });
  }

  const query = `
    mutation LoginUser($input: LoginInput = {password: "${password}", username: "${username}"}) {
      login(input: $input) {
        user {
          email
          username
          jwtAuthToken
          jwtAuthExpiration
        }
      }
    }
  `;

  

}
