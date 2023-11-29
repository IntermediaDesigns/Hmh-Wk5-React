import { useState } from 'react';

export default function DiaryEntry () {
    
    const [entry, setEntry] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        setEntry('');
  }

  return (
    <div className='form' style={{ width: '80%', margin: '0 auto' }}>
      <form className='entry' style={{ width: '90%' }}>
        
        <input type='text' placeholder='Enter a diary entry...'
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        />
      
      </form>

      <button className='submit' type="submit">Submit</button>
    </div>
  )
}
