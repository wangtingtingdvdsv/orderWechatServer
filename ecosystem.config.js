module.exports = {
  apps : [{
    name: 'orderWechatServer',
    script: 'orderWechatServer.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '120.79.192.19',
      ref  : 'origin/master',
      repo : 'git@github.com:wangtingtingdvdsv/orderWechatServer.git',
      path : '/wangtingting/project/orderWechatServer',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
