import React from 'react'

const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child Clicked")
  };


  return (
    <section className='main-div'>
      <div className='g-div' onClick={handleGrandParent}>
        <div className='p-div' onClick={handleParentClick}>
          <button className='c-div' onClick={handleChildClick}>Chlid div</button>

        </div>

      </div>
    </section>
  );
}

export default EventPropagation
