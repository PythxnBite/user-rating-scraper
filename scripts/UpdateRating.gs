function updateRatings() {
	var codechefUsernameCol = <Column number with Codechef Username>
	var codeforcesUsernameCol = <Column number with Codeforces Username>

	var codechefRatingCol = <Column number with Codechef Rating>
	var codeforcesRatingCol = <Column number with Codeforces Rating>

	SpreadsheetApp.getActiveSpreadsheet()
		.getSheetByName('Form Responses 1')
		.activate()
	var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
	var lrow = sh.getLastRow()
	var rowInd
	for (rowInd = 2; rowInd <= lrow; rowInd++) {
		var codechefUsername = sh
			.getRange(rowInd, codechefUsernameCol)
			.getValue()
		var codeforcesUsername = sh
			.getRange(rowInd, codeforcesUsernameCol)
			.getValue()

		sh.getRange(rowInd, codechefRatingCol).setValue(
			codechefRating(codechefUsername)
		)
		sh.getRange(rowInd, codeforcesRatingCol).setValue(
			codeforcesRating(codeforcesUsername)
		)
	}
}
