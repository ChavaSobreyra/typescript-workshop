/**
 * Using the implements keyword, we can ensure that classes implement and interface
 * Try add 'class x implements Communication channel' to the classes below
 * and use the typescript compiler feedback to get these classes into line
 */

interface CommunicationChannel {
  send(message)
}

class FacebookMessenger {
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
  public up(message) {
    // SMS  specific logic
  }
}

class IMessage {
  public pushMessage(message) {
    // iMessage specific logic
  }
}

/**
 * Having certainty that all these different classes adhere to the same interface starts to
 * unlock powerful OOP pattersn like polymorphism
 */

class Messenger {
  private chatClient

  constructor(chatClient: CommunicationChannel) {
    this.chatClient = chatClient
  }

  public send(message) {
    return this.chatClient.send(message)
  }
}

const unifiedMessagingApp = new Messenger(new SMS())
