import React, { useState, useEffect } from 'react';
import Leaderboard from '../components/Leaderboard';
import { ReactComponent as LogoImg } from '../assets/images/logo.svg';

const QuizRoom = () => {
  const dummyData = [
    {
      id: 1,
      question: 'What is the capital of Italy?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Rome',
      selectedAnswer: null,
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
      selectedAnswer: null,
    },
    {
      id: 3,
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Leo Tolstoy'],
      correctAnswer: 'William Shakespeare',
      selectedAnswer: null,
    },
    // Add more dummy questions as needed
  ];

  const [questions, setQuestions] = useState(dummyData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [timer, setTimer] = useState(30);

  const handleOptionSelect = (optionIndex) => {
    if (!showResults) {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestionIndex].selectedAnswer = optionIndex;
      setQuestions(updatedQuestions);
    }
  };

  const handleNextQuestion = () => {
    if(showResults)
    {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      resetTimer(); // Reset timer after moving to the next question
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      resetTimer(); // Reset timer when going to the previous question
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    const newIncorrectAnswers = [];
    console.log(questions);

    questions.forEach((question, index) => {
      if (question.correctAnswer === question.options[question.selectedAnswer]) {
        newScore += 4;
      } else if (question.selectedAnswer === null) {
        newScore += 0; // No points deducted for unanswered questions
      } else if (question.correctAnswer !== question.options[question.selectedAnswer]) {
        newScore -= 1; // Deduct 1 point for wrong answers
        newIncorrectAnswers.push({
          question: question.question,
          correctAnswer: question.correctAnswer,
          selectedAnswer: question.options[question.selectedAnswer],
        });
      }
    });

    setScore(newScore);
    setIncorrectAnswers(newIncorrectAnswers);
  };

  const resetTimer = () => {
    setTimer(30);
  };

  useEffect(() => {
    let interval;

    if (timer > 0 && !showResults) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && !showResults && questions[currentQuestionIndex].selectedAnswer === null) {
      handleNextQuestion();
    }

    return () => clearInterval(interval);
  }, [timer, showResults, currentQuestionIndex]);

  const calculateProgress = () => {
    const linearProgress = (timer / 30) * 100;
    const logarithmicProgress = Math.log10(timer / 30 + 1) * 100;
    return linearProgress >= 0 ? Math.min(linearProgress, logarithmicProgress) : 0;
  };
  

  return (
    <div className="flex">
      <div className="w-3/5 p-4 flex flex-col gap-2">
      {timer > 0 && !showResults && (
        <div className='flex justify-between items-center'> 
          <span className="flex flex-row items-center">
            <LogoImg height={'72px'} width={'72px'} />
            <h1 className='text-white text-2xl font-semibold'>GrepIt</h1>
          </span>
          <div className="flex items-center justify-center mt-2 mb-4 relative">
            <p className='text-lg text-white/30 relative right-10'> Time Remaining : </p>
            <div className="absolute top-1/2 right-[-4%] transform -translate-x-1/2 -translate-y-1/2 text-2xl text-green-500 font-bold">
             {timer}
            </div>
          </div>
        </div>
       
        )}
        <div className="p-6 rounded-lg shadow-md card-grad">
            <p className='text-md text-white/60 mb-1'>Question { currentQuestionIndex + 1 }</p>
            <h2 className="text-2xl mb-4 font-semibold text-white">
            {questions[currentQuestionIndex].question}
            </h2>
          
          <div className="grid grid-cols-2 gap-2">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div
                key={index}
                className={`px-4 py-3  rounded-md  ${
                  showResults
                    ? questions[currentQuestionIndex].correctAnswer === option
                      ? 'bg-green-200'
                      : questions[currentQuestionIndex].selectedAnswer === index
                      ? 'bg-red-200'
                      : 'bg-white/20 '
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              >
                <input
                  type="checkbox"
                  checked={questions[currentQuestionIndex].selectedAnswer === index}
                  onChange={() => handleOptionSelect(index)}
                  className="mr-2"
                  disabled={showResults}
                />
                {option}
              </div>
            ))}
          </div>
          <div className="mt-4">
            {showResults && currentQuestionIndex !== 0 && (
              <button
                onClick={handlePreviousQuestion}
                className="bg-gray-500 text-white px-4 py-2 mr-2 rounded-md"
              >
                Previous
              </button>
            )}
            {currentQuestionIndex !== questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md"
                // disabled={showResults || questions[currentQuestionIndex].selectedAnswer === null}
              >
                Next
              </button>
            )}
            {currentQuestionIndex === questions.length - 1 && !showResults && (
              <button
                onClick={handleNextQuestion}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                // Remove the disabled condition for the Next button
              >
                Show Results
              </button>
            )}
          </div>
        </div>
        {showResults && (
          <div className='border p-6 mt-4 rounded-md'>
            <h2 className="text-md font-semibold text-white/90">Quiz Results</h2>
            <p className='text-lg font-semibold text-white/80 tracking-wide mb-3'>Total Score: {score}</p>
            {incorrectAnswers.length > 0 && (
              <div className='text-white/60'>
                <h3 className="text-lg font-semibold text-white/80 mb-2">Incorrect Answers:</h3>
                <ul>
                  {incorrectAnswers.map((answer, index) => (
                    <li key={index} className='border p-2 card-grad mb-2'>
                      <p>question {currentQuestionIndex + 1}</p>
                      <p className='text-lg mb-1'>
                        <strong>{answer.question}</strong>
                      </p>
                      <p className='text-green-400'>Correct Answer: {answer.correctAnswer}</p>
                      <p className='text-red-400'>Your Answer: {answer.selectedAnswer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="w-2/5 p-4">
        <Leaderboard />
      </div>
    </div>
  );
};

export default QuizRoom;