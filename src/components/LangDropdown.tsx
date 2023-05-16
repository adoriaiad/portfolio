import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';
import { useLanguage } from '../contexts/Localisation';
import it from '../assets/img/it.png';
import en from '../assets/img/en.png';
import fr from '../assets/img/fr.png';

const LANGS = [
  { shortCode: 'en', label: 'English', icon: en },
  { shortCode: 'fr', label: 'Français', icon: fr },
  { shortCode: 'it', label: 'Italiano', icon: it },
];

function LangDropdown() {
  const { selected, languageMode } = useLanguage();
  const [lang, setLang] = useState<string>(selected);
  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
    languageMode(event.target.value);
    refreshPage();
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small" >
      <Select
        labelId="lang-select"
        id="lang-select"
        value={lang}
        onChange={handleChange}
        style={{fontSize: '12px', display: 'flex', justifyContent: 'space-evenly', fontFamily: 'Yomogi'}}
      >
        {LANGS.map(l => (
          <MenuItem value={l.shortCode} style={{fontSize: '12px', fontFamily: 'Yomogi'}}><img src={l.icon} alt="lg" height={"14px"} />{l.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LangDropdown;
