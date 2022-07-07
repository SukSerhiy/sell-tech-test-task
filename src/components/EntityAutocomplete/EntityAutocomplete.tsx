import { GroupsEntities } from '../../generated/graphql';
import { Entity } from '../DetailsForm/types';
import CustomAutocomplete from '../CustomAutocomplete';
import { Props } from './types';

const entities:  Entity[] = [
  GroupsEntities.Company,
  GroupsEntities.Individual
]

const EntityAutocomplete: React.FC<Props> = ({
  value,
  onSelect
}) => {
  return (
    <CustomAutocomplete
      title="Entity"
      dialogTitle="Add new item"
      getId={(item) => item}
      getLabel={(item) => item}
      options={entities}
      selected={GroupsEntities.Company}
      onSelect={onSelect}
      onSearch={() => {}}
      // onAddNew={onAddNew}
    />
  );
}

export default EntityAutocomplete;
