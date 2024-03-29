import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const Option = ({
  optionValue,
  optionLabel,
  placeholder,
  correctOption,
  onChangeHandler,
  changeCorrectOption
}) => {
  return (
    <aside className="relative">
      <span
        className={` absolute p-1 ${
          correctOption === optionLabel
            ? 'bg-green-400 border-transparent'
            : 'bg-white/50 border-black'
        } border top-1/4 left-2 hover:cursor-pointer`}
        onClick={() => changeCorrectOption(optionLabel)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          dataSlot="icon"
          className={`${
            correctOption === optionLabel ? 'visible' : 'invisible'
          } text-white w-3 h-3`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </span>
      <input
        className="text-start rounded-md p-3 bg-white/30 w-full pl-12"
        placeholder={placeholder}
        value={optionValue}
        onChange={(e) => onChangeHandler(false, e.target.value, optionLabel)}
      />
    </aside>
  );
};

const EditQuizCard = ({ quizProp, questionNumber, setEdit, setQuestions }) => {
  const [question, setQuestion] = useState(quizProp);

  const changeHandler = (isQuestion, text, optionIndex) => {
    if (isQuestion) {
      setQuestion((prev) => ({ ...prev, question: text }));
    } else {
      setQuestion((prev) => {
        const updatedOptions = prev.options.map((option, index) => {
          if (index === optionIndex) {
            return { ...option, option: text };
          }
          return option;
        });

        return { ...prev, options: updatedOptions };
      });
    }
  };
  const clickHandler = () => {
    //Write the actual function here to edit the question api
    setQuestions((prev) =>
      prev.map((orginalQuestion, index) => {
        if (index === questionNumber - 1) {
          return question;
        }
        return orginalQuestion;
      })
    );

    setEdit(false);
  };
  const isDisabled = () =>
    question.question === '' ||
    question.options.filter(({ option }) => option === '').length > 1;
  return (
    <li className="px-4 py-3 w-[85%] border rounded-lg shadow-sm space-y-2 bg-white card-grad">
       <header className="flex justify-between items-center pb-3 border-b-white/60 border-b-[0.8px] shadow-md">
         <h1 className="text-white/70">Question {questionNumber}</h1>
        <section className="flex justify-between">
          <button
            className="px-3 py-[2px] rounded hover:text-green-600 disabled:brightness-50 disabled:hover:cursor-not-allowed bg-white/20"
            onClick={clickHandler}
            disabled={isDisabled()}
          >
            Save
          </button>
        </section>
      </header>

      <main className="flex flex-col">
        <textarea
          value={question?.question}
          className="resize-none font-semibold text-xl mb-2 px-2 rounded-md bg-white/20 text-white"
          placeholder="question goes here.."
          onChange={(e) => changeHandler(true, e.target.value)}
        />
        <small className="text-gray-500 grow text-start ">Change the Options</small>
        <section className="grid grid-cols-2 justify-center items-center gap-y-2 gap-x-2 mt-2">
          {question.options.map((option, index) => (
            <aside className="flex justify-start items-center space-x-1 p-2 bg-white/20 rounded-md">
              <p
                className={`w-4 h-4 ${
                  option.isCorrect ? 'bg-green-500' : 'bg-red-600'
                } rounded-full`}
              >
                {' '}
              </p>
              <input
                value={option?.option}
                className="text-md max-w-xs text-left p-1 rounded-md bg-transparent text-white"
                placeholder="Enter Option"
                onChange={(e) => changeHandler(false, e.target.value, index)}
              />
            </aside>
          ))}
        </section>
      </main>
    </li>
  );
};

const QuizCard = ({ quizProp, questionNumber, setQuestions }) => {
  
  const [edit, setEdit] = useState(false);

  const deleteQuizCard = () => {
    // Write the function/API call to delete the quiz question here
    setQuestions((prev) =>
      [...prev].filter((question, index) => index !== questionNumber - 1)
    );
  };                                              
  if (edit)
    return (
      <EditQuizCard
        quizProp={quizProp}
        questionNumber={questionNumber}
        setEdit={setEdit}
        setQuestions={setQuestions}
      />
    );
  return (
    <li className="px-4 py-3 w-[85%] border rounded-lg shadow-sm space-y-2 card-grad">
      <header className="flex justify-between items-center pb-3 border-b-white/60 border-b-[0.8px] shadow-md">
        <h1 className="text-white/70">Question {questionNumber}</h1>
        <section className="flex justify between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:text-green-600 hover:cursor-pointer text-white"
            onClick={() => setEdit(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:text-red-600 hover:cursor-pointer text-white"
            onClick={deleteQuizCard}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </section>
      </header>

      <main className="flex flex-col">
        <h1 className="min-w-sm font-semibold text-2xl mb-1 text-white">{quizProp?.question}</h1>
        <small className="text-gray-500 grow text-start">answer choices</small>
        <section className="grid grid-cols-2 justify-center items-center gap-y-2 gap-x-2 mt-2">
          {quizProp.options.map((option) => (
            <aside className="flex justify-start items-center space-x-1 p-2 rounded-md bg-white/20">
              <p
                className={`w-4 h-4 mr-1 ${
                  option.isCorrect ? 'bg-green-500' : 'bg-red-600'
                } rounded-full`}
              >
                {' '}
              </p>
              <p className="text-[16px] max-w-xs text-left text-white">{option?.option}</p>
            </aside>
          ))}
        </section>
      </main>
    </li>
  );
};

const Quiz = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({ 1: '', 2: '', 3: '', 4: '' });
  const [correctOption, setCorrectOption] = useState('');

  // Maintain this below state in redux
  const [questions, setQuestions] = useState([]);

  const changeCorrectOption = (selectedOption) =>
    selectedOption !== correctOption && options[selectedOption] !== ''
      ? setCorrectOption(selectedOption)
      : setCorrectOption('');

  const clickHandler = () => {
    // Add the actual function to call the API here, fetch the main state from redux
    const finalQuestion = {
      question: question,
      options: Object.keys(options).map((key) => ({
        option: options[key],
        isCorrect: correctOption === key
      }))
    };
    setQuestions((prev) => [...prev, finalQuestion]);
    setQuestion('');
    setOptions({ 1: '', 2: '', 3: '', 4: '' });
    setCorrectOption('');
  };

  const onChangeHandler = (isQuestion, text, optionNumber) =>
    isQuestion
      ? setQuestion(text)
      : setOptions((prev) => ({ ...prev, [optionNumber]: text }));



      const [vantaEffect, setVantaEffect] = useState(1);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xc1ff,
          backgroundColor: 0x0,
          points: 20.00,
          maxDistance: 22.00
        })
      );
    }
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="w-screen h-screen flex justify-around items-start overflow-x-hidden">
      <div className="w-[55%] h-full flex justify-center items-center fixed left-0">
        <section className=" w-[95%] backdrop-blur-md py-8 px-4 rounded-xl flex flex-col justify-between gap-4 card-grad">
          <textarea
            value={question}  
            className="w-full text-start text-lg placeholder:text-black bg-white/30 rounded-lg resize-none py-2 pb-6 px-4"
            placeholder="question goes here..."
            onChange={(e) => onChangeHandler(true, e.target.value)}
          />
          <main className="grid grid-cols-2 justify-center items-center gap-y-2 gap-x-2">
            <Option
              optionValue={options[1]}
              optionLabel={'1'}
              placeholder={'1st Option'}
              correctOption={correctOption}
              onChangeHandler={onChangeHandler}
              changeCorrectOption={changeCorrectOption}
            />
            <Option
              optionValue={options[2]}
              optionLabel={'2'}
              placeholder={'2nd Option'}
              correctOption={correctOption}
              onChangeHandler={onChangeHandler}
              changeCorrectOption={changeCorrectOption}
            />
            <Option
              optionValue={options[3]}
              optionLabel={'3'}
              placeholder={'3rd Option'}
              correctOption={correctOption}
              onChangeHandler={onChangeHandler}
              changeCorrectOption={changeCorrectOption}
            />
            <Option
              optionValue={options[4]}
              optionLabel={'4'}
              placeholder={'4th Option'}
              correctOption={correctOption}
              onChangeHandler={onChangeHandler}
              changeCorrectOption={changeCorrectOption}
            />
          </main>
          <aside className="flex">
            <span className="py-3 px-2 bg-white/30 rounded-md min-w-[30%] text-md font-semibold">
              Correct Option = {correctOption !== '' ? correctOption : '😒'}
            </span>
            <button
              className="px-5 ml-3 rounded-md disabled:brightness-75 disabled:cursor-not-allowed bg-[#42c072]"
              disabled={correctOption === '' || question === ''}
              onClick={clickHandler}
            >
              Submit
            </button>
          </aside>
        </section>
      </div>
      <ul className="w-[45%] flex flex-col justify-center items-center self-start space-y-2 mt-4 overflow-y-auto relative left-[28%] mb-4">
        {questions.map((question, index) => (
          <QuizCard
            key={index}
            quizProp={question}
            questionNumber={index + 1}
            setQuestions={setQuestions}
          />
        ))}
      </ul>
    {/* <Leaderboard/> */}
    </div>
  );
};

export default Quiz;
