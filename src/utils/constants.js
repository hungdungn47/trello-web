// constants

let apiRoot = 'https://trello-api-aqqf.onrender.com'
console.log('process.env: ', process.env)
if (process.env.BUILD_MODE === 'dev') {
  apiRoot = 'http://localhost:8017'
} 
if (process.env.BUILD_MODE === 'production') {
  apiRoot = 'https://trello-api-aqqf.onrender.com'
}

console.log('api root: ', apiRoot)
export const API_ROOT = apiRoot