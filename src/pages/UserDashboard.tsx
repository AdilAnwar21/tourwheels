import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  TrendingUp, 
  Users, 
  DollarSign,
  Search,
  Filter,
  Heart,
  Phone,
  Mail,
  MessageSquare,
  Upload,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
  XCircle,
  User,
  Bell,
  Shield,
  CreditCard,
  Settings as SettingsIcon,
  HelpCircle,
  FileText,
  Download
} from 'lucide-react';
import UserNavbar from '../components/UserNavbar';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  // Mock data
  const userStats = {
    totalBookings: 12,
    activeTrips: 2,
    favoriteVehicles: 8,
    totalSpent: 15600
  };

  const currentBookings = [
    {
      id: 1,
      vehicleName: 'Luxury Coach AC',
      destination: 'Goa Beach Resort',
      date: '2024-01-20',
      time: '09:00 AM',
      passengers: 25,
      status: 'Confirmed',
      amount: 2500,
      driverName: 'Rajesh Kumar',
      driverPhone: '+91 98765 43210',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&fit=crop'
    },
    {
      id: 2,
      vehicleName: 'Mini Bus',
      destination: 'Hill Station Tour',
      date: '2024-01-25',
      time: '06:00 AM',
      passengers: 12,
      status: 'Pending',
      amount: 1800,
      driverName: 'Amit Singh',
      driverPhone: '+91 98765 43211',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&fit=crop'
    }
  ];

  const suggestions = [
    {
      id: 1,
      title: 'Weekend Getaway Package',
      description: 'Perfect for family trips to nearby hill stations',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&fit=crop',
      price: 3500,
      rating: 4.8,
      category: 'Family Package'
    },
    {
      id: 2,
      title: 'Corporate Event Transport',
      description: 'Luxury coaches for corporate events and conferences',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&fit=crop',
      price: 5000,
      rating: 4.9,
      category: 'Corporate'
    },
    {
      id: 3,
      title: 'Adventure Trip Special',
      description: 'Rugged vehicles for adventure and trekking trips',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&fit=crop',
      price: 2800,
      rating: 4.7,
      category: 'Adventure'
    }
  ];

  const vehicles = [
    {
      id: 1,
      name: 'Luxury Coach AC',
      company: 'Premium Travels',
      category: 'Bus',
      capacity: 45,
      rating: 4.9,
      price: 2500,
      features: ['AC', 'WiFi', 'GPS', 'Entertainment'],
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&fit=crop',
      available: true,
      location: 'Mumbai'
    },
    {
      id: 2,
      name: 'Mini Bus Deluxe',
      company: 'City Tours',
      category: 'Mini Bus',
      capacity: 12,
      rating: 4.7,
      price: 1800,
      features: ['AC', 'GPS', 'Music System'],
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&fit=crop',
      available: true,
      location: 'Delhi'
    },
    {
      id: 3,
      name: 'Tempo Traveller',
      company: 'Adventure Rides',
      category: 'Traveller',
      capacity: 9,
      rating: 4.8,
      price: 2200,
      features: ['AC', 'GPS', 'First Aid'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&fit=crop',
      available: false,
      location: 'Bangalore'
    }
  ];

  const BookingModal = () => {
    const [bookingData, setBookingData] = useState({
      pickupDate: '',
      returnDate: '',
      pickupLocation: '',
      destination: '',
      passengers: 1,
      specialRequests: ''
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Book {selectedVehicle?.name}</h3>
            <button
              onClick={() => setShowBookingModal(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={selectedVehicle?.image}
                alt={selectedVehicle?.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h4 className="font-semibold">{selectedVehicle?.name}</h4>
                <p className="text-gray-600">{selectedVehicle?.company}</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">₹{selectedVehicle?.price}/day</p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    value={bookingData.pickupDate}
                    onChange={(e) => setBookingData({...bookingData, pickupDate: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    value={bookingData.returnDate}
                    onChange={(e) => setBookingData({...bookingData, returnDate: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter pickup address"
                  value={bookingData.pickupLocation}
                  onChange={(e) => setBookingData({...bookingData, pickupLocation: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter destination"
                  value={bookingData.destination}
                  onChange={(e) => setBookingData({...bookingData, destination: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Passengers</label>
                <input
                  type="number"
                  min="1"
                  max={selectedVehicle?.capacity}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={bookingData.passengers}
                  onChange={(e) => setBookingData({...bookingData, passengers: parseInt(e.target.value)})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Any special requirements..."
                  value={bookingData.specialRequests}
                  onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <UserNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Welcome Section */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
                  <p className="text-blue-100">Ready for your next adventure? Let's plan your perfect trip.</p>
                </motion.div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Total Bookings', value: userStats.totalBookings, icon: Calendar, color: 'blue' },
                  { label: 'Active Trips', value: userStats.activeTrips, icon: MapPin, color: 'green' },
                  { label: 'Favorites', value: userStats.favoriteVehicles, icon: Heart, color: 'red' },
                  { label: 'Total Spent', value: `₹${userStats.totalSpent.toLocaleString()}`, icon: DollarSign, color: 'purple' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center">
                      <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                        <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Current Bookings */}
              <div className="bg-white rounded-xl shadow-sm border">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold">Current Bookings</h3>
                </div>
                <div className="p-6 space-y-4">
                  {currentBookings.map((booking) => (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200"
                    >
                      <img
                        src={booking.image}
                        alt={booking.vehicleName}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{booking.vehicleName}</h4>
                        <p className="text-gray-600 text-sm">{booking.destination}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {booking.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {booking.time}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {booking.passengers} passengers
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                        <p className="text-lg font-bold text-gray-900 mt-1">₹{booking.amount}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div className="bg-white rounded-xl shadow-sm border">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold">Suggested for You</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {suggestions.map((suggestion, index) => (
                      <motion.div
                        key={suggestion.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group cursor-pointer"
                      >
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src={suggestion.image}
                            alt={suggestion.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4">
                            <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                              {suggestion.category}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                            {suggestion.title}
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">{suggestion.description}</p>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium ml-1">{suggestion.rating}</span>
                            </div>
                            <span className="text-lg font-bold text-blue-600">₹{suggestion.price}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Search Tab */}
          {activeTab === 'search' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Search Header */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-2xl font-bold mb-4">Find Your Perfect Vehicle</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      placeholder="Enter city or location"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>All Categories</option>
                      <option>Bus</option>
                      <option>Mini Bus</option>
                      <option>Traveller</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                    <input
                      type="number"
                      placeholder="Number of passengers"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-end">
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                      <Search className="h-5 w-5 mr-2" />
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* Vehicles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="relative">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                          <Heart className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          vehicle.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {vehicle.available ? 'Available' : 'Booked'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium ml-1">{vehicle.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{vehicle.company}</p>
                      <p className="text-gray-600 text-sm mb-4">{vehicle.category} • {vehicle.capacity} seats • {vehicle.location}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {vehicle.features.map((feature) => (
                          <span key={feature} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">₹{vehicle.price}/day</span>
                        <button
                          onClick={() => {
                            setSelectedVehicle(vehicle);
                            setShowBookingModal(true);
                          }}
                          disabled={!vehicle.available}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                        >
                          {vehicle.available ? 'Book Now' : 'Not Available'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Bookings Tab */}
          {activeTab === 'bookings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My Bookings</h2>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    All Bookings
                  </button>
                  <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Active
                  </button>
                  <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Completed
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {currentBookings.map((booking) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-xl shadow-sm border p-6"
                  >
                    <div className="flex items-start space-x-6">
                      <img
                        src={booking.image}
                        alt={booking.vehicleName}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold">{booking.vehicleName}</h3>
                            <p className="text-gray-600">{booking.destination}</p>
                          </div>
                          <span className={`px-3 py-1 text-sm rounded-full ${
                            booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">Date & Time</p>
                            <p className="font-medium">{booking.date}</p>
                            <p className="text-sm text-gray-600">{booking.time}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Passengers</p>
                            <p className="font-medium">{booking.passengers} people</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Driver</p>
                            <p className="font-medium">{booking.driverName}</p>
                            <p className="text-sm text-gray-600">{booking.driverPhone}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Amount</p>
                            <p className="font-medium text-lg">₹{booking.amount}</p>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            <Phone className="h-4 w-4" />
                            <span>Call Driver</span>
                          </button>
                          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <MessageSquare className="h-4 w-4" />
                            <span>Message</span>
                          </button>
                          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <Eye className="h-4 w-4" />
                            <span>View Details</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Account Settings</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Information */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        defaultValue="+91 98765 43210"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <textarea
                        rows={3}
                        defaultValue="123 Main Street, Mumbai, Maharashtra, India"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>

                {/* Quick Settings */}
                <div className="space-y-6">
                  {/* Notifications */}
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Email Notifications', enabled: true },
                        { label: 'SMS Alerts', enabled: false },
                        { label: 'Push Notifications', enabled: true },
                        { label: 'Booking Reminders', enabled: true }
                      ].map((setting) => (
                        <div key={setting.label} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">{setting.label}</span>
                          <button
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              setting.enabled ? 'bg-blue-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                setting.enabled ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Security */}
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-lg font-semibold mb-4">Security</h3>
                    <div className="space-y-3">
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                        Change Password
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                        Two-Factor Authentication
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                        Login History
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Enquiry Tab */}
          {activeTab === 'enquiry' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Contact & Support</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4">Send us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>General Inquiry</option>
                        <option>Booking Issue</option>
                        <option>Payment Problem</option>
                        <option>Technical Support</option>
                        <option>Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Describe your inquiry or issue..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Attachment (Optional)</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information & FAQ */}
                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Phone Support</p>
                          <p className="text-sm text-gray-600">+91 1800 123 4567</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Email Support</p>
                          <p className="text-sm text-gray-600">support@tourwheels.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Live Chat</p>
                          <p className="text-sm text-gray-600">Available 24/7</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ */}
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-3">
                      {[
                        'How do I cancel my booking?',
                        'What is the refund policy?',
                        'How can I modify my trip?',
                        'What documents do I need?',
                        'How do I contact my driver?'
                      ].map((question) => (
                        <button
                          key={question}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center justify-between"
                        >
                          <span>{question}</span>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other tabs placeholder */}
          {(['favorites', 'payments', 'notifications'].includes(activeTab)) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border p-8 text-center"
            >
              <div className="text-gray-400 mb-4">
                <Calendar className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
              </h3>
              <p className="text-gray-600">
                This section is under development. Content will be added soon.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && <BookingModal />}
    </div>
  );
};

export default UserDashboard;