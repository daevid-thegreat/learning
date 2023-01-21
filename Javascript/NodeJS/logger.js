const EventEmitter = require('events')
const uuid = require('uuid')


class Log extends EventEmitter {
    log(msg){
        // Call event
        this.emit('message', {id: uuid.v4(), msg})
    }
}


const logger = new Log()

logger.on('message', (data) => console.log('Called listener', data))

logger.log("hello peeps")
logger.log("hello peeps")
logger.log("hello peeps")
