import './TodoList.css'

function TodoList(props) {
    const renderFunc = props.children || props.render

    return(
      <section  className='flex items-center flex-col justify-center' >
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

        {(!!props.totalTodos && props.searchedTodos.length === 0) && props.onEmptySearchResults(props.searchText)}

        {props.searchedTodos.map(renderFunc)}
        
      </section>
      
    )
  }

  export {TodoList}