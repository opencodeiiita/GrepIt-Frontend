import React, {useState} from 'react'
import RoomLink from "../components/RoomLink";

const CreateRoom = () => {
  const [showModal,setShowModal] = useState(false);
  return (
    <div>
      <button className='bg-black text-white p-2' onClick={()=>setShowModal(true)}>Click to open room link modal</button>
      {showModal && <RoomLink roomLink={"https://x.com/wadadparker"} setShowModal={setShowModal}/>}
    </div>
  )
}

export default CreateRoom