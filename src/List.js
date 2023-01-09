import React from 'react';
const List = (props) => {
  function handleClicksold(strID) {
    // let strID = this.getAttribute('data-id');
    console.log(strID);
    const apiUrl = 'https://petstore.swagger.io/v2/pet';
    return fetch(apiUrl)
      
  }
  function handleClickdelete(strID) {
    const apiUrl = 'https://petstore.swagger.io/v2/pet/' + strID;
    return fetch(apiUrl, {method:'DELETE'})
      
  }
  const { pets } = props;
  if (!pets || pets.length === 0) return <p>No pets, sorry</p>;
  return (
    <ul>
      <div className="App">
      <header className="App-header">
        <div class="card col-10 offset-1">
          <h2 class="col-12 text-center">Available Pets</h2>
          <div class="card-body">
            <table class="table table-hover" id="tblpetstore">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Buy</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <td>
                  {pets.map((pet) => {
                return (
                  <li key={pet.id} className='list'>
                    <span className='pet-text'>{pet.name} </span>
                  </li>
                  );
                })}
              </td>
              <td>
                {pets.map((pet) => {
                if(pet.category){
                  return (
                    <li key={pet.id} className='list'>
                      <span className='pet-text'>{pet.category.name} </span>
                    </li>
                  );
                }else{
                  return (
                  <li key={pet.id} className='list'>
                    <span className='pet-text'>{} </span>
                  </li>
                );
                }
              })}
              </td>
              <td>
                {pets.map((pet) => {
                return (
                  <li key={pet.id} className='list'>
                    <span className='pet-text'>{pet.status} </span>
                  </li>
                );
              })}
              </td>
              <td>
              {pets.map((pet) => {
                return (
                  <li key={pet.id} className='list'>
                    <button id="sold"type="button" class="btn btn-danger btn-sold" data-id={pet.id} onClick={() => handleClicksold(pet.id)}>Sold</button>
                  </li>
                );
              })}
              </td>
              <td>
              {pets.map((pet) => {
                return (
                  <li key={pet.id} className='list'>
                    <button id="Delete"type="button" class="btn btn-danger btn-sold" data-id={pet.id} onClick={() =>handleClickdelete(pet.id)}>Delete</button>
                  </li>
                );
              })}
              </td>
              </tbody>
            </table>
          </div>
        </div>
        
      </header>
    </div>
    </ul>
  );
};
export default List;
