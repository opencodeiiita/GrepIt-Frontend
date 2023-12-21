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
    <div className='w-screen h-screen flex justify-around items-center'>
      <section className='w w-2/5 bg-gray-200/70 py-3 mt-1 px-2.5 rounded-xl flex flex-col justify-between h-[32%] shadow-sm shadow-gray-600'>
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
      <section>
        s
      </section>
    </div>
  )
}

export default Quiz