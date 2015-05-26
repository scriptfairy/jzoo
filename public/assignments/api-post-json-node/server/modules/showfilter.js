function showFilter(shows) {
	var filtered = [];
	for(var i in shows){
		var entry = shows[i];
		if(entry.drm && entry.episodeCount) {
			var o = {};
			o.image = entry.image.showImage || '';
			o.slug = entry.slug;
			o.title = entry.title;
			filtered.push(o); 
		}
	}	
	return filtered;
}

module.exports = showFilter;


		