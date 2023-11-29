export default function DiaryEntry () {
  return (
    <div className='form' style={{ width: '80%', margin: '0 auto' }}>
      <form className='entry' style={{ width: '100%' }}>
        
        <input type='text' placeholder='Enter a diary entry...' />
      
      </form>

      <button className='submit'>Submit</button>
    </div>
  )
}
