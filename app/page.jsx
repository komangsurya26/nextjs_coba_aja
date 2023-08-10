import React from 'react'
import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Komang and Surya
        <br />
        <span className="orange_gradient text-center">AI Power Cuy</span>
      </h1>
      <p className='desc text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci
        suscipit neque quod eum distinctio ipsa officiis consectetur voluptatem,
        beatae assumenda pariatur eaque quis in molestias velit laboriosam minus
        dicta.
      </p>
      
      <Feed />
    </section>
  );
}

export default Home
