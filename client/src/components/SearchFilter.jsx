function SearchFilter({
  search,
  setSearch,
  jobType,
  setJobType
}) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by Job Title or Company"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        value={jobType}
        onChange={(e) =>
          setJobType(e.target.value)
        }
      >
        <option value="">
          All Job Types
        </option>

        <option value="Full Time">
          Full Time
        </option>

        <option value="Part Time">
          Part Time
        </option>

        <option value="Contract">
          Contract
        </option>
      </select>
    </div>
  );
}

export default SearchFilter;