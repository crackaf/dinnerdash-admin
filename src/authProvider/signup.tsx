import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { SIGNUP_API } from 'apis';

const Signup = ({ handleClose }: { handleClose: any }) => {
  // create state variables for each input
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [theme, setTheme] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.info(username, email, password, name, theme, url);

    // send the data to the server
    //   {
    //     "username": "hunzala",
    //     "email" : "hunzala@gmail.com",
    //     "password": "faiq123",
    //     "name" : "The Sea Explorer",
    //     "theme": "blue",
    //     "url":"https://i.ibb.co/C6srgQ1/3270.jpg"
    //   }
    axios
      .post(SIGNUP_API, {
        username,
        email,
        password,
        name,
        theme,
        url,
      })
      .then((res) => {
        console.info(res);
        if (res.status === 200) {
          alert('Successfully signed up');
        } else {
          alert('Error signing up');
        }
      })
      .catch((err) => {
        console.error(err);
      });

    handleClose();
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="User Name"
        variant="filled"
        required
        value={username}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => setUserName(e.target.value)}
      />

      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPassword(e.target.value)}
      />
      <TextField
        label="Name"
        variant="filled"
        required
        value={name}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => setName(e.target.value)}
      />
      <TextField
        label="Theme"
        variant="filled"
        required
        value={theme}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => setTheme(e.target.value)}
      />
      <TextField
        label="URl"
        variant="filled"
        required
        value={url}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => setUrl(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Signup;
