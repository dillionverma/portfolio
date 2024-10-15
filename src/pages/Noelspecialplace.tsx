import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from Next.js

const Noelspecialplace: React.FC = () => {
  const [key, setKey] = useState<string>('');
  const [accessGranted, setAccessGranted] = useState<boolean>(false);
  const correctKey = '0000'; // Replace with your actual key

  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };

  const handleKeySubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (key === correctKey) {
      setAccessGranted(true);
    } else {
      alert('Incorrect key. Please try again.');
    }
  };

  return (
    <div>
      {accessGranted ? (
        <>
          <h1>Welcome to JVEVs World, Noel!</h1>
          <Image 
            src="/eggmobile.jpeg" // Ensure this path is correct
            alt="Join the revolution"
            width={500} // Set the desired width
            height={300} // Set the desired height
          />
        </>
      ) : (
        <form onSubmit={handleKeySubmit}>
          <label>
            Enter Key:
            <input type="text" value={key} onChange={handleKeyChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Noelspecialplace;