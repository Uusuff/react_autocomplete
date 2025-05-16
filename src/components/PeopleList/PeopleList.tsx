import React from 'react';
import { Person } from '../../types/Person';
import { PersonInfo } from '../PersonInfo/PersonInfo';

interface PeopleListProps {
  peoples: Person[];
  onSelected: (person: Person) => void;
}

export const PeopleList: React.FC<PeopleListProps> = ({
  peoples,
  onSelected,
}) => {
  return (
    <div className="dropdown-menu" role="menu" data-cy="suggestions-list">
      <div className="dropdown-content">
        {peoples.map((person, index) => (
          <PersonInfo person={person} key={index} onSelected={onSelected} />
        ))}
      </div>
    </div>
  );
};
