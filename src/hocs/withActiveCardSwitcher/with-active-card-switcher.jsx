import React from 'react';

export const withActiveCardSwitcher = (Component) => {
  return class ActiveCardSwitcher extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeCardId: null
      };
      this.handleHover = this.handleHover.bind(this);
    }

    handleHover(cardId) {
      const value = (cardId === this.state.activeCardId) ? null : cardId;
      this.setState({activeCardId: value});
    }

    render() {
      return <Component {...this.props} handleHover={this.handleHover}/>;
    }
  };
};
