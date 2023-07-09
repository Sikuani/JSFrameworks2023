import { useState } from 'react';

import AddressForm from '../AddressForm/AddressForm';
import AddressResults from '../AddressResults/AddressResults';

function App() {
  const [displayResults, setDisplayResults] = useState(false);
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
  });
  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return (
    <>
      {displayResults ? (
        <AddressResults formData={formData} />
      ) : (
        <AddressForm
          setDisplayResults={setDisplayResults}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </>
  );
}

export default App;
