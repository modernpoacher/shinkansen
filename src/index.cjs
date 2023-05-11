require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-cogs')

log('`shinkansen` is awake')

const Cogs = require('shinkansen-cogs')
const Sprockets = require('shinkansen-sprockets')
const { Gears } = require('shinkansen-gears')
const { Pinion } = require('shinkansen-pinion')
const { Rails } = require('shinkansen-rails')
const { Relay } = require('shinkansen-relay')
const { Signals } = require('shinkansen-signals')
const { Pantograph } = require('shinkansen-pantograph')
const Transmission = require('shinkansen-transmission')
const { Engine } = require('shinkansen-engine')

module.exports.Cogs = Cogs
module.exports.Sprockets = Sprockets
module.exports.Gears = Gears
module.exports.Pinion = Pinion
module.exports.Rails = Rails
module.exports.Relay = Relay
module.exports.Signals = Signals
module.exports.Pantograph = Pantograph
module.exports.Transmission = Transmission
module.exports.Engine = Engine
