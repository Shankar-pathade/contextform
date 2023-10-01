import React from 'react';
import FormComponent from './FormComponent';
import { FormProvider } from './FormProvider';
import './FormStyles.css'

function App() {
  return (
    <FormProvider>
      <FormComponent />
    </FormProvider>
  );
}

export default App;