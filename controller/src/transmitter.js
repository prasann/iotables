import mqtt from 'mqtt';

class Transmitter {
  constructor({ url, username, password, channel }) {
    this.client = mqtt.connect(url, {
      clean: true,
      rejectUnauthorized: false,
      username: username,
      password: password,
      clientId: "from_my_pc"
    });
    this.channel = channel;
    this.client.on('connect', () => {
    });
  }

  sendMessage(message) {
    this.client.publish(this.channel, message);
  }
}

export default Transmitter;