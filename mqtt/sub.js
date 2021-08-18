var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', function() {
  client.subscribe('Vignesh');
  console.log("connected");
})

client.on('message', function(topic, message){
  console.log("From hivemq:" + message.toString());
})
