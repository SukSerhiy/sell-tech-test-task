import { useState, useEffect } from 'react'
import CustomAutocomplete from '../CustomAutocomplete'
import { useGetRelations } from '../../gql'

interface Option {
  id: string;
  name: string;
}

const options: Option[] = [
  {
    "id": "1",
    "name": "Director"
  },
  {
    "id": "2",
    "name": "Shareholder"
  },
  {
    "id": "3",
    "name": "Trainee"
  }
]

function RelationAutocomplete() {
  const [selected, setSelected] = useState<Option | null>(null)
  const [search, setSearch] = useState<string | null>(null);
  const [items, setItems] = useState<Option[]>([]);

  const data = useGetRelations({ search });

  useEffect(() => {
    if(options.length > 0 && items.length === 0) {
      setItems(options)
    }
  }, [items.length])

  const onSearch = (input: string | null) => {
    setSearch(input);
  }

  const onAddNew = (name: string) => {
    const ids = options.map((opt) => +opt.id);
    const maxId = Math.max(...ids);
    const newOption = { id: String(maxId + 1), name };
    setItems((prev) => ([
      ...prev,
      newOption
    ]));
    return newOption;
  }

  return (
    <CustomAutocomplete
      title="Relation to the company"
      dialogTitle="Add new item"
      getId={(item) => item.id}
      getLabel={(item) => item.name}
      options={items}
      selected={selected}
      onSelect={setSelected}
      onSearch={onSearch}
      onAddNew={onAddNew}
    />
  );
}

export default RelationAutocomplete;
