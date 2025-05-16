import { Person } from '../../types/Person';
import './PersonInfo.scss';

interface Props {
  person: Person;
  onSelected: (person: Person) => void;
}

export const PersonInfo: React.FC<Props> = ({ person, onSelected }) => {
  const handleClick = () => {
    onSelected(person);
  };

  return (
    <div className="dropdown-item" data-cy="suggestion-item">
      <p
        className={`person-item ${person.sex === 'm' ? 'has-text-link' : 'has-text-danger'}`}
        onClick={handleClick}
      >
        {person.name}
      </p>
    </div>
  );
};
