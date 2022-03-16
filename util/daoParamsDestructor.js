function daoParamsDestructor(params){
	let destructed = {};
	if(!params) return;
	if(params.where) destructed.where = params.where;
	if(params.transaction) destructed.transaction = params.transaction;
	if(params.attributes) destructed.attributes = params.attributes;
	if(params.pagination){
		destructed.limit = params.pagination.limit;
		destructed.offset = params.pagination.offset;
		// (params.pagination.limit ? destructed.limit = params.limit : 10);
		// (params.pagination.offset ? destructed.offset = params.offset - 1 : 0);
	}
	destructed.raw = (params.raw ? params.raw : true);
	return destructed;
}

module.exports = daoParamsDestructor;