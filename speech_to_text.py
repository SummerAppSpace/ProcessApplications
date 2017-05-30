import json
from os.path import join, dirname
from watson_developer_cloud import SpeechToTextV1
import pickle
pkl_file=open('credentials.pkl')
credentials=pickle.load(pkl_file)

speech_to_text = SpeechToTextV1(
    username=credentials['username'],
    password=credentials['password'],
    x_watson_learning_opt_out=False
)

def test():
	outfile=open('tests/testinterview_tiny_transcript.txt','w')
	# Gives all available models:
	#print(json.dumps(speech_to_text.models(), indent=2))
	# Shows how to access a model:
	#print(json.dumps(speech_to_text.get_model('en-US_BroadbandModel'), indent=2))

    # Definition: speech_to_text.recognize(self, audio, content_type, continuous=False, model=None, customization_id=None, inactivity_timeout=None, keywords=None, keywords_threshold=None, max_alternatives=None, word_alternatives_threshold=None, word_confidence=None, timestamps=None, interim_results=None, profanity_filter=None, smart_formatting=None, speaker_labels=None)
    # Docstring:  Returns the recognized text from the audio input
	with open(join(dirname(__file__), 'tests/testinterview_tiny.wav'),
	          'rb') as audio_file:
	    outfile.write(json.dumps(speech_to_text.recognize(audio_file, content_type='audio/wav', 
	        timestamps=True,
	        speaker_labels=True,
	        smart_formatting=True
			),
	        indent=2))

if __name__ == '__main__':
	test()