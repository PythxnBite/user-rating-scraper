# user-rating-scraper
Scrapes Codechef and Codeforces Rating and displays in google sheets


# Step - 1
- Create a Google Sheet and Add Header with names you want
- Create a New Google Form and collect Codechef and Codeforces username in form(Make sure to keep the username fields with same name).
- Select the previous Google sheet as export location for the form.
# Step - 2
- In Google sheets, open Script editor under **Tools** tab.
- Copy Paste all `.gs` scripts into the script editor.
- If you changed your sheet name, Replace `Form Response 1` with the required name in all scripts.
  
# Step - 3
- Enter the designated column numbers for both usernames and ratings in `NewSubmission.gs` and `UpdateRating.gs`

# Step - 4
- Open triggers for the Container(its the clock to the left of play button in script editor at this moment)
- Create a new Trigger and select `newSubmission` as function to run and `On form submit` as event type and save(Choose other settings as per requirement).
- Create a new Trigger and select `updateRatings` as function to run and `Time-driven` as event source and save(Choose other settings accordingly).
