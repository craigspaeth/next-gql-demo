import { useEffect, useState } from 'react'

const usePatient = () => {
  const [state, setState] = useState({
    isLoading: true,
    error: null,
    data: null
  })
  useEffect(async () => {
    try {
      setState({ isLoading: true })
      const { data } = await (await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          # Write your query or mutation here
          query {
            patient(id: 1) {
              firstName
              lastName
            
            }
          }
          `,
        }),
      })).json()
      setState({ data, isLoading: false })
    } catch (error) {
      setState({ error, isLoading: false })
    }
  }, [])
  return state
}

export default () => {
  const { isLoading, data, error } = usePatient()
  return (
    <div>
      {isLoading ? 'Loading...' :  data.patient.firstName}
    </div>
  )
}
