# Applications
## Sending Text Messages to Applicants or Parents
See TextWithGoogleSheets.gs
## Processing interview audio

We rely on https://pypi.python.org/pypi/watson-developer-cloud
* Setup an account on IBM Watson Developer Cloud https://www.ibm.com/watson/developercloud/ You get 1 month free
* Select Speech to Text Service and click create, click credentials and copy and paste ito create_my_credetials.py. Run create_my_credentials.py
* sudo easy_install --upgrade watson-developer-cloud
* run speech_to_test.py test() method to test credentials and setup
* when ready, run process_all_interviews to process. 
# FFMPEG
* install the tool ffmpeg
* convert mp3 to wav: ffmpeg -i testinterview.mp3 testinterview.wav
* downsample: ffmpeg -i testinterview.mp3 -acodec pcm_u8 -ar 22050 testinterview_convertsmall.wav
* extract just a few seconds (180):  ffmpeg -ss 0 -t 180 -i testinterview.mp3 testinterview_short.wav