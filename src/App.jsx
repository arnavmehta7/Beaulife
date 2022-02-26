import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import logo from '../beaulife.png';
export default function App() {
const questions = [
		{
			questionText: 'When Do you Sleep Everyday?',
			answerOptions: [
				{ answerText: 'Before Midnight', isCorrect: 1 },
				{ answerText: 'After Midnight', isCorrect: 2 },
				{ answerText: 'Its not fixed', isCorrect: 3 },
				{ answerText: 'In Evening', isCorrect: 4 },
			],
			recommendation: [
				'Keep Going, Sleeping Early keeps one energetic and in good mood!',
				'Sleeping after midnight can cause many disorders and mood alteration, Working in lack of sunlight cause bad effect on memory; Try to sleep Earlier!',
				'',
				'Yes!, Sleeping early and waking early causes boost in health and memory. '
			],
		},
		{
			questionText: 'How many Hours you sleep?',
			answerOptions: [
				{ answerText: '7-9 hours', isCorrect: 1 },
				{ answerText: 'More than 9 hours', isCorrect: 2 },
				{ answerText: '6-7 hours', isCorrect: 3 },
				{ answerText: '4-6 hours', isCorrect: 4 },
			],
			recommendation: [
				'',
				"Many people like Einstein slept for about 10hours a day, Sleeping longer is found to be very beneficial for brain, removal of toxins and memory",
				'Sleeping for 6-7 hours are enough for old aged people, but for adults and students they should not try to sacrifice sleep for work, instead sacrifice the distractions. ',
				'Our body has fixed number of biological processes, if you sleep less then body have to do the same processes in less time and also  have to give up some of them, this can make one delusional. Please sleep more for better lifestyle and mental health. It is found that lack of sleep can cause sleep depts and leads to various diseases. The removal of all the toxins in brain as well as body can become difficult!'
			],
		},
		{
			questionText: 'Do you wake and sleep at the same time?',
			answerOptions: [
				{ answerText: 'Always ', isCorrect: 1 },
				{ answerText: 'Generally Yes', isCorrect: 2 },
				{ answerText: 'No', isCorrect: 3 },
				{ answerText: 'Rarely', isCorrect: 3 },
			],
			recommendation: [
				'',
				'',
				'All organisms seek stability, and sleeping and waking at same time provides you with a schedule, this provides your mind stability and lowers down the various hormones related to depression. You should regulate your sleeping habits.',
				'Sleeping and Waking up everyday at same time gives person stability and thus less prone to depression and other mental problems, people who are constantly disrupted in their sleep cycles face various hurdles, and poor mental health. '
			],
		},
	{
		questionText: 'Do you get solitude daily in form of meditation or other?',
		answerOptions: [
			{answerText:'Yes, it is a part of my life'},
			{answerText:'I have just started'},
			{answerText:'Sometimes'},
			{answerText:"No,I don't"},
		],
		recommendation: [
			'',
			'Solitude is important to free up your mind from the chaos and increase the ability to focus. Do not let this habit go away',
			'Soon this Solitude will lead to increase in your efficiency and focus. You must do it everyday for your wellbeing',
			'Solitude is important to free up your mind from the chaos and increase the ability to focus. One must do it everyday for their wellbeing'
		]
	},
	{
		questionText: 'Do you eat something within 2 hours of waking up and have healthy meals atleast twice a day?',
		answerOptions: [
			{answerText:'Generally Yes'},
			{answerText:'Always'},
			{answerText:'Never'},
			{answerText:'Sometimes'},
		],
		recommendation: [
			'Eating after waking up gives your metabolism a kick-start and having balanced meals during the day prevents any sort of illness due to deficiency of minerals. After about 8 hours of sleep our body needs some food to thrive! ',
			'Eating after waking up gives your metabolism a kick-start and having balanced meals during the day prevents any sort of illness due to deficiency of minerals. It is good that you eat early after waking up.',
			'If you take food at wrong times, without any schedule it can affect the insulin levels and cause sleepiness and tiredness, eating after waking up gives your metabolism a kick-start and supporting it by eating at a regulated level would provide you solid flow of energy for focus, work and wellbeing',
			'If you take food at wrong times, without any schedule it can affect the insulin levels and cause sleepiness and tiredness, eating after waking up gives your metabolism a kick-start and supporting it by eating at a regulated level would provide you solid flow of energy for focus, work and wellbeing'
		]
	},

	{
		questionText: 'Do you Love yourself?',
		answerOptions: [
			{answerText:'I love myself!'},
			{answerText:'I hate myself'},
			{answerText:'I am Ok with myself'},
			{answerText:'Sometimes Yes , Sometimes No'},
		],
		recommendation: [
			'',
			'You should always love, and should never beat yourself, no matter what had happened because if you do so, it lowers down the self esteem and make you feel like a defeated person. It is seen that the people who do not love themselves do not even take the medicines at right time, this can cause serious issues. Always Love Yourself!',
			'You should always love, and should never beat yourself, no matter what had happened because if you do so, it lowers down the self esteem and make you feel like a defeated person. It is seen that the people who do not love themselves do not even take the medicines at right time, this can cause serious issues. Always Love Yourself!',
			'You should always love, and should never beat yourself, no matter what had happened because if you do so, it lowers down the self esteem and make you feel like a defeated person. It is seen that the people who do not love themselves do not even take the medicines at right time, this can cause serious issues. Always Love Yourself!'
		]
	},

	{
		questionText: 'Do you keep comparing yourself with others?',
		answerOptions: [
			{answerText:'Yes, I do'},
			{answerText:'Mostly'},
			{answerText:'Never'},
			{answerText:"Sometimes"},
		],
		recommendation: [
			'Everyone is born in different circumstances, different enviroments, and different genes. If you compare yourself, then you are not growing for yourself , you are just working to defeat others. If they were worser than you, Would you even Grow for yourself? Comparison can leads to putting the other person down, rather than bringing oneself up.',
			'Everyone is born in different circumstances, different enviroments, and different genes. If you compare yourself, then you are not growing for yourself , you are just working to defeat others. If they were worser than you, Would you even Grow for yourself? Comparison can leads to putting the other person down, rather than bringing oneself up.',
			'',
			'Everyone is born in different circumstances, different enviroments, and different genes. If you compare yourself, then you are not growing for yourself , you are just working to defeat others. If they were worser than you, Would you even Grow for yourself? Comparison can leads to putting the other person down, rather than bringing oneself up.'
		]
	},

	{
		questionText: 'Do you talk nicely to people and listen carefully?',
		answerOptions: [
			{answerText:'Always!'},
			{answerText:'Mostly No'},
			{answerText:'Generally Yes'},
			{answerText:'Sometimes'},
		],
		recommendation: [
			'',
			'One should always assume that the second person can know something more valuable and more, We should not just wait for the second person to stop talking in a conversation, rather than enjoy it ,and talking politely and carefully.',
			'One should always assume that the second person can know something more valuable and more, We should not just wait for the second person to stop talking in a conversation, rather than enjoy and talking politely and carefully.',
			'One should always assume that the second person can know something more valuable and more, We should not just wait for the second person to stop talking in a conversation, rather than enjoy and talking politely and carefully.'
		]
	},

	{
		questionText: 'Do you think or fantasize about past events?',
		answerOptions: [
			{answerText:'Yes, a lot.'},
			{answerText:'Generally Yes'},
			{answerText:"Past is gone,I don't"},
			{answerText:'Mostly No'},
		],
		recommendation: [
			'Past is simply gone, Even the best historians cannot bring it back. There is no point in recalling and thinking about other things you could have done. Instead of thinking about the past, think what you can do in the present that can make you better than before. If there is something bad happened to you,just face it, write it down and fight with it. Kill that dragon before it becomes more powerful.  ',
			'Past is simply gone, Even the best historians cannot bring it back. There is no point in recalling and thinking about other things you could have done. Instead of thinking about the past, think what you can do in the present that can make you better than before. If there is something bad happened to you,just face it, write it down and fight with it. Kill that dragon before it becomes more powerful. ',
			' ',
			'Past is simply gone, Even the best historians cannot bring it back. There is no point in recalling and thinking about other things you could have done. Instead of thinking about the past, think what you can do in the present that can make you better than before. If there is something bad happened to you,just face it, write it down and fight with it. Kill that dragon before it becomes more powerful.  '
		]
	},

{
		questionText: 'Do you do something everyday that provides you Joy or Happiness?',
		answerOptions: [
			{answerText:'Absolutely YES'},
			{answerText:'No'},
			{answerText:'Sometimes'},
			{answerText:'I rarely get chance.'},
		],
		recommendation: [
			'',
			"Happiness and Satisfaction are the master factors that controls the other factors like focus, thinking and work power. If you don't get these for even a small time in day, then it can lead to depression, and other mental issues and only on occasion of something happening good, you start to become a better person with a better lifestyle.",
			"Happiness and Satisfaction are the master factors that controls the other factors like focus, thinking and work power. If you don't get these for even a small time in day, then it can lead to depression, and other mental issues and only on occasion of something happening good, you start to become a better person with a better lifestyle.",
			"Happiness and Satisfaction are the master factors that controls the other factors like focus, thinking and work power. If you don't get these for even a small time in day, then it can lead to depression, and other mental issues and only on occasion of something happening good, you start to become a better person with a better lifestyle."
		]
	},




	
	
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [rec,setRec] = useState([]);
	const handleAnswerOptionClick = (recommend,i) => {
		// rec = [...rec,recommend[i]]
		// rec.push(recommend[i])
		// console.log(recommend[i])
		setRec([...rec,recommend[i]])
		// console.log(rec)
		

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			console.log(rec);
		}
	};
	// const [Beaulife,setBeaulife] = useState('Beaulife')
	
	// const removeTitle=()=>{
	// 	setBeaulife('')
	// }
	return (
	<div className='APP'>

		
		<>
			{showScore ? (
				<Paper elevation={24} className='appp'>
					
				 {rec.map((n)=><p>{n}</p>)}
				</Paper>
			) : (
		<div>
			<div className='title'>
			Beaulife 
		</div>
		
				<div className='app'>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}

							
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<ButtonGroup variant='outlined' className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption,i) => (
							<Button onClick={() =>( handleAnswerOptionClick(questions[currentQuestion].recommendation,i)
												  )}>
								{answerOption.answerText}
							</Button>
						))}

					</ButtonGroup>
				</div>
		</div>
			)}

			<div className=''>
				
			<img src={logo}/>
				<h4> Backed By Science
				</h4>
				
				
			</div>

		</>
	</div>
	);
}
