import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, handleClear } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);

      setText("");
    }
  };

  return (
    <div
      className={`grid ${
        users.length > 0 && "xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2"
      }grid-cols-1  mb-8 gap-8`}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={text}
                onChange={handleChange}
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
              />
              <button
                type="submit"
                className="btn btn-lg absolute top-0 right-0 rounded-l-none w-36"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div
          className="btn btn-ghost btn-lg w-1/3 lg:w-full"
          onClick={handleClear}
        >
          Clear
        </div>
      )}
    </div>
  );
}

export default UserSearch;
