import React from 'react'

const RoomLink = ({roomLink,setShowModal}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomLink)
      .then(() => {
        // Please add an alert here for better UX
        console.log('Link copied to clipboard:', roomLink);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };
  return (
    <div className='w-screen h-screen fixed top-0 bg-black/30 flex justify-center items-center'>
        <main className='bg-white  h-fit  rounded-lg shadow-md px-4 py-10 mx-4 lg:w-1/4 md:w-2/4 sm:w-2/3'>
            <section className='flex justify-between items-center mx-3'>
                <h1 className='text-lg font-semibold text-gray-700'>Here's the link to your room</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-700 hover:text-red-600 hover:cursor-pointer w-6 h-6" onClick={()=>setShowModal(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </section>
            <p className='text-left text-gray-500 font-medium text-base leading-6 max-w-[90%] mt-4 mx-3'>Copy this link and send it to people you want to join your room. Be sure to save it so you can use it later, too.</p>

            <section className='flex justify-between items-center bg-gray-100 p-3 rounded-md mt-5'>
                <p className=' text-gray-600 font-semibold line-clamp-1 text-left'>{roomLink}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-600 hover:text-green-400 hover:cursor-pointer" onClick={copyToClipboard}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                </svg>

            </section>
        </main>
    </div>
  )
}

export default RoomLink