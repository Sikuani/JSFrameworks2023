/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 */
function AddressResults(props) {

  const { formData } = props;
  //const [key, value] = Object.entries(formData);

  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">
      {
        Object.entries(formData).map(([key, value]) => {
          return (
            <li key={key}>
              {key}: {value}
            </li>
          )
        })
      }
      </ul>
    </div>
  );
}

export default AddressResults;
