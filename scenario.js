var scenario = {
	intro : {
		image: 'la_mine_et_l_efface.png',
		musique: 'The Chase.mp3',
		bouton: {x: 1280/2, y: 280},
	},
	outro : {
		image: 'bravo.png',
		//musique: 'The Chase.mp3',
		bouton: {x: 1280/2, y: 580},
	},
	sequences : {
		'gommeOuCrayon':{
			id: 'clip1',
			video:'clips/seq1.mp4',
			choices: [
				{x:311, y:451, suivant:'gommeErreurPeutPasEffacer'},
				{x:1028, y:471, suivant: 'crayon'},
				{dialogue:"J'ai pas compris.", suivant: 'gommeOuCrayon'}  ,
				{dialogue:"Je ne suis pas intéressé, on peut en finir ?", suivant: 'gomme'},
			]
		},
		'gommeErreurPeutPasEffacer':{
			id: 'clip2',
			video: 'clips/seq2.mp4',
			choices:[
				{dialogue:"Bon alors montre moi le crayon", suivant: 'crayon'}
			]
		},
		'crayon':{
			id: 'clip3',
			video: 'clips/seq3.mp4',
			choices: [
				{x:790, y:567, suivant: 'gomme'}
			]
		},
		'gomme':{
			id: 'clip4',
			video: 'clips/seq4.mp4',
			choices: []
		}
	}
}