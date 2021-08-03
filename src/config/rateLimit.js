module.exports = {
    requests: {
        rateLimit: {
            window: 15 * 60 * 1000, //ms
            max: 100,
        },    
        slowDown: {
            window: 15 * 60 * 1000, //ms
            delayAfter: 100,
            delayMs: 100,
        },  
    },
};