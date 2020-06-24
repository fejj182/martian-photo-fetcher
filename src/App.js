import React, { useState } from 'react'
import MartianImageFetcher from './containers/MartianImageFetcher'

function App() {
  const [date, setDate] = useState("");

  function handle2019Click() {
    setDate("2019-01-01");
  }

  const handle2020Click = () => {
    setDate("2020-01-01");
  }

  return (
    <div>
      <button onClick={handle2019Click}>Fetch image for 2019</button>
      <button onClick={handle2020Click}>Fetch image for 2020</button>

      {date ? <MartianImageFetcher date={date} /> : null}
    </div>
  );
}

export default App