function Trial() {
    function handleChange(event) {
      console.log(`${event.target.name}: ${event.target.value}`);
    }
  
    return (
      <div>
        <input
          type="text"
          name="search"
          onChange={handleChange}
          placeholder="Entering password..."
        />
  
        
      </div>
    );
  }




export default Trial;