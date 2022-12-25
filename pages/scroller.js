import React, { useState } from 'react'

const Scroller = () => {
  const [text, setText] = useState('Scrolling text goes here')

  const updateText = () => {
    // Update the text here
    setText('Updated scrolling text')

    // Restart the animation
    scroller.classList.remove('animate-x-3')
    void scroller.offsetWidth
    scroller.classList.add('animate-x-3')
  }

  useEffect(() => {
    // Update the text every 5 seconds
    const interval = setInterval(updateText, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='fixed bottom-0'>
      <div ref={el => (scroller = el)} className='overflow-x-hidden white-space-nowrap animate-x-3'>
        {text}
      </div>
    </div>
  )
}

export default Scroller
