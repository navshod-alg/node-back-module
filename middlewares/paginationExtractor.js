function paginationExtractor(req, res, next){
	if(req.query){
		let limit = (req.query.limit ? Number(req.query.limit) : 10);
		let offset = (req.query.offset ? Number(req.query.offset) : 0);
		req.body.pagination = {limit, offset};
		delete req.query.limit;
		delete req.query.offset;
	}
}

module.exports = paginationExtractor;