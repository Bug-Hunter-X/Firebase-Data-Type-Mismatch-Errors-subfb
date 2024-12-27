//Check data type before using
const handleData = (data) => {
  if (typeof data === 'string') {
    // Handle string data
    console.log("String data received:", data);
  } else if (typeof data === 'number') {
    // Handle number data
    console.log("Number data received:", data);
  } else if (Array.isArray(data)) {
    // Handle array data
    console.log("Array data received:", data);
  } else if (typeof data === 'object' && data !== null) {
    // Handle object data
    console.log("Object data received:", data);
  } else {
    // Handle unexpected data types
    console.error('Unexpected data type received:', data);
  }
};