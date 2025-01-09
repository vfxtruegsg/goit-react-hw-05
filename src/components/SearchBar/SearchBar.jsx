import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SerchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (value === "") {
      toast.error("Enter please yoyr request, field is empty!");
      return;
    }
    onSubmit(value);
  };

  return (
    <header className={css["header"]}>
      <form className={css["form"]} onSubmit={handleSubmit}>
        <input
          className={css["input"]}
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Search images and photos"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className={css["submit-btn"]} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SerchBar;
