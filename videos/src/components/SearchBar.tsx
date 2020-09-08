import React, { ReactNode } from "react";

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

class SearchBar extends React.Component<SearchBarProps> {
  state = {
    term: "",
  };

  onFormSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render(): ReactNode {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Video Search</label>
            <div className='ui icon input focus'>
              <input
                type='text'
                placeholder='YouTube'
                value={this.state.term}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  this.setState({ term: e.target.value })
                }
              />
              <i className='search icon' />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
