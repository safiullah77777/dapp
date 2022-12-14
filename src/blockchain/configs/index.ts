import { Config } from '../types'

const environment = process.env.REACT_APP_NETWORK ? process.env.REACT_APP_NETWORK : 'dev'
export const config = require(`../configs/${environment}.configs.ts`).env as Config
