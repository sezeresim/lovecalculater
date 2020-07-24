import React from 'react';
const App = () => {
  const [boyName, setBoyName] = React.useState('');
  const [girlName, setGirlName] = React.useState('');

  const handleForm = async (event) => {
    event.preventDefault();
    await fetch(
      'https://love-calculator.p.rapidapi.com/getPercentage?fname=sezer&sname=es',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
          'x-rapidapi-key': 'your-key',
        },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          name="girl"
          type="text"
          placeholder="Please enter girl name"
          value={girlName}
          onChange={(e) => setGirlName(e.target.value)}
        />
        <input
          name="boy"
          type="text"
          placeholder="Please enter boy name"
          value={boyName}
          onChange={(e) => setBoyName(e.target.value)}
        />
        <button type="submit">See Result</button>
      </form>
    </div>
  );
};

export default App;
