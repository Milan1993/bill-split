import styled from "styled-components";

const SearchContainer = styled.form`

  input {
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #54667a;
    background-color: #fff;
    background-clip: padding-box;
    appearance: none;
    outline: none;
    border-radius: 50rem;
    border-width: 0;
  }
`;
const Search = () => {
  return (
    <SearchContainer>
      <input type="search" placeholder="Search for..." />
    </SearchContainer>
  );
};

export default Search;
