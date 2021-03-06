module.exports = function Server(x){
    var path    = x.path,
        express = x.express,
        morgan  = x.morgan,
        helmet  = x.helmet;
        
    const start = function(){
        var port        = x.config.env.PORT || 8080;
        
        const app = express();
        app.use(morgan('dev'));
        app.use(express.static(path.join(__dirname, '../public')));

        app.use('/truck', x.routes.truck);
        app.use('/user', x.routes.user);

        const server = app.listen(x.config.env.PORT, function()        {
            console.info(x.util.format('The ' + x.config.APP_NAME + ' is running on port %d', port));    
        });
    };

    return {
        start : start
    }
};
