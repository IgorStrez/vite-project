const SearchButton = () => {
    return (
      <div className="search">
        <form id="searchform" action="/search" method="GET">
          <input
            name="search_q"
            id="searchInput"
            type="text"
            placeholder="Поиск..."
          />
          <input type="submit" value="НАЙТИ" />
        </form>
      </div>
    );
  };
  
  export default SearchButton;
  