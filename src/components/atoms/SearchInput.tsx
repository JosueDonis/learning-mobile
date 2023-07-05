import { IonSearchbar, SearchbarChangeEventDetail } from "@ionic/react";
import { useState } from "react";
import { IonSearchbarCustomEvent } from "@ionic/core/dist/types/components";

interface SearchInputProps {
  placeholder?: string | "Buscar...";
  onInput: (ev: string) => void;
  value?: string | null;
  klass?: string;
  debounce?: number;
}
const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onInput,
  value,
  klass,
  debounce,
}) => {
  function handleInput(ev: Event) {
    const target = ev.target as HTMLIonSearchbarElement;
    onInput(target?.value as string);
  }
  return (
    <IonSearchbar
      className={`learning-search-input ${klass}`}
      placeholder={placeholder}
      mode="ios"
      value={value}
      onIonInput={(ev) => handleInput(ev)}
      debounce={debounce}
    ></IonSearchbar>
  );
};

export default SearchInput;
