import axios from 'axios'

const ApiInternalError = axios.create({baseURL: 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError'})

export default ApiInternalError