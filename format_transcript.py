import json
from pprint import pprint

def pptranscript(transcript_file):
	with open(transcript_file) as data_file:
		data=json.load(data_file)
	#data.keys(): [u'warnings', u'speaker_labels', u'result_index', u'results']
	speakers={}
	for d in data['speaker_labels']:
		speakers[float(d['from'])]=d['speaker']
	all_st=[]
	last_speaker=None
	for l in data['results']:
		speaker_times=(float(l['alternatives'][0]['timestamps'][0][-2]),float(l['alternatives'][0]['timestamps'][-1][-1]))
		all_st+=[speaker_times[0]]
		if speakers.has_key(speaker_times[0]):
			this_speaker=[speakers[speaker_times[0]],l['alternatives'][0]['transcript'].strip()]
			if not last_speaker:
				last_speaker=this_speaker
			elif last_speaker:
				if last_speaker[0]==this_speaker[0]:
					last_speaker[1]+=', '+this_speaker[1]
				else:
					print 'Speaker '+str(last_speaker[0])+': '+last_speaker[1]
					last_speaker=this_speaker
	if last_speaker:
		print 'Speaker '+str(last_speaker[0])+': '+last_speaker[1]

def test():
	pptranscript('tests/testinterview_tiny_transcript.txt')



if __name__ == '__main__':
	test()