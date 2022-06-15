import "./App.css";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import React from "react";
import { getData } from "../utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [robots, setRobots] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const user = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setRobots(user);
    };
    fetchUsers();
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value);
    console.log(robots);
  };

  const filteredRobots = robots.filter(({ name }) =>
    name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <h1 className="tc">RobotFriends</h1>
      <SearchBox
        type="search"
        placeholder="search robots"
        searchChange={onSearchChange}
      />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </>
  );
};

export default App;

// Bye
