import * as resolvers from './resolvers.mjs'
import * as schema from './schema.mjs'

const Patient = { resolvers, ...schema }

export default Patient