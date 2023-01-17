import axios from 'axios'

const ApiTimeout = axios.create({baseURL: 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout'})

export default ApiTimeout