module.exports = {
  apps : [{
    name   : "index",
    script : "index.js",
    watch: ['session_auth_info','public'],
    watch_delay: 500,
  }]
}
