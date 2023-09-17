import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue, loading} ){
  
    return(
      <div className='flex justify-center' >
        <input
         className={`bg-transparent w-2/5 border border-solid border-[#ccc] text-sm text-black focus:outline-none px-4 py-2 rounded-lg mb-4 text-center' ${loading && 'opacity-25 '}`}
         value={searchValue}
         onChange={(event) => 
           setSearchValue(event.target.value)
         }
         placeholder="Hacer ejercicio"
         disabled={loading}
         />

      </div>
    )
  }

  export {TodoSearch}