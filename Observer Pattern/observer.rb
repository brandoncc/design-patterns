class Subject
  def initialize
    @observers = []
  end

  def register_observer(observer)
    return if @observers.include?(observer)

    @observers << observer
  end

  def remove_observer(observer)
    @observers.reject! { |obs| obs == observer }
  end

  def notify_observers(message)
    @observers.each { _1.update(message) }
  end
end

class Network < Subject
  def set_connection_type(type)
    notify_observers("The network is now connected via: #{type}")
  end
end

class Observer
  def update(_data)
    raise NotImplementedError, "#update must be defined in observer subclasses"
  end
end

class Client < Observer
  def initialize(nickname)
    @nickname = nickname
  end

  def update(message)
    puts "#{@nickname}: #{message}"
  end
end

network = Network.new

client1 = Client.new("Client 1")
client2 = Client.new("Client 2")
client3 = Client.new("Client 3")

network.register_observer(client1)
network.register_observer(client1)
network.register_observer(client2)

network.set_connection_type("WiFi")

network.remove_observer(client2)
network.register_observer(client3)

network.set_connection_type("Ethernet")
