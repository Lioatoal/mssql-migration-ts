/* eslint-disable no-use-before-define */
import { Server, ServerOptions } from 'socket.io'
// import ioRedis from 'socket.io-redis'

class SocketServer {
  io: Server

  constructor() {
    this.io = null
  }

  initialize(httpServer) {
    this.io = new Server(httpServer)
    // this.io.adapter(ioRedis({ host: '', port: 6379 }))

    this.io.on('connection', async (socket) => {
      
      this.io.use((socket, next)=>{
        const token = socket.handshake.auth.token;
        if (token === undefined) {
          socket.disconnect()
        }

        next()
      })

    })
  }

  to(roomId) {
    if (!this.io) return null
    return this.io.to(roomId)
  }

  emit(topic, body, callback) {
    if (!this.io) return
    this.io.emit(topic, body, callback)
  }
}