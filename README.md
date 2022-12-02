# course-enrollment-bot

# How to use:
## Long time before enrollment
- Clone the repo
- Put in your own course request fetches. You can find these requests by going to SimpleEnroll, clicking enroll on a course, and pulling up the Network request tab in Chrome Dev Tools.
- Fire a test enrollment request and find the corresponding request in the Network tab like so:
![image](https://user-images.githubusercontent.com/62365251/205172410-db5210a1-ec3a-41f9-929f-47d0787690a7.png)
- Copy the request as a Node.js fetch like so:
![image](https://user-images.githubusercontent.com/62365251/205172552-ee67b592-de35-48b2-a871-95f7fe657868.png)
- Paste that into the code you cloned

## ~30 minutes prior to enrollment
Update the `SESSION_COOKIE` variable in `app.js` by firing off a test request and copy the cookie in the request headers like so:
![image](https://user-images.githubusercontent.com/62365251/205172772-871cc553-7c52-4097-83fc-248790d92fee.png)

## 2-3 minutes prior to enrollment
Run `node app.js` in your terminal and profit B)

Note: The app might crash so just restart it

