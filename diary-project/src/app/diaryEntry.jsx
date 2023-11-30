import { useState } from 'react';

export default function DiaryEntry ({ onSubmit }) {
    
    const [entry, setEntry] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(entry);
        setEntry('');
    }

    return (
        <div className='form' style={{ width: '80%', margin: '0 auto' }}>
            <form className='entry' style={{ width: '90%' }} onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter a diary entry...'
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                />
                <button className='submit' type="submit">Submit</button>
            </form>
        </div>
    )
}
