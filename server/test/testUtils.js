
module.exports = {
  prepareDb: (next) => {
    exec('createdb testdb', (err) => {
      if (err) {
        console.log('exec error: ' + err);
      }
      exec('psql -d testdb -f test/testdb.sql', (err) => {
        if (err) {
          console.log('exec error: ' + err);
        }
        next(err);
      });
    });
  },
  cleanDb: (next) => {
    exec('psql -d somedb -f test/dropdb.sql', function(err){
      if (err !== null) {
        console.log('exec error: ' + err);
      }
      next();
    });
  }
}