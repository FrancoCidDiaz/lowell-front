import { useState } from 'react';


const SearchBar = () => {
 
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };  


  return (
    <div id='catalogo' className="mt-40 text-center">
        <h2 className="text-3xl mb-3 mt-6">La busqueda empieza aca</h2>
        <h3 className="text-1xl">Encuentra el producto que necesitas</h3>
        <div className='w-full my-4'>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleInputChange}
            className="border border-gray-400 p-3 w-2/4"
            />
        <button className='bg-primary text-white py-3 px-6 mx-3'>Buscar</button>
        <button className='bg-gray-200 py-3 px-6 mx-3' onClick={() => setSearchTerm("")}>Limpiar</button>

    </div>
    <p>Has buscado: {searchTerm}</p>
    </div>
  )
}

export default SearchBar