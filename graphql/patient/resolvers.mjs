import db from '../../lib/db.mjs'

const toGql = (patient) => ({
  id: patient.id,
  firstName: patient.name.split(' ')[0],
  lastName: patient.name.split(' ')[1],
  erBuddy: () => {
    const buddy = db.find(patient.erBuddyId)
    return toGql(buddy)
  }
})

export const patient = (_, args) => {
  const patient = db.find(args.id)
  return toGql(patient)
}

export const patientEdit = (_, args) => {
  db.update(args.id, args.data)
  const patient = db.find(args.id)
  return true
}

export const queries = {
  patient
}

export const mutations = {
  patientEdit
}