function newSubmission() {
	var codechefUsernameCol = <Column number with Codechef Username>
	var codeforcesUsernameCol = <Column number with Codeforces Username>

	var codechefRatingCol = <Column number with Codechef Rating>
	var codeforcesRatingCol = <Column number with Codeforces Rating>

	SpreadsheetApp.getActiveSpreadsheet()
		.getSheetByName('Form Responses 1')
		.activate()
	var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
	var lrow = sh.getLastRow()

	var codechefUsername = sh.getRange(lrow, codechefUsernameCol).getValue()
	var codeforcesUsername = sh.getRange(lrow, codeforcesUsernameCol).getValue()

	var codechef = codechefRating(codechefUsername)
	var codeforces = codeforcesRating(codeforcesUsername)

	sh.getRange(lrow, codechefRatingCol).setValue(codechef)
	sh.getRange(lrow, codeforcesRatingCol).setValue(codeforces)
}
