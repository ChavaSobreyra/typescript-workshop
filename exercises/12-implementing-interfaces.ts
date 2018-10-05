/**
 * Using the implements keyword, we can ensure that classes implement and interface
 * Try add 'class x implements Communication channel' to the classes below
 * and use the typescript compiler feedback to get these classes into line
 */

interface Messenger {
  send(message)
}

class FacebookMessenger implements Messenger {
  public send(message) {
    // FacebookMessenger specific logic
  }
}

class WhatsApp {
  public sendMessage(message) {
    // WhatsApp specific logic
  }
}

class SMS {
  public messageUp(message, carrierData) {
    // SMS  specific logic
  }
}

class IMessage {
  public pushMessage(message, options) {
    // iMessage specific logic
  }
}

/**
 * Having certainty that all these different classes adhere to the same interface starts to
 * unlock powerful OOP pattern like polymorphism
 */

class MessengerApp {
  private chatClient

  constructor(chatClient: Messenger) {
    this.chatClient = chatClient
  }

  public send(message) {
    return this.chatClient.send(message)
  }
}

const unifiedMessagingApp = new MessengerApp(new SMS())
