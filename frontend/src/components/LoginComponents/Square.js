import React from 'react'

export default function Square({isRight}) {
  return (
    <div>
      {!isRight&& <div className='h-[60%] w-[30%]  bg-gradient-to-b from-[#00BEEE] to-[#0E69E2] transform rotate-[-30deg] rounded-[100px] absolute top-[80%] translate-y-[-80%] translate-x-[20%] left-[-20%]'></div>}
      {isRight&&<div className='h-[60%] w-[30%]  bg-gradient-to-b from-[#00BEEE] to-[#0E69E2] transform rotate-[25deg] rounded-[100px] absolute top-[40%] translate-y-[-84%] left-[115%] translate-x-[-115%]'></div>}
    </div>
  )
}
