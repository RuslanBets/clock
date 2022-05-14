const { readFileSync } = require('fs')
const { createServer } = require('http')
const port = 4000
const server = createServer(requestListener)
server.listen(port)

function requestListener(request,response) {
  let url = request.url
  if (url == '/') {
    url = '/index.html'
  }
  let file = readFileSync(url.slice(1))
  response.end(file)
}