function codeforcesRating(user) {
	var codeforces = UrlFetchApp.fetch('https://codeforces.com/profile/' + user)
	var codeforcesRatingTagRegExp = new RegExp(
		'Contest rating:[\n|\r]*.*<span class="smaller">'
	)
	var codeforcesRatingTag = codeforcesRatingTagRegExp.exec(
		codeforces.getContentText()
	)[0]
	var codeforcesRatingRegExp = new RegExp('[0-9]+')
	var codeforcesRating = codeforcesRatingRegExp.exec(codeforcesRatingTag)[0]
	return codeforcesRating
}
