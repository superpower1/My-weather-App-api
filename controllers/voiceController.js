const VoiceRes = require('twilio').twiml.VoiceResponse;

const voiceResponse = (req, res) => {
  const twiml = new VoiceRes();
  twiml.say('Hello, this is alice');

  res.type('text/xml');
  res.send(twiml.toString());
}

module.exports = {
  voiceResponse
};
