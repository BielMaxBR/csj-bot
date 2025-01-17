/**
 * o que é o videoreaction?
 * bot mandar enviar mensagem de elogio quando um vídeo for postado no chat #videos-novos
 */

const db = require('../connection')

const videoreaction_schema = new db.Schema({
    reaction: String
})

// armazena o número e o chat da próxima frase para mandar
const vdr_events_schema = new db.Schema({
    count: Number,
    chatID: String
})

const videoreaction = db.model('videoreaction', videoreaction_schema)

const vdr_events = db.model('vdr_events', vdr_events_schema)

module.exports = videoreaction
exports.vdreaction = videoreaction
exports.vdr_events = vdr_events