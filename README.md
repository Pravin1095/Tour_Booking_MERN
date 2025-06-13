# Tour_Booking_MERN



useCallback:

How useCallback Works:

Function Memoization:
React will only re-create the function if one of the dependencies changes.
If dependencies don't change, React reuses the previously created function, avoiding unnecessary re-renders.

Dependencies Array:
Dependencies are the values or variables used inside the function.
If these values change, the function is re-created with the updated values.

Eg:
const Button = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []);

  return <button onClick={handleClick}>Clicked {clicks} times</button>;
};

In the above code , when the component is rerendered whenever user clicks a button, the handleClick is function won't be recreated , it will use the same function that was called at the beginning.

Now, let's look at another example:

const Button = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = useCallback(() => {
    setClicks(clicks+1);
  }, []);

  return <button onClick={handleClick}>Clicked {clicks} times</button>;
};

In the above example we are updating the clicks based on the clicks value itself instead of prevClick. So since we don't have a dependency the function won't be taking the updated click value and hence inside the function the value of click will always be 0 and the function won't work as we expected 

AbortController.abort():
Cancels the associated operation and triggers an AbortError.
AbortController.signal:
Returns an AbortSignal instance that can be passed to tasks like fetch.

SPA Authentication : 

Basically, currently we are just checking whether the user is logged in or not using login id and password but the server didn't really know if user is authenticated or not and whether he can access a specific rest API.
We can have two approaches for this we can send a session from server to client and that session we can store in a cookie but since the API is stateless (decoupled from frontend) it doesn't require to remember sessions and to what session the frontend belongs to. So we use another method of generating tokens from server which we can store in local storage/cookies in frontend. This token can be attached by the frontend to requests that request protected resources. The server generates the token with a certain algorithm. A private key is passed to the algorithm and with data it genetates a token and for different key with same data it generates another token. 
So when frontend try to access requests a protected API the server validates this token and grants access.
And with this approcah we no need to store any data on the server except for this private key we then know which token makes sense for this private key

Hashing passwords:

It is not advised to store the password that user is sending as it is instead we need to encrypt those so that when our database is compromised by hackers the password won't be available to them. So we hash our passwords and we use the npm package bcryptjs

JWT : 

To generate token we need to install a package named jsonwebtoken. We use the method sign in jwt where we pass the first argument as the data that we want to encode within the generated token, The 2nd argument is super important which is the private key that we don't want to share to anyone. If user finds this somehow then it will be compromised and he can access user data. The 3rd argument is the time for which the token expires and new one to be generated