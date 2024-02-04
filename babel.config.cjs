const debug = require('debug')

const log = debug('shinkansen')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`shinkansen` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            node: 'current',
            browsers: [
              'last 4 versions',
              'safari >= 9',
              'ios >= 8',
              'ie >= 9',
              '> 2%'
            ]
          },
          useBuiltIns: 'usage',
          corejs: 3
        }
      ],
      '@babel/react'
    ],
    ignore: [
      /node_modules\/(?!shinkansen|@modernpoacher)/
    ]
  }
}
