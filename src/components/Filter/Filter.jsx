import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/Filter/Filter.styled';

class Filter extends React.Component {
  render() {
    const { filter, onFilterChange } = this.props;
    return (
      <div>
        <Label>
          Find contacts by name
          <input
            type="text"
            value={filter}
            onChange={onFilterChange}
            placeholder="Enter name"
          />
        </Label>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filterContacts: PropTypes.func.isRequired,
};

export default Filter;
