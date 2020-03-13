interface Subject {
  registerObserver(O: Observer): void;
  removeObserver(O: Observer): void;
  notifyObservers(Message: String): void;
}

interface Network extends Subject {
  setConnectionType(ConnectionType: String): void;
}

interface Observer {
  update(Message: String);
}

function Network(): Network {
  let observers = <Array<Observer>>[];

  return {
    setConnectionType(type) {
      this.notifyObservers(`The network is now connected via: ${type}`);
    },
    registerObserver(obs) {
      // do not allow an observer to register twice
      if (observers.find(obsEl => obs === obsEl)) return;

      observers = [...observers, obs];
    },
    removeObserver(obs) {
      observers = observers.filter(obsEl => obsEl !== obs);
    },
    notifyObservers(message) {
      observers.forEach(obs => obs.update(message));
    }
  };
}

function Client(nickname: String): Observer {
  return {
    update(message) {
      console.log(`${nickname}: ${message}`);
    }
  };
}

const network = Network();

const client1 = Client("Client 1");
const client2 = Client("Client 2");
const client3 = Client("Client 3");

network.registerObserver(client1);
network.registerObserver(client1);
network.registerObserver(client2);

network.setConnectionType("WiFi");

network.removeObserver(client2);
network.registerObserver(client3);

network.setConnectionType("Ethernet");
