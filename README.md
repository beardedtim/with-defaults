# with-defaults

## Usage

```js
const withDefaults = require('with-defaults')

const serverDefaults = withDefaults({
  host: 'localhost',
  port: 5001
})

const serverOpts = {
  host: 'host.com'
}

serverDefaults(serverOpts) // { host: 'host.com', port: 5001 }

// or inside of a function

const createServer = opts => {
  const config = serverDefaults(opts) 
}
```