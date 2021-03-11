import gql from 'tagged-template-noop'

export const types = gql`
  type Patient {
    firstName: String!
    lastName: String!
    isDeceased: Boolean!
    erBuddy: Patient!
  }

  input PatientInput {
    firstName: String
    lastName: String
    isDeceased: Boolean
  }
`

export const queries = gql`
  patient(id: ID): Patient!
`

export const mutations = gql`
  patientEdit(id: ID, data: PatientInput): Boolean  
`