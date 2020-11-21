import React from "react";
import "./SearchData.css";
class SearchData extends React.Component {
  state = {
    searchDataInput_component: ""
  };

  changeSearchData = (e) => {
    this.setState({
      searchDataInput_component: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch} className="seacrchBar_component">
          <input
            className="searchDataInput_component"
            type="text"
            name="searchDataInput_component"
            onChange={this.changeSearchData}
          />
          <button className="Submitbutton_component" type="submit">
            Search Data
          </button>
        </form>
      </div>
    );
  }
}

export default SearchData;
