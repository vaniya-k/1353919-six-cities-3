import React from 'react';
import PlacesListSorting from '../../components/places-list-sorting/places-list-sorting.jsx';

const withDropdownStatusSwitcher = (Component) => {
  class DropdownStatusSwitcher extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpened: false
      };

      this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    }

    handleDropdownToggle() {
      this.setState((prevState) => ({
        isOpened: !prevState.isOpened
      }));
    }

    render() {
      return <Component {...this.props} isOpened={this.state.isOpened} onDropdownToggle={this.handleDropdownToggle}/>;
    }
  }

  return DropdownStatusSwitcher;
};

export default withDropdownStatusSwitcher(PlacesListSorting);
