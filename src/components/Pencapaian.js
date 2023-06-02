import * as React from 'react'
import Image from '../helper/Image'
const ListPencapaian = ({ data }) => {
  return (
    <>
      <div className='achievment-module--card'>
        <h2>{data.icon}</h2>
        <div className='achievment-module--hero'>
          <Image src={data.src} alt={data.title} />

        </div>
        <span className='achievment-module--date'>{data.date}</span>
        <div>
          <h3 className='achievment-module--title'>{data.title}</h3>
          <p className='achievment-module--body'>{data.body}</p>
        </div>

      </div>
    </>
  )
}

export const Pencapaian = () => {
  const data = {
    icon: "💯",
    title: "Test",
    src: "Pictune.png",
    body: "Inilah contoh anak pemalas",
    date: "2023"
  }
  return (
    <>
      <div className='achievment-module--achievment'>
        <h2 style={{ textAlign: "top center" }}> soon!!</h2>
        {/* <ListPencapaian data={data} /> */}
      </div>
    </>
  )
}
