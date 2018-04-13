var elasticsearch = require('elasticsearch');
const s = require('elasticsearch-synonyms');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
//  log: 'trace'
});
client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 3000
  }, function (error) {
    if (error) {
      console.trace('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });
  exports.searchitems= (req, res) =>{
    var searchquery=req.body.search;
    console.log(searchquery)
  client.search({
    index: 'bicycles',
    type: 'kids',
    body: {
        query: {
            match: {
                "Brands": searchquery
            }
        }
    }
}).then(function(resp) {
  var hits = resp.hits.hits;
  console.log(hits._source.Brands)
  // hits.forEach(function(element) {
  //   var get=element._source.Brands;
  //   console.log(get)
  //   res.send(get)
  // });
  res.send({hits})
}, function(err) {
    console.trace(err.message);
});
  }