module.exports = function(app) {
  var Admin = app.models.admin;
Admin.create([
    {username: '95845380', email: 'achref.benhmed@gmail.com', password: 'adminessh'},
 
], function(err, users) {
    if (err) return (err);
  });
};