import React, { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  const operations = [
    {
      name: 'Compute Eigenvalues (LU Method)',
      description: 'Compute the eigenvalues of a square matrix using LU decomposition.',
      answer: 'The eigenvalues are: λ₁ = 3, λ₂ = 5.',
    },
    {
      name: 'Calculate Determinant',
      description: 'Calculate the determinant of a matrix to determine its invertibility.',
      answer: 'The determinant is: 45.',
    },
    {
      name: 'Compare Condition Numbers',
      description: 'Analyze the sensitivity of matrices by comparing condition numbers.',
      answer: 'Matrix A: 3.5, Matrix B: 7.1.',
    },
    {
      name: 'Find Polynomial Equation',
      description: 'Find the characteristic polynomial of a matrix.',
      answer: 'The polynomial is: x² - 5x + 6.',
    },
    {
      name: 'Power Method Eigenvalues',
      description: 'Iteratively find the dominant eigenvalue of a matrix using the power method.',
      answer: 'The dominant eigenvalue is: 5.',
    },
    {
      name: 'Solve Ax=b',
      description: 'Solve the linear system Ax = b for x using numerical methods.',
      answer: 'Solution vector: x = [1, 2, 3].',
    },
  ];

  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [showRightSection, setShowRightSection] = useState(false);
  const [currentOperation, setCurrentOperation] = useState(0);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    setFileError('');
  };

  const handleSubmit = () => {
    if (!file) {
      setFileError('Please upload a file.');
      return;
    }
    const validFormats = ['csv', 'txt'];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (!validFormats.includes(fileExtension)) {
      setFileError('Invalid file format. Please upload a .csv or .txt file.');
      return;
    }
    setShowRightSection(true); // Show the right section only after successful validation
  };

  const handleNext = () => {
    setCurrentOperation((prev) => (prev + 1) % operations.length);
  };

  const handlePrev = () => {
    setCurrentOperation((prev) =>
      prev === 0 ? operations.length - 1 : prev - 1
    );
  };

  return (
    <div className="app-container">
      <div className="left-section">
        <h1 className="heading">Numerical Methods Assignment 1</h1>
        <label className="file-upload">
          <input type="file" onChange={handleFileUpload} />
          Upload File
        </label>
        {file && <div className="file-name">{file.name}</div>} {/* Display file name */}
        {fileError && <div className="error-message">{fileError}</div>}
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {showRightSection && (
        <div className="right-section">
          <div className="card-container">
            <motion.button
              className="arrow left"
              onClick={handlePrev}
              whileHover={{ backgroundColor: '#ff4f4b' }}
            >
              ←
            </motion.button>
            <motion.div
              className="card-wrapper"
              key={currentOperation}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card">
                <h2>{operations[currentOperation].name}</h2>
                <p>{operations[currentOperation].description}</p>
                <div className="answer-highlight">
                  <h3>Answer</h3>
                  <p>{operations[currentOperation].answer}</p>
                </div>
              </div>
            </motion.div>
            <motion.button
              className="arrow right"
              onClick={handleNext}
              whileHover={{ backgroundColor: '#ff4f4b' }}
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
      )}
    </div>
  );
}

export default App;
