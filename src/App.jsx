import React, { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  const operations = [
    { name: 'Compute Eigenvalues (LU Method)', description: 'This operation computes the eigenvalues...' },
    { name: 'Calculate Determinant', description: 'This operation calculates the determinant...' },
    { name: 'Compare Condition Numbers', description: 'This operation compares the condition number...' },
    { name: 'Find Polynomial Equation', description: 'This operation finds the polynomial equation...' },
    { name: 'Power Method Eigenvalues', description: 'This operation computes the eigenvalues using the power method...' },
    { name: 'Solve Ax=b', description: 'This operation solves the system Ax=b...' },
  ];

  const [currentOperation, setCurrentOperation] = useState(0);
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNext = () => {
    setCurrentOperation((prevOperation) => (prevOperation + 1) % operations.length);
  };

  const handlePrev = () => {
    setCurrentOperation((prevOperation) =>
      prevOperation === 0 ? operations.length - 1 : prevOperation - 1
    );
  };

  const handleSelectOperation = () => {
    console.log('Operation selected:', operations[currentOperation].name);
  };

  const buttonVariant = {
    hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 },
  };

  return (
    <div className="app-container">
      <div className="left-section">
        <h1 className="heading">Numerical Methods Assignment 1</h1>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <label className="file-upload">
            <input type="file" onChange={handleFileUpload} />
            Upload File
          </label>
        </motion.div>

        <div className="card-container">
          <motion.button
            className="arrow left"
            onClick={handlePrev}
            variants={buttonVariant}
            whileHover="hover"
            whileTap="tap"
          >
            ←
          </motion.button>

          <motion.div
            className="card-wrapper"
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card">
              <h2>{operations[currentOperation].name}</h2>
              <p>{operations[currentOperation].description}</p>

              <motion.button
                className="select-button"
                onClick={handleSelectOperation}
                variants={buttonVariant}
                whileHover="hover"
                whileTap="tap"
              >
                Select
              </motion.button>
            </div>
          </motion.div>

          <motion.button
            className="arrow right"
            onClick={handleNext}
            variants={buttonVariant}
            whileHover="hover"
            whileTap="tap"
          >
            →
          </motion.button>
        </div>
        <div className="watermark">
          Aryan Agarwal (ES23BTECH11008)<br />
          Amogh Bindal (ES23BTECH11004)<br />
          Harshil Goyal (ES23BTECH11016)
        </div>
      </div>

      <div className="right-section">
        <div className="top-section">
        </div>
        <div className="bottom-section">
        </div>
      </div>
    </div>
  );
}

export default App;
