import db from '../../lib/db.mjs'

export const patient = (_, args) => {
  const patient = db.find(args.id)
  const gqlData = {
    id: patient.id,
    firstName: patient.name.split(' ')[0],
    lastName: patient.name.split(' ')[1],
  }
  return gqlData
}

export const patientEdit = (_, args) => {
  try {
    db.update(args.id, args.data)
    return true
  } catch (err) {
    return false
  }
}

export const queries = {
  patient
}

export const mutations = {
  patientEdit
}