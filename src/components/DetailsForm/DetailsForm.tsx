import { useState } from 'react';
import {
  Paper,
  Stack,
  TextField,
  MenuItem,
  ListItemText,
  Typography
} from '@mui/material';
import { VariableSizeList as List } from "react-window";
import EnitiyAutocomplete from '../EntityAutocomplete';
import PositionAutocomplete from '../PositionAutocomplete';
import RelationAutocomplete from '../RelationAutocomplete';
import CustomAutocomplete from '../CustomAutocomplete'
import { GroupsEntities } from '../../generated/graphql';
import { Props, Entity } from './types';

const clientIds: number[] = [];

for (let i = 0; i < 99000; i++) {
  clientIds.push(i + 1)
}

const DetailsForm: React.FC<Props> = () => {
  const [entity, setEntity] = useState<Entity | null>(GroupsEntities.Company)
  const [clientId, setClientId] = useState<number | null>(null);
  const [filteredOptions, setFilteredOptions] = useState<number[]>(clientIds);

  const onSelect = (item: number | null) => {
    setClientId(item);
  }

  const onClientIdSearch = (input: string | null) => {
    const filtered = clientIds.filter(clientId => 
      String(clientId).match(new RegExp(input || ''))
    )
    setFilteredOptions(filtered)
  }

  const onEntitySelect = (entity: Entity | null) => {
    setEntity(entity);
  }

  return (
    <Stack  spacing={4}>
      <Typography variant='h4'>Details</Typography>
      <Paper elevation={3}>
        <Stack spacing={4} p={2}>
          <EnitiyAutocomplete
            value={entity}
            onSelect={onEntitySelect}
          />
          <CustomAutocomplete
            title="Client ID"
            options={filteredOptions}
            selected={clientId}
            getId={item => item}
            getLabel={item => item}
            onSelect={onSelect}
            onSearch={onClientIdSearch}
            renderList={({ options, onSelect }) => (
              <List
                width={'100%'}
                height={400}
                itemCount={options.length}
                itemSize={index => 50}
              >
                {({ index, style }) => {
                  const value = options[index];
                  return (
                    <MenuItem
                      style={style}
                      key={value}
                      onClick={() => onSelect(value)}
                    >
                      <ListItemText>{value}</ListItemText>
                    </MenuItem>
                  )
                }}
              </List>
            )}
          />

          {entity === GroupsEntities.Individual && (
            <>
              <TextField label="First Name" />
              <TextField label="Last Name" />
            </>
          )}

          {entity === GroupsEntities.Company && (
            <TextField label="Company name" />
          )}
        </Stack>
      </Paper>
      <Paper elevation={3}>
        <Stack spacing={3} p={2}>
          <PositionAutocomplete />
          <RelationAutocomplete />
        </Stack>
      </Paper>
    </Stack>
  )
}

export default DetailsForm;
