
host     =  'b2rqucoo44cvfcc-mongodb.services.clever-cloud.com',
db       =  'b2rqucoo44cvfcc',
user     =  'u5oyhwjhaiow6jbppun0',
port     =  '27017',
password = 'BfQfs3textNCcSINa5TG'

module.exports = {
    database:[`mongodb://${user}:${password}@${host}:${port}/${db}`]
};