import React, { useState } from "react";

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps): JSX.Element => {
  const [term, setTerm] = useState<string>("");

  const onFormSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    onSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label>Video Search</label>
          <div className='ui icon input focus'>
            <input
              type='text'
              placeholder='YouTube'
              value={term}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTerm(e.target.value)
              }
            />
            <i className='search icon' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
