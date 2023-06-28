module.exports = {
    HOST : process.env.DB_HOST,
    USER : process.env.DB_USERNAME,
    PASSWORD : process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect : "mysql",
    pool:{  //Pool Configuration for MYSQL Conn
        max: 5, //maximum number of connections in Pool
        min: 0, //minimum number of connections in Pool
        acquire: 30000, //maximum time in ms that pool will try to get connection before throwing error
        idle : 10000 //maximum time in ms, that a connection can be idle before being released
    }
};

