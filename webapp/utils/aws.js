var aws = require("aws-lib");

exports.searchItemAmazon = function(options) {
  var prodAdv = aws.createProdAdvClient(
    global.KEYS.ACCESS_KEY_ID,
    global.KEYS.SECRET_ACCESS_KEY,
    global.KEYS.ASSOCIATE_ID
  );
  prodAdv.call("ItemSearch", options, function(err, result) {
    console.log(JSON.stringify(result));
  });
}

exports.lookupItemAmazon = function(options, callback) {
  var prodAdv = aws.createProdAdvClient(
    global.KEYS.ACCESS_KEY_ID,
    global.KEYS.SECRET_ACCESS_KEY,
    global.KEYS.ASSOCIATE_ID
  );
  prodAdv.call("ItemLookup", options, callback);
}

exports.lookupUPCAmazon = function(upc, callback) {
  if (upc.length != 12) {
    // Error - UPC codes are 12 characters
    return;
  }
  var options = {
    IdType: "UPC",
    ItemId: upc,
    SearchIndex: "All",
    ResponseGroup: "Medium"
  };
  //console.log(JSON.stringify(options));
  return exports.lookupItemAmazon(options, callback);
}
