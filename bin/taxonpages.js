#!/usr/bin/env node

import { fileURLToPath } from 'url'
import { createServer } from 'vite'
import { loadConfiguration } from '@taxonpages/config'
import { createServer as createSSRServerfrom } from '@taxonpages/ssr'
import { makeViteConfiguration } from '@taxonpages/vite'
import yargsParser from 'yargs-parser'

const { _ } = yargsParser(process.argv.slice(2), {
  boolean: ['https', 'open', 'strictPort', 'force', 'cors', 'debug'],
  number: ['port']
})

const port = 6173
const __dirname = fileURLToPath(new URL('..', import.meta.url))

if (_.includes('dev:ssr')) {
  createSSRServerfrom({
    configuration: {
      ...makeViteConfiguration(loadConfiguration(process.cwd())),
      configFile: false
    }
  }).then(({ app }) =>
    app.listen(port, () => {
      // generateConsoleMessage({ port, url: 'http://localhost' })
    })
  )
} else {
  startDevServer()
}

async function startDevServer() {
  /*   const configFile = rwPaths.web.viteConfig

  if (!configFile) {
    throw new Error('Could not locate your web/vite.config.{js,ts} file')
  } */

  // Tries to maintain the same options as vite's dev cli
  // See here: https://github.com/vitejs/vite/blob/main/packages/vite/src/node/cli.ts#L103
  // e.g. yarn rw dev web --fwd="--force"
  const {
    force: forceOptimize,
    forwardedServerArgs,
    debug
  } = yargsParser(process.argv.slice(2), {
    boolean: ['https', 'open', 'strictPort', 'force', 'cors', 'debug'],
    number: ['port']
  })

  const devServer = await createServer({
    configFile: __dirname + '/src/vite.config.js',
    mode: 'development',
    base: './',
    root: process.cwd()
  })

  /*   const devServer = await createServer({
    configFile,
    envFile: false, // env file is handled by plugins in the redwood-vite plugin
    optimizeDeps: {
      // This is the only value that isn't a server option
      force: forceOptimize
    },
    server: forwardedServerArgs,
    logLevel: debug ? 'info' : undefined
  }) */

  await devServer.listen()

  process.stdin.on('data', async (data) => {
    const str = data.toString().trim().toLowerCase()
    if (str === 'rs' || str === 'restart') {
      await devServer.restart(true)
    }
  })

  devServer.printUrls()

  if (debug) {
    console.log('~~~ Vite Server Config ~~~')
    console.log(JSON.stringify(devServer.config, ' ', 2))
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~')
  }
}
