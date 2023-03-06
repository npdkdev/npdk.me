import React from 'react';
import DataStack from '../data/stacks.json'
import Image from '../helper/Image';

const Stack = ({ data }) => {
  const tags = data.tags
  return (
    <>
      <div className='portfolio-module--card'>
        <a href={data.link}
          target="_blank"
          rel="noreferrer"
          className="portfolio-module--hero">
          <Image alt={data.name} src={"stack/" + data.img} />
        </a>
        <div className='portfolio-module--caption'>
          <a href={data.link}
            target="_blank"
            rel="noreferrer"
            className="portfolio-module--title">
            {data.title}
          </a>
          <p
            className="portfolio-module--subtitle">
            {data.description}
          </p>
          <div className="portfolio-module--tags">
            {tags.map(data => {
              return <span key={data} className="portfolio-module--tag">{data}</span>
            })}
          </div>
        </div>

      </div>
    </>
  )
}

export const Stacks = () => {
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

export default Stack
