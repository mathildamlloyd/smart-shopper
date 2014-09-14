var aws = require("aws-lib");
var searchUtils = require('../utils/aws.js');


/*
 * GET search page.
 */

exports.search = function(req, res){
  res.render('search', { title: 'Our Search Page' })
};

exports.postSearch = function(req, res){
  var query = req.body;
  var lookup = query['search-params'];
  var callback = function(err, result) {
    res.render('searchResult', { lookup: lookup, items: result.Items.Item });
  }
  searchUtils.lookupUPCAmazon(lookup, callback);
};

exports.searchAmazon = function(options) {
  var prodAdv = aws.createProdAdvClient(
    global.KEYS.ACCESS_KEY_ID,
    global.KEYS.SECRET_ACCESS_KEY,
    global.KEYS.ASSOCIATE_ID
  );
  prodAdv.call("ItemSearch", options, function(err, result) {
    console.log(JSON.stringify(result));
  });
};
