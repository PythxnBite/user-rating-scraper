function codechefRating(user) {
	var codechef = UrlFetchApp.fetch('https://www.codechef.com/users/' + user)
	var codechefRatingTagRegExp = new RegExp(
		'<div class="rating-number">.*</div>',
		'gi'
	)
	var codechefRatingTag = codechefRatingTagRegExp.exec(
		codechef.getContentText()
	)[0]
	var codechefRatingRegExp = new RegExp('[0-9]+')
	var codechefRating = codechefRatingRegExp.exec(codechefRatingTag)[0]
	return codechefRating
}
