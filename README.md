# Applications
## Sending Text Messages to Applicants or Parents
See TextWithGoogleSheets.gs
## Processing interview audio

We rely on https://pypi.python.org/pypi/watson-developer-cloud
• Setup an account on IBM Watson Developer Cloud https://www.ibm.com/watson/developercloud/ You get 1 month free
• Select Speech to Text Service and click create, click credentials and copy and paste ito create_my_credetials.py. Run create_my_credentials.py
• sudo easy_install --upgrade watson-developer-cloud
• run speech_to_test.py test() method to test credentials and setup
• when ready, run process_all_interviews to process. 