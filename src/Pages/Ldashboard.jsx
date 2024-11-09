import React, { useState, useEffect } from 'react';

function Ldashboard() {
  const [properties, setProperties] = useState([]);
  const [newProperty, setNewProperty] = useState({
    name: '',
    address: '',
    state: '',
    rent: '',
    beds: 1,
    rooms: 1,
    bathrooms: 1,
    sharing: ''
  });
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const savedProperties = JSON.parse(localStorage.getItem('properties')) || [];
    setProperties(savedProperties);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewProperty({ ...newProperty, [id]: value });
  };

  const handleAddProperty = (e) => {
    e.preventDefault();
    const updatedProperties = [...properties, newProperty];
    setProperties(updatedProperties);
    localStorage.setItem('properties', JSON.stringify(updatedProperties));
    setNewProperty({
      name: '',
      address: '',
      state: '',
      rent: '',
      beds: 1,
      rooms: 1,
      bathrooms: 1,
      sharing: ''
    });
    setModalOpen(false);
  };

  const handleDeleteProperty = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
    localStorage.setItem('properties', JSON.stringify(updatedProperties));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 rounded-md mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">PG Paradise Dashboard</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Add Property
        </button>
      </nav>

      {/* Landlord Info */}
      <div className="bg-white p-5 rounded-md shadow-md mb-6 flex items-center space-x-4">
        <img
          src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png"
          alt="Landlord"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-700">Akash Verma</h3>
          <p className="text-gray-500">Phone: +91 83607 XXXXX</p>
          <p className="text-gray-500">Email: akash@gmail.com</p>
        </div>
      </div>

      {/* Property List */}
      <h3 className="text-2xl font-semibold text-green-500 mb-4">Your Properties</h3>
      {properties.length > 0 ? (
        properties.map((property, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md mb-4 flex justify-between">
            <div>
              <h4 className="text-lg font-bold">{property.name}</h4>
              <p><strong>Location:</strong> {property.address}, {property.state}</p>
              <p><strong>Rent:</strong> ₹{property.rent}</p>
              <p><strong>Sharing:</strong> {property.sharing}</p>
            </div>
            <div className="flex items-center space-x-4">
              <p>{property.beds} Beds</p>
              <p>{property.rooms} Rooms</p>
              <p>{property.bathrooms} Bathrooms</p>
              <button
                onClick={() => handleDeleteProperty(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No properties listed yet.</p>
      )}

      {/* Improved Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Add New Property</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-gray-500 h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <span className="text-2xl leading-none">&times;</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <form onSubmit={handleAddProperty} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Property Name</label>
                  <input
                    type="text"
                    id="name"
                    value={newProperty.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={newProperty.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    id="state"
                    value={newProperty.state}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="rent" className="block text-sm font-medium text-gray-700">Rent (₹)</label>
                  <input
                    type="number"
                    id="rent"
                    value={newProperty.rent}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="beds" className="block text-sm font-medium text-gray-700">Beds</label>
                  <input
                    type="number"
                    id="beds"
                    value={newProperty.beds}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">Rooms</label>
                  <input
                    type="number"
                    id="rooms"
                    value={newProperty.rooms}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Bathrooms</label>
                  <input
                    type="number"
                    id="bathrooms"
                    value={newProperty.bathrooms}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label htmlFor="sharing" className="block text-sm font-medium text-gray-700">Sharing Option</label>
                  <select
                    id="sharing"
                    value={newProperty.sharing}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="Sharing">Sharing</option>
                    <option value="Non-sharing">Non-sharing</option>
                  </select>
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="border-t p-4 flex justify-end space-x-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProperty}
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Add Property
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ldashboard;