import { useId } from "react";
import { FiSearch } from "react-icons/fi";
import style from "./SearchBox.module.css";

export default function SearchBox({ query, onSearch }) {
  const id = useId();
  return (
    <div className={style.search}>
      <label htmlFor={id} className={style.searchLabel}>
        Find contacts by name
      </label>
      <div className={style.relative}>
        <div className={style.searchIcon}>
          <FiSearch size="24px" />
        </div>
        <input
          type="text"
          name="query"
          id={id}
          className={style.searchInput}
          value={query}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
