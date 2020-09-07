import React, { ReactNode } from "react";

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

class SearchBar extends React.Component<SearchBarProps> {
  state = { term: "" };

  // Community standard:
  //on<element_tag><event>
  onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    // override default form.submit event handler
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  componentDidMount(): void {
    // console.log(this);
  }

  componentDidUpdate(prevProps: any, prevState: any): void {}

  render(): ReactNode {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              placeholder='search phrase'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
