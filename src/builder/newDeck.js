const NewDeck = {
    System: 'system',
    Start: 'New Deck',
  };
  
  class EventMessage {
    constructor(from, type) {
      this.from = from;
      this.type = type;
    }
  }

  class NewDeckNotifier {
    events = [];
    handlers = [];
  
    constructor() {
      let port = window.location.port;
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
      this.socket.onopen = (event) => {
        this.receiveEvent(new EventMessage('Simon', GameEvent.System));
      };
      this.socket.onclose = (event) => {
        this.receiveEvent(new EventMessage('Simon', GameEvent.System));
      };
      this.socket.onmessage = async (msg) => {
        try {
          const event = JSON.parse(await msg.data.text());
          this.receiveEvent(event);
        } catch {}
      };
    }

    broadcastEvent(from, type) {
        const event = new EventMessage(from, type);
        this.socket.send(JSON.stringify(event));
      }
    
      addHandler(handler) {
        this.handlers.push(handler);
      }
    
      removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
      }
    
      receiveEvent(event) {
        this.events.push(event);
    
        this.events.forEach((e) => {
          this.handlers.forEach((handler) => {
            handler(e);
          });
        });
      }
}

    const DeckNotifier = new NewDeckNotifier();
    export { NewDeck, DeckNotifier};