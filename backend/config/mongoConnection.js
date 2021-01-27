const MongoClient = require( 'mongodb' ).MongoClient;
const url = process.env.MONGO_URI;
const database = process.env.MONGO_DB;

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true, useUnifiedTopology: true }, function( err, client ) {
      _db  = client.db(database);
      return callback( err );
    } );
  },

  getDatabase   : function() {
    return _db;
  }
};