const MOCKED_USER = {
  username: "username",
  companyId: 1,
  email: "email",
  password: "password"
}

export async function POST(request: Request, response: Response){
  const { email, password } = await request.json() as { email: string, password: string }

  if(!email || !password){
    return Response.json({ error: "Email and password are required" }, { status: 400 })
  }

  if( email !== MOCKED_USER.email || password !== MOCKED_USER.password){
    return Response.json({ error: "Email and password are invalid" }, { status: 401 }) 
  }

  return Response.json({
    email,
    username: MOCKED_USER.username,
    companyId: MOCKED_USER.companyId
  })
}