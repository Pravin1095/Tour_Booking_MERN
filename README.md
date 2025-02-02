# Tour_Booking_MERN

MongoDB password : FTfRy9MHfq5wAQF1

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
