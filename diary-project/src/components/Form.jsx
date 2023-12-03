export default function Form({entries, setEntries, selectedDay, setSelectedDay, inputText, setInputText, listItems, setListItems}) {

// handles the event when the input text changes. It sets the inputText state variable to the current value of the input field.
const handleInputChange = (e) => {
       setInputText(e.target.value);
     };
   
     // handles the event when a diary entry is submitted. If a day is selected, it adds the input text to the entries state variable, adds the input text to the listItems state variable, and then clears the inputText, selectedDay, and listItems state variables.
     const handleEntrySubmit = (e) => {
       e.preventDefault();
       if (selectedDay) {
         setEntries({
           ...entries,
           [selectedDay.toDateString()]: inputText
         });
         setListItems([...listItems, inputText]); // Add the new entry to the listItems state
         setInputText('');
         setSelectedDay(null); // Clear the selected day
         setListItems([]); // Clear the listItems state after submitting an entry
       }
     };
   
     // Function to delete an entry, It removes the entry for the specified date from the entries state variable.
     const handleDeleteEntry = (date) => {
       const newEntries = {...entries};
       delete newEntries[date];
       setEntries(newEntries);
     };
     

  return (
       <div style={{width: '80%', margin: '20px auto'}}>
       {(!selectedDay || !entries[selectedDay.toDateString()]) && 
         <form  onSubmit={handleEntrySubmit} style={{width: '80%', margin: '20px auto'}}>
           <textarea 
             type='text'
             placeholder="Enter a diary entry..."
             value={inputText}
             onChange={handleInputChange}
             style={{display: 'block'}}>
             </textarea> 
           <button className='submit' type='submit'>
             Submit
           </button>
         </form>
}
         
       </div>
  )
}



