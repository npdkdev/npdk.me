import * as React from 'react'
import Stack from './Stack'
import DataStack from '../data/stacks.json'

export const Portofolio = () => {
  return (
    <>
      <div className='portfolio-module--portfolio'>
        {DataStack.map((stack, index) => {
          return <Stack key={index} data={stack} />
        })}
      </div>
    </>
  )
}
