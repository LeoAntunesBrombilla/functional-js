class ErrorHandler {
  constructor() {
    this.nextHandler = null;
  }

  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(errorScenario) {
    if (this.nextHandler) {
      return this.nextHandler.handle(errorScenario)
    }
  }
}

class ErrorScenario1 extends ErrorHandler {
  handle(errorScenario) {
    if (errorScenario == 1) {
      return "handled at scenario 1"
    }
    return super.handle(errorScenario)
  }
}

class ErrorScenario2 extends ErrorHandler {
  handle(errorScenario) {
    if (errorScenario == 2) {
      return "handled at scenario 2"
    }
    return super.handle(errorScenario)
  }
}

class ErrorScenario3 extends ErrorHandler {
  handle(errorScenario) {
    if (errorScenario == 3) {
      return "handled at scenario 3"
    }
    return super.handle(errorScenario)
  }
}

const errorHandlerChain = new ErrorScenario1()

errorHandlerChain.setNext(new ErrorScenario2()).setNext(new ErrorScenario3())

console.log(errorHandlerChain.handle(1))
console.log(errorHandlerChain.handle(2))
console.log(errorHandlerChain.handle(3))
