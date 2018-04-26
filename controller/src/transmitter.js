import mqtt from 'mqtt';

class Transmitter {
  constructor({ url, username, password, channel, channels }) {
    this.client = mqtt.connect(url, {
      clean: true,
      rejectUnauthorized: false,
      username: username,
      password: password,
      clientId: "from_my_pc"
    });
    this.channel = channel;
    this.channels = channels;
    this.client.on('connect', () => {
    });
    this.moveDown = this.moveDown.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.stopMovement = this.stopMovement.bind(this);
    this.mexicanWave = this.mexicanWave.bind(this);
    this.initChannel = this.initChannel.bind(this);
  }

  sendMessage(channel, message) {
    this.client.publish(channel, message);
  }

  moveUp() {
    this.sendMessage(this.channel, "up");
  }

  moveDown() {
    this.sendMessage(this.channel, "down");
  }

  stopMovement() {
    this.sendMessage(this.channel, "stop");
  }

  initChannel(channel) {
    this.sendMessage(channel, "up");
    setTimeout(() => this.sendMessage(channel, "down"), 10000);
  }

  mexicanWave(){
    this.channels.map((channel, i) => {
      return setTimeout(() => this.initChannel(channel), i * 5000);
    })
  }
}

export default Transmitter;