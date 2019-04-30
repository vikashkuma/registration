import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
    keyBasedFilter: PropTypes.bool,
    keyValuePair: PropTypes.object,
    onSelectSuggestion: PropTypes.func
  };

  static defaultProps = {
    suggestions: [],
    keyBasedFilter: false,
    keyValuePair: { id: 'id', value: 'name' }
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: '',
    };
  }

  filterSuggestion = (suggestions, keyBasedFilter, userInput, keyValuePair) => {
    let filteredSuggestions = [];
    // Filter our suggestions that don't contain the user's input
    if (keyBasedFilter) {
      filteredSuggestions = suggestions.filter(
        suggestion =>
          suggestion[keyValuePair.value].toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
    } else {
      filteredSuggestions = suggestions.filter(
        suggestion =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
    }
    return filteredSuggestions;
  }

  onChange = e => {
    const { suggestions, keyBasedFilter, keyValuePair } = this.props;
    const userInput = e.currentTarget.value;
    const filteredSuggestions = this.filterSuggestion(suggestions, keyBasedFilter, userInput, keyValuePair);
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput
    });
  };

  onClick = id => {
    const { onSelectSuggestion } = this.props;
    const { filteredSuggestions } = this.state;
    const selectedOrg = filteredSuggestions.find(item => item.id === id);
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: selectedOrg.name
    });
    onSelectSuggestion(selectedOrg);
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const { keyBasedFilter, keyValuePair } = this.props;
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;
              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = 'suggestion-active';
              }
              return (
                <li
                  className={className}
                  key={keyBasedFilter ? suggestion[keyValuePair.key] : index}
                  onClick={() => onClick(suggestion[keyValuePair.key])}
                >
                  {keyBasedFilter ? suggestion[keyValuePair.value] : suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No records!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;
