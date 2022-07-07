import { Entity } from '../DetailsForm/types';

export interface Props {
  value: Entity | null;
  onSelect: (entity: Entity | null) => void;
};
