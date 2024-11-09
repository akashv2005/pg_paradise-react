import React from 'react';

const Tdashboard = () => {
  // Sample data - in real app would come from props/API
  const userDetails = {
    name: "Akash Verma",
    email: "akash@gmail.com",
    properties: 3,
    totalViews: 1250
  };

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      address: "123 Main St, Downtown",
      views: 450,
      inquiries: 8,
      status: "active"
    },
    {
      id: 2,
      title: "Cozy Studio Apartment",
      address: "456 Park Ave, Midtown",
      views: 380,
      inquiries: 5,
      status: "active"
    },
    {
      id: 3,
      title: "Family Home",
      address: "789 Oak Rd, Suburbs",
      views: 420,
      inquiries: 6,
      status: "active"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">PropertyGuide</h1>
            
            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{userDetails.name}</p>
                <p className="text-xs text-gray-500">{userDetails.email}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white font-medium">
                  {userDetails.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-600">Total Properties</p>
            <p className="text-2xl font-bold text-gray-900">{userDetails.properties}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-600">Total Views</p>
            <p className="text-2xl font-bold text-gray-900">{userDetails.totalViews}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-600">Active Listings</p>
            <p className="text-2xl font-bold text-gray-900">{properties.length}</p>
          </div>
        </div>

        {/* Properties List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Your Properties</h2>
          </div>
          
          <div className="divide-y">
            {properties.map(property => (
              <div key={property.id} className="p-6 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{property.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{property.address}</p>
                    
                    <div className="mt-2 flex items-center space-x-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {property.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex space-x-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{property.views}</p>
                        <p className="text-xs text-gray-500">views</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{property.inquiries}</p>
                        <p className="text-xs text-gray-500">inquiries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tdashboard;