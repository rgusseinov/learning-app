class FancyLogger {

  constructor(){
    if (FancyLogger.instance == null){
      this.logs = []
      FancyLogger.instance = this
    }
    return FancyLogger.instance
  }

  log(message){
    this.logs.push(message)
    console.log(`Fancy: ${message}`)
  }

  printLogCount(){
    console.log(`${this.logs.length} Logs`)
  }

}

const logger = new FancyLogger()
Object.freeze(logger)
export default logger
