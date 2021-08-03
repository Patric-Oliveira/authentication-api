module.exports = {
    app: {
        port: process.env.PORT || 8080,
    },
    db: {
        connectionString: process.env.MONGO_DB,
    },
};