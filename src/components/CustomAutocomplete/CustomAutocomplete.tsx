import { useState, useCallback, useRef, ReactNode } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import debounce from 'lodash.debounce'

interface Props<T> {
  title: string;
  dialogTitle?: string;
  options: T[];
  selected: T | null;
  getId: (item: T) => string | number,
  getLabel: (item: T) => string | number,
  onSelect: (option: T | null) => void;
  onSearch: (input: string | null) => void;
  onAddNew?: (input: string) => T;
  renderList?: (params: { options: T[], onSelect: (item: T | null) => void }) => ReactNode;
}

const CustomAutocomplete = <T, >({
  title,
  options,
  dialogTitle = 'Add new item',
  selected,
  getId,
  getLabel,
  onSelect,
  onSearch,
  onAddNew,
  renderList
}: Props<T>) => {
  const [open, setOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<any>('');
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [addBtnDisabled, setAddBtnDisabled] = useState<boolean>(true)

  const newItemRef = useRef<HTMLInputElement>(null);
  
  const debouncedSearch = useCallback(debounce(onSearch, 500), []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleOpen = () => {
    setOpen((prev) => {
      return !prev
    });
  };

  const handleClickAway = () => {
    const selectedLabel = selected ? getLabel(selected) : ''
    if (inputValue !== selectedLabel) {
      setInputValue(selectedLabel || '');
    }
    if (!inputValue && selected) {
      handleSelect(null)
    }
    setOpen(false);
  };

  const handleSelect = (item: T | null) => {
    const itemLabel = item ? getLabel(item) : ''
    onSelect(item);
    setInputValue(itemLabel)
    setOpen(false);
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    if (!value && selected) {
      handleSelect(null)
    }
    debouncedSearch(String(value) || null)
  }

  const openDialog = () => {
    setDialogOpen(true);
  }

  const closeDialog = () => {
    setDialogOpen(false);
    setOpen(false);
  }

  const addNewItem = () => {
    // const ids = options.map((opt: T) => +opt[idProp]);
    // const maxId = Math.max(...ids);
    const name = newItemRef?.current?.value;
    if (name && onAddNew) {
      const newItem = onAddNew(name);
      handleSelect(newItem);
    }
    closeDialog();
  }

  const onNewItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value && !addBtnDisabled) {
      setAddBtnDisabled(true)
    }
    if (value && addBtnDisabled) {
      setAddBtnDisabled(false)
    }
  }

  const styles = {
    position: 'absolute',
    top: 60,
    right: 0,
    left: 0,
    background: '#ffff',
    zIndex: 1000,
    border: '1px solid grey',
    outline: 'none',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    py: 1,
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <TextField
          onClick={handleOpen}
          label={title}
          value={inputValue}
          onChange={onInputChange}
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="start">
              <ArrowDropUpIcon sx={{
                transform: `rotate(${open ? 0 : 180}deg)`,
                transition: 'all 0.2s ease-in-out'
              }} />
            </InputAdornment>,
            
          }}
        />
        {open ? (
          <Box sx={styles}>
            {!!onAddNew && (
              <Button
                variant="contained"
                onClick={openDialog}
                style={{marginLeft: 10}}
              >
                Add new item
              </Button>
            )}
            <Stack>
              {renderList ? renderList({ options, onSelect: handleSelect  }) : (
                <MenuList style={{ outline: 'none' }}>
                  {options.map(item => (
                    <MenuItem
                      key={getId(item)}
                      onClick={() => handleSelect(item)}
                    >
                      <ListItemText>{getLabel(item)}</ListItemText>
                    </MenuItem>
                  ))}
                </MenuList>
              )}
            </Stack>
          </Box>
        ) : null}
        <Dialog
          open={dialogOpen}
          onClose={closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {dialogTitle}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" sx={{ p: 1 }}>
              <TextField
                label="Item"
                fullWidth
                inputRef={newItemRef}
                onChange={onNewItemChange}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>Cancel</Button>
            <Button onClick={addNewItem} autoFocus disabled={addBtnDisabled}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ClickAwayListener>
  )
}

export default CustomAutocomplete;
