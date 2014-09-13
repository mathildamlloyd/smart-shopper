
/*
 * GET search page.
 */

exports.search = function(req, res){
  res.render('search', { title: 'Our Search Page' })
};

exports.postSearch = function(req, res){
  var query = req.query;
  var lookup = query['search-params'];
  res.render('searchResult', { lookup: lookup });
};

exports.searchAmazon = function(upc) {
};
