import React from 'react';

const SORT_TYPES = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`]

class PlacesListSorting extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeSortType: 0,
            isOpened: false
        };
        this.generateStyleClasses = this.generateStyleClasses.bind(this);
        this.handleSelectedTypeClick = this.handleSelectedTypeClick.bind(this);
        this.handleTypeItemClick = this.handleTypeItemClick.bind(this);
        this.generateLiItems = this.generateLiItems.bind(this);
    }

    generateStyleClasses = (activeSortType, itemSortType) => {
        if (activeSortType === itemSortType) {
            return `places__option places__option--active`
        } else {
            return `places__option`
        };
    }

    handleSelectedTypeClick = () => {
        this.setState (prevState => ({
            isOpened: !prevState.isOpened
        }));
    }

    handleTypeItemClick = (typeIndex) => {
        this.setState (prevState => ({
            activeSortType: typeIndex,
            isOpened: !prevState.isOpened
        }));
    }

    generateLiItems = () => {
        const LiItems = []
        {for (let i = 0; i < SORT_TYPES.length; i++) {
        LiItems.push(<li className={this.generateStyleClasses(this.state.activeSortType, i)} key={`key${i}`} onClick={() => this.handleTypeItemClick(i)} tabIndex="0">{SORT_TYPES[i]}</li>)
        }
        return LiItems
    }}

    render() {
        return <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by&nbsp;</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.handleSelectedTypeClick}>
        {SORT_TYPES[this.state.activeSortType]}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use href="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${(this.state.isOpened) ? `places__options--opened`: null}`}>
            {this.generateLiItems()}
        </ul>
      </form>
    }
}

export default PlacesListSorting;
