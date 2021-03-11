import { patient } from "../graphql/patient/resolvers.mjs"

const patients = {
  1: {
    id: 1,
    name: "Bilbo Baggins",
    erBuddyId: 2
  },
  2: {
    id: 2,
    name: "Frodo TheGreatness",
    erBuddyId: 1
  },
}

export default {
  find: (id) => patients[id],
  update: (id, data) => {
    patients[id] = { ...patients[id], ...data }
  }
}