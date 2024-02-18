import React from 'react';
import { Text } from 'react-native';

const SearchResults = ({ results }) => {

  console.log(results);

  if (results == null) {
    return;
  }  else if (results.length == 0) {
    return (<Text>Our apologies, we are unable to find any matches at the moment. 
        If you would like to be able to be discovered by other students, click the "Submit" button.
    </Text>);
  }
  
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Studying for</th>
            </tr>
        </thead>
        <tbody>
            {results.map((user) => (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.test}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
};

export default SearchResults;
