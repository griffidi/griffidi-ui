export const signin = async (username: string, password: string) => {
  try {
    fetch('http://localhost:4003/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data) {
          localStorage.setItem('token', data);
          return data;
        }
        throw new Error('Invalid credentials');
      })
      .catch(error => {
        console.error('Error during sign-in:', error);
        return null;
      });
  } catch (error) {
    console.error('Failed to sign-in', error);
    return null;
  }
};

export const signOut = () => {
  // Perform sign-out logic here
  console.log('signOut');
  return true;
};

export const validate = () => {
  // Check if the user is authenticated
  const token = localStorage.getItem('token');
  return !!token;
};
