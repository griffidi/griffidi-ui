import { useQuery } from '@apollo/client/react/hooks';
import DropdownList from '@gui/components/dropdownlist/dropdownlist.tsx';
import type { FC } from 'react';
import { GetLocationStates } from '@/types/graphql.ts';

type LocationStateDropdownListProps = {
  onChange?: (value: string) => void;
  defaultValue?: string;
  value?: string;
  name?: string;
};

const LocationStateDropdownList: FC<LocationStateDropdownListProps> = ({
  onChange,
  defaultValue,
  value,
  name,
}) => {
  const {
    data: { states = [] } = {},
  } = useQuery(GetLocationStates);

  return (
    <DropdownList
      options={states?.map(({ id: value, name: label }) => ({
        value,
        label,
      }))}
      onChange={e => onChange?.(e as string)}
      defaultValue={defaultValue}
      value={value}
      name={name}
    />
  );
};

export default LocationStateDropdownList;
