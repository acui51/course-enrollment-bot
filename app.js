// Dynamically import fetch
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Update 30 minutes prior to enrollment
const SESSION_COOKIE =
  "JSESSIONID=13CECC7DB0F6C5F34578150F8654AA20.jvm4; _opensaml_req_ss%3Amem%3A80389c1480ca640e73d0b5caeb0d7e185483619a47c8e38a5289414a247d30d2=_3faaa05bdd712646115626d9b6f54aec; _opensaml_req_ss%3Amem%3Ab83c8c424817024b59db9870fe3d0ae73ee67113e6aee90d43f8de5eed715d1e=_2ceb60355af3e33881a9b8c6fd994c45; _opensaml_req_ss%3Amem%3Abe1b515f39a556b856191793c8fcff84afabc0a16c49be6cc842f1263e2db56b=_13694cd28202825f36b5180cffa9a38c; _opensaml_req_ss%3Amem%3Abd88c537ea829c673472ead611a97e623ea6dc192d4add30872a151c6076d72b=_51069afef8c46c5c7e768fc899d2eb4a; _opensaml_req_ss%3Amem%3A93e1ff254fabb9d942db6da21141d5baccdcc25ac422b7dd396ca98892a3946d=_71bfaed8c1fe767e71fd87860c6466ef; _opensaml_req_ss%3Amem%3A3fd03ebf8e676fedc8a37db8f85e5218f8581638a5d085c40ce88647b501eed6=_528e13ea9bcf6ac00b7d6a34fcb49ac3; _opensaml_req_ss%3Amem%3A4a407009308f89fdf537d8b32298fe0d4e041e095edf595e1c4a23124208822d=_dc68550dd69623ccd00e9182819d58d1; _opensaml_req_ss%3Amem%3A0f54e983e36c5faba98235a8bbcd6cac40d2b15e20ad34cc92a59f8d971550e9=_6d0237140f0011574e0ea4f08cc777eb; _shibsession_617865737368747470733a2f2f61786573732e7374616e666f72642e6564752f=_529c7a9d04f16af270a82cdc72b41e36";

const cs206 = () => {
  try {
    fetch(
      "https://simpleenroll.stanford.edu/SimpleEnroll/appMsgServerProxy?action=SE_EXECUTE_ENROLL",
      {
        headers: {
          accept: "application/xml, text/xml, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "text/xml",
          from: "PSFT_XINBND",
          messagename: "STF_SIMPLE_ENRL_SRVC_OPR.v1",
          messagetype: "Sync",
          "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          cookie: SESSION_COOKIE,
          Referer: "https://simpleenroll.stanford.edu/SimpleEnroll/index",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: "<STF_Simple_Enrollment><Service_Type>Classenroll</Service_Type><Sunetid></Sunetid><PS_TOKEN/><Term>1234</Term><Career>UG</Career><CourseID></CourseID><ClassNumber>8451</ClassNumber><GradingBasis>RLT</GradingBasis><Units>3</Units><WaitList>N</WaitList><DropifEnroll>0</DropifEnroll><PermissionNbr>0</PermissionNbr><SwapWithClassNbr>0</SwapWithClassNbr></STF_Simple_Enrollment>",
        method: "POST",
      }
    );
  } catch (err) {
    console.error(err);
  }
};

const sts1 = () => {
  try {
    fetch(
      "https://simpleenroll.stanford.edu/SimpleEnroll/appMsgServerProxy?action=SE_EXECUTE_ENROLL",
      {
        headers: {
          accept: "application/xml, text/xml, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "text/xml",
          from: "PSFT_XINBND",
          messagename: "STF_SIMPLE_ENRL_SRVC_OPR.v1",
          messagetype: "Sync",
          "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          cookie: SESSION_COOKIE,
          Referer: "https://simpleenroll.stanford.edu/SimpleEnroll/index",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: "<STF_Simple_Enrollment><Service_Type>Classenroll</Service_Type><Sunetid></Sunetid><PS_TOKEN/><Term>1234</Term><Career>UG</Career><CourseID></CourseID><ClassNumber>19034</ClassNumber><GradingBasis>RLT</GradingBasis><Units>4</Units><WaitList>N</WaitList><DropifEnroll>0</DropifEnroll><PermissionNbr>0</PermissionNbr><SwapWithClassNbr>0</SwapWithClassNbr></STF_Simple_Enrollment>",
        method: "POST",
      }
    );
  } catch (err) {
    console.error(err);
  }
};

const tennis = () => {
  try {
    fetch(
      "https://simpleenroll.stanford.edu/SimpleEnroll/appMsgServerProxy?action=SE_EXECUTE_ENROLL",
      {
        headers: {
          accept: "application/xml, text/xml, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "text/xml",
          from: "PSFT_XINBND",
          messagename: "STF_SIMPLE_ENRL_SRVC_OPR.v1",
          messagetype: "Sync",
          "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          cookie: SESSION_COOKIE,
          Referer: "https://simpleenroll.stanford.edu/SimpleEnroll/index",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: "<STF_Simple_Enrollment><Service_Type>Classenroll</Service_Type><Sunetid></Sunetid><PS_TOKEN/><Term>1234</Term><CourseID>102680</CourseID><Career>UG</Career><GradingBasis>RSN</GradingBasis><Units>1</Units><WaitList>N</WaitList><DropifEnroll>0</DropifEnroll><PermissionNbr>0</PermissionNbr><SwapWithClassNbr>0</SwapWithClassNbr><ClassNumber>31221</ClassNumber></STF_Simple_Enrollment>",
        method: "POST",
      }
    );
  } catch (err) {
    console.error(err);
  }
};

const socialDance = () => {
  try {
    fetch(
      "https://simpleenroll.stanford.edu/SimpleEnroll/appMsgServerProxy?action=SE_EXECUTE_ENROLL",
      {
        headers: {
          accept: "application/xml, text/xml, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "text/xml",
          from: "PSFT_XINBND",
          messagename: "STF_SIMPLE_ENRL_SRVC_OPR.v1",
          messagetype: "Sync",
          "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          cookie: SESSION_COOKIE,
          Referer: "https://simpleenroll.stanford.edu/SimpleEnroll/index",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: "<STF_Simple_Enrollment><Service_Type>Classenroll</Service_Type><Sunetid></Sunetid><PS_TOKEN/><Term>1234</Term><CourseID>125331</CourseID><Career>UG</Career><GradingBasis>RSN</GradingBasis><Units>1</Units><WaitList>N</WaitList><DropifEnroll>0</DropifEnroll><PermissionNbr>0</PermissionNbr><SwapWithClassNbr>0</SwapWithClassNbr><ClassNumber>14416</ClassNumber></STF_Simple_Enrollment>",
        method: "POST",
      }
    );
  } catch (err) {
    console.error(err);
  }
};

const enrollCourses = () => {
  // course enrollment go brr...
  while (true) {
    cs206();
    sts1();
    tennis();
    socialDance();
  }
};

enrollCourses();
