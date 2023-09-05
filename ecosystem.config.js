module.exports = {
  apps : [{
    name   : "index",
    script : "index.js",
    watch: ['session_auth_info'],
    watch_delay: 500,
  }]
}
