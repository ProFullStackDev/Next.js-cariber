export enum FlashMessagesType {
  forgotPasswordMessages = "forgotPasswordMessages"
}

export default class FlashMessages {
  setMessages(key: string, messages: string): void {
    sessionStorage.setItem(key, messages);
  }

  getMessages(key: string): string {
    const messages = sessionStorage.getItem(key);
    setTimeout(() => { sessionStorage.removeItem(key) }, 3000);
    if (messages) {
      return messages;
    } else {
      return "";
    }
  }
}