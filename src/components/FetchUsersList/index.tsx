import { useFetch } from "../../hooks/useFetch";
import { IUser } from "../../types/users.types";
import { FetchUserListContainer } from "./style";

const FetchUserList = () => {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_REACT_API_URL}/users`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <FetchUserListContainer>
      <h1>User List</h1>
      <ul>
        {data?.map((user: IUser) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </FetchUserListContainer>
  );
};

export default FetchUserList;
