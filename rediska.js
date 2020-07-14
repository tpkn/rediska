/*!
 * rediska, http://tpkn.me/
 */
const redis = require('redis');
const { promisify } = require('util');

module.exports = (client, options = {}) => {
   let { 
      silent = false 
   } = options;
   
   if(typeof client === 'undefined'){
      client = redis.createClient();
   }

   if(silent){
      client.on('error', () => {});
   }

   let rediska = {};
   let list = [ 
      "append", "asking", "auth", 
      "bgrewriteaof", "bgsave", "bitcount", "bitfield", "bitop", "bitpos", "blpop", "brpop", "brpoplpush", "bzpopmax", "bzpopmin", 
      "client", "cluster", "command", "config", 
      "dbsize", "debug", "decr", "decrby", "del", "discard", "dump", 
      "echo", "eval", "evalsha", "exec", "exists", "expire", "expireat", 
      "flushall", "flushdb", 
      "get", "getbit", "getrange", "getset", 
      "hdel", "hexists", "hget", "hgetall", "hincrby", "hincrbyfloat", "hkeys", "hlen", "hmget", "hmset", "host:", "hscan", "hset", "hsetnx", "hstrlen", "hvals", 
      "incr", "incrby", "incrbyfloat", "info", 
      "keys", 
      "lastsave", "latency", "lindex", "linsert", "llen", "lolwut", "lpop", "lpush", "lpushx", "lrange", "lrem", "lset", "ltrim", 
      "memory", "mget", "migrate", "module", "monitor", "move", "mset", "msetnx", "multi", 
      "object", 
      "persist", "pexpire", "pexpireat",  "ping", "post", "psetex", "psubscribe", "psync", "pttl", "publish", "pubsub", "punsubscribe", 
      "quit", 
      "randomkey", "readonly", "readwrite", "rename", "renamenx", "replconf", "replicaof", "restore", "restore-asking", "role", "rpop", "rpoplpush", "rpush", "rpushx", 
      "sadd", "save", "scan", "scard", "script", "sdiff", "sdiffstore", "select", "set", "setbit", "setex", "setnx", "setrange", "shutdown", "sinter", "sinterstore", "sismember", "slaveof", "slowlog", "smembers", "smove", "sort", "spop", "srandmember", "srem", "sscan", "strlen", "subscribe", "substr", "sunion", "sunionstore", "swapdb", "sync", 
      "time", "touch", "ttl", "type", 
      "unlink", "unsubscribe", "unwatch", 
      "wait", "watch", 
      "xack", "xadd", "xclaim", "xdel", "xgroup", "xinfo", "xlen", "xpending", "xrange", "xread", "xreadgroup", "xrevrange", "xsetid", "xtrim", 
      "zadd", "zcard", "zcount", "zincrby", "zinterstore", "zlexcount", "zpopmax", "zpopmin", "zrange", "zrangebylex", "zrangebyscore", "zrank", "zrem", "zremrangebylex", "zremrangebyrank", "zremrangebyscore", "zrevrange", "zrevrangebyscore", "zrevrank", "zscan", "zscore", "zunionstore"
   ];

   for(let i = 0, len = list.length; i < len; i++){
      let cmd = list[i];
      rediska[cmd] = promisify(client[cmd]).bind(client);
   }

   return { redis, client, rediska };
}
