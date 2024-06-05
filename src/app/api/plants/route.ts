import { type NextRequest } from 'next/server'

const MOCKED_PLANTS_PER_COMPANY = {
  1: [
    { id: 1, name: 'Plant 1', companyId: 1 },
    { id: 2, name: 'Plant 2', companyId: 1 },
    { id: 3, name: 'Plant 3', companyId: 1 },
  ],
  2: [
    { id: 4, name: 'Plant 4', companyId: 2 },
    { id: 5, name: 'Plant 5', companyId: 2 },
    { id: 6, name: 'Plant 6', companyId: 2 },
  ],
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const companyIdFromQuery = searchParams.get('companyId')

  if(!companyIdFromQuery) {
    return Response.json({ error: 'Company id is required' }, { status: 400 })
  }

  if(companyIdFromQuery !== '1' && companyIdFromQuery !== '2') {
    return Response.json({ error: 'Company not found' }, { status: 404 })
  }

  const companyId = parseInt(companyIdFromQuery) as 1 | 2

  const plants = MOCKED_PLANTS_PER_COMPANY[companyId]

  return Response.json(plants)
}