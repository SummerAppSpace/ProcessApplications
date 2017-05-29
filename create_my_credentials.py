credentials={ 
  "url": "https://stream.watsonplatform.net/speech-to-text/api",
  "username": YOURUSERNAME,
  "password": YOURPASSWORD
}

import pickle
output=open('credentials.pkl','wb')
pickle.dump(credentials,output)