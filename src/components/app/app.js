import { useState } from 'react';
import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [data, setData] = useState(arr);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const onDelete = (id) => {
    const newArr = data.filter((c) => c.id !== id);
    setData(newArr);
  };

  const addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    const newArr = [...data, newItem];
    setData(newArr);
  };

  const onToggleProp = (id, prop) => {
    const newArr = data.map((item) => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item;
    });
    setData(newArr);
  };

  const searchHandler = (arr, term) => {
    if (term === 0) {
      return arr;
    }

    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  const filterHandler = (arr, filter) => {
    switch (filter) {
      case 'popular':
        return arr.filter((c) => c.like);
      case 'mostViewers':
        return arr.filter((c) => c.viewers > 800);
      default:
        return arr;
    }
  };

  const updateTermHandler = (term) => setTerm(term);

  const updateFilterHandler = (filter) => setFilter(filter);

  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo
          allMoviesCount={data.length}
          favouriteMoviesCount={data.filter((c) => c.favourite).length}
        />
        <div className='search-panel'>
          <SearchPanel updateTermHandler={updateTermHandler} />
          <AppFilter
            filter={filter}
            updateFilterHandler={updateFilterHandler}
          />
        </div>

        <MovieList
          onToggleProp={onToggleProp}
          data={filterHandler(searchHandler(data, term), filter)}
          onDelete={onDelete}
        />
        <MoviesAddForm addForm={addForm} />
      </div>
    </div>
  );
};

export default App;

const arr = [
  {
    name: "Mendirman o'sha",
    viewers: 988,
    favourite: false,
    like: false,
    id: 1,
  },
  {
    name: 'Ulugbekni qulashi',
    viewers: 789,
    favourite: false,
    like: true,
    id: 2,
  },
  {
    name: 'Anjancha muzqaymoq',
    viewers: 1091,
    favourite: false,
    like: false,
    id: 3,
  },
];
