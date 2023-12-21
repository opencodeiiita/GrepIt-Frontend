import React, {useState} from 'react'

const Option=({optionValue,optionLabel,placeholder, correctOption, changeCorrectOption})=>
{
  return (
    <aside className='relative'>
    <span className={` absolute p-1 ${correctOption===optionLabel?"bg-green-400 border-transparent":"bg-gray-200/70 border-black"} border top-1/4 left-2 hover:cursor-pointer`} onClick={()=>changeCorrectOption(optionLabel)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon"
       className={`${correctOption===optionLabel?"visible":"invisible"} text-white w-3 h-3`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    </span>
    <input className='text-center rounded-md p-3 bg-white/80 w-full' placeholder={placeholder}/>
  </aside>
  )
}

const Quiz = () => {
  const [question,setQuestion] = useState("");
  const [options,setOptions] = useState({option1:"",option2:"",option3:"",option4:""})
  const [correctOption,setCorrectOption] = useState("");

  const changeCorrectOption = (selectedOption) => selectedOption!==correctOption?setCorrectOption(selectedOption):setCorrectOption("");

  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center'>
      <section className='w w-2/5 bg-gray-200/70 py-3 mt-1 px-2.5 rounded-xl flex flex-col h-1/4 shadow-sm shadow-gray-600'>
        <textarea className='w-full grow  text-center placeholder:text-black bg-white/80 rounded-lg resize-none pt-[5%]' placeholder='question goes here...' />
        <main className='grid grid-cols-2 justify-center items-center gap-y-2 gap-x-4 mx-2 mt-3'>
          <Option optionValue={""} optionLabel={"option1"} placeholder={"1st Option"} correctOption={correctOption} changeCorrectOption={changeCorrectOption} />
          <Option optionValue={""} optionLabel={"option2"} placeholder={"2nd Option"} correctOption={correctOption} changeCorrectOption={changeCorrectOption} />
          <Option optionValue={""} optionLabel={"option3"} placeholder={"3rd Option"} correctOption={correctOption} changeCorrectOption={changeCorrectOption} />
          <Option optionValue={""} optionLabel={"option4"} placeholder={"4th Option"} correctOption={correctOption} changeCorrectOption={changeCorrectOption} />
        </main>
      </section>
    </div>
  )
}

export default Quiz