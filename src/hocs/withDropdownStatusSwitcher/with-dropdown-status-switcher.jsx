import React from 'react';
import PlacesListSorting from '../../components/places-list-sorting/places-list-sorting.jsx';

const withDropdownStatusSwitcher = (Component) => {
  class DropdownStatusSwitcher extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpened: false
      };

      this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
      this.setState((prevState) => ({
        isOpened: !prevState.isOpened
      }));
    }

    render() {
      return <Component {...this.props} isOpened={this.state.isOpened} onDropdownToggle={this.handleToggle}/>;
    }
  }

  return DropdownStatusSwitcher;
};

export default withDropdownStatusSwitcher(PlacesListSorting);
