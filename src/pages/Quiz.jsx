import React, {useState} from 'react'

const Option=({optionValue,optionLabel,placeholder, correctOption,onChangeHandler, changeCorrectOption})=>
{
  return (
    <aside className='relative'>
    <span className={` absolute p-1 ${correctOption===optionLabel?"bg-green-400 border-transparent":"bg-gray-200/70 border-black"} border top-1/4 left-2 hover:cursor-pointer`} onClick={()=>changeCorrectOption(optionLabel)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon"
       className={`${correctOption===optionLabel?"visible":"invisible"} text-white w-3 h-3`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    </span>
    <input className='text-center rounded-md p-3 bg-white/80 w-full' placeholder={placeholder} value={optionValue} onChange={(e)=>onChangeHandler(false,e.target.value,optionLabel)}/>
  </aside>
  )
}

const QuizCard=({quizProp})=>
{
  return (
    <li className='px-4 py-3 border rounded-lg shadow-sm space-y-2  w-1/2'>
      <header className='flex justify-between border-b-2 pb-1'>
        <h1>Question 1</h1>
        <section className='flex justify between'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-green-600 hover:cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-red-600 hover:cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>

        </section>
      </header>

      <main className='flex flex-col'>
        <h1 className='min-w-sm font-semibold'>What is capital of India?</h1>
        <small className='text-gray-500 grow text-start '>answer choices</small>
        <section className='grid grid-cols-2 justify-center items-center gap-y-2 gap-x-4 mt-2'>
          <aside className='flex justify-start items-center space-x-1'>
            <p className='w-4 h-4 bg-red-600 text-red-600 rounded-full'>  </p>
            <p className='text-sm max-w-xs text-left'>Option 1</p>
          </aside>
          <aside className='flex justify-start items-center space-x-1'>
            <p className='w-4 h-4 bg-red-600 text-red-600 rounded-full'> </p>
            <p className='text-sm max-w-xs text-left'>Option 1</p>
          </aside>
          <aside className='flex justify-start items-center space-x-1'>
            <p className='w-4 h-4 bg-red-600 text-red-600 rounded-full'> </p>
            <p className='text-sm max-w-xs text-left'>Option 3</p>
          </aside>
          <aside className='flex justify-start items-center space-x-1'>
            <p className='w-4 h-4 bg-red-600 text-red-600 rounded-full'> </p>
            <p className='text-sm max-w-xs text-left'>Option 4</p>
          </aside>
        </section>
      </main>

    </li>
  )
}

const Quiz = () => {
  const [question,setQuestion] = useState("");
  const [options,setOptions] = useState({ 1: "", 2: "", 3: "", 4: "" })
  const [correctOption,setCorrectOption] = useState("");

  // Maintain this below state in redux
  const [questions, setQuestions]= useState([]);

  const changeCorrectOption = (selectedOption) => selectedOption!==correctOption && options[selectedOption]!==""?setCorrectOption(selectedOption):setCorrectOption("");

  const clickHandler=()=>
  {
    // Add the actual function to call the API here, fetch the main state from redux
    const finalQuestion = {
      question: question,
      options: Object.keys(options).map((key) => ({
        option: options[key],
        isCorrect: (correctOption === key)
      }))
    };
    setQuestions(prev=>[...prev,finalQuestion]);
    setQuestion("");
    setOptions({ 1: "", 2: "", 3: "", 4: "" });
    setCorrectOption("");
  }

  const onChangeHandler=(isQuestion,text,optionNumber)=> isQuestion?setQuestion(text):setOptions(prev=>({...prev,[optionNumber]:text}))

  return (
    <div className='w-screen h-screen flex justify-around items-start overflow-x-hidden'>
      <div className='w-1/2 h-full '>
        <section className='w w-2/5 bg-gray-200/70 py-3 mt-1 px-2.5 rounded-xl flex flex-col justify-between h-[32%] shadow-sm shadow-gray-600 fixed top-1/3 left-10'>
          <textarea value={question} className='w-full h-2/5  text-center placeholder:text-black bg-white/80 rounded-lg resize-none pt-[5%]' placeholder='question goes here...' onChange={(e)=>onChangeHandler(true,e.target.value)}/>
          <main className='grid grid-cols-2 justify-center items-center gap-y-2 gap-x-4 mx-2 '>
            <Option optionValue={options[1]} optionLabel={"1"} placeholder={"1st Option"} correctOption={correctOption} onChangeHandler={onChangeHandler} changeCorrectOption={changeCorrectOption} />
            <Option optionValue={options[2]} optionLabel={"2"} placeholder={"2nd Option"} correctOption={correctOption} onChangeHandler={onChangeHandler} changeCorrectOption={changeCorrectOption} />
            <Option optionValue={options[3]} optionLabel={"3"} placeholder={"3rd Option"} correctOption={correctOption} onChangeHandler={onChangeHandler} changeCorrectOption={changeCorrectOption} />
            <Option optionValue={options[4]} optionLabel={"4"} placeholder={"4th Option"} correctOption={correctOption} onChangeHandler={onChangeHandler} changeCorrectOption={changeCorrectOption} />
          </main>
          <aside className='flex mx-2'>
            <span className='py-1 px-5 bg-white/80 rounded-sm  min-w-[30%]'>Correct Option: {correctOption!==""?correctOption:"-"}</span>
            <button className='py-1 px-5 bg-white/80 ml-5 rounded-sm disabled:brightness-75 disabled:cursor-not-allowed' disabled={correctOption==="" || question===""} onClick={clickHandler}>Submit</button>
          </aside>
        </section>
      </div>
      <ul className=' grow flex flex-col justify-center items-center self-start space-y-10 mt-10'>
        {questions.map(question=>(
          <QuizCard quizProp={question}/>
        ))}
      </ul>
    </div>
  )
}

export default Quiz