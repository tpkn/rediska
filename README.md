# Rediska [![npm Package](https://img.shields.io/npm/v/rediska.svg)](https://www.npmjs.org/package/rediska)
Redis commands in async format



## API

```javascript
const rediska = require('rediska')([client]);
```


## client
**Type**: _Object_ 
Custom redis client instance



### @output
**Type**: _Object_  
```javascript
{ redis, client, rediska }
```


## Usage   
```javascript
const { redis, client, rediska } = require('rediska')();

(async() => {

   let ping = await rediska.ping();
   // => PONG

   await rediska.set('ping', `${ping}: ${Date.now()}`);
   // => OK

   await rediska.get('ping');
   // => PONG: 1594743040071

})();
```
