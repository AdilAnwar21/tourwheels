import 
// React,
 { useState, useEffect } 
 from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bus, 
  DollarSign, 
  // Users, 
  Star, 
  TrendingUp, 
  Calendar,
  Plus,
  Eye,
  Edit,
  // Trash2,
  // MapPin,
  // Clock,
  User,
  // Phone,
  // Mail
} from 'lucide-react';
import MerchantSidebar from '../components/MerchantSidebar';
import Loader from '../components/Loader';

const MerchantDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddBusModal, setShowAddBusModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tabLoading, setTabLoading] = useState(false);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Simulate tab loading
  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setTabLoading(true);
      setTimeout(() => {
        setActiveTab(tab);
        setTabLoading(false);
      }, 800);
    }
  };

  // Mock data - replace with API calls later
  const dashboardStats = {
    totalSales: 125000,
    totalBookings: 342,
    activeVehicles: 12,
    averageRating: 4.8,
    monthlyGrowth: 15.2
  };

  const recentBookings = [
    { id: 1, customer: 'John Doe', vehicle: 'Luxury Coach AC', date: '2024-01-15', amount: 2500, status: 'Completed' },
    { id: 2, customer: 'Sarah Smith', vehicle: 'Mini Bus', date: '2024-01-14', amount: 1800, status: 'Ongoing' },
    { id: 3, customer: 'Mike Johnson', vehicle: 'Tempo Traveller', date: '2024-01-13', amount: 2200, status: 'Completed' },
  ];

  const vehicles = [
    {
      id: 1,
      name: 'Luxury Coach AC',
      category: 'Bus',
      capacity: 45,
      rating: 4.9,
      totalBookings: 89,
      revenue: 45000,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&fit=crop',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Mini Bus',
      category: 'Mini Bus',
      capacity: 12,
      rating: 4.7,
      totalBookings: 67,
      revenue: 28000,
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&fit=crop',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Tempo Traveller',
      category: 'Traveller',
      capacity: 9,
      rating: 4.8,
      totalBookings: 52,
      revenue: 22000,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&fit=crop',
      status: 'Maintenance'
    }
  ];

  const reviews = [
    {
      id: 1,
      customer: 'Alice Brown',
      vehicle: 'Luxury Coach AC',
      rating: 5,
      comment: 'Excellent service! Very comfortable journey.',
      date: '2024-01-10'
    },
    {
      id: 2,
      customer: 'Robert Wilson',
      vehicle: 'Mini Bus',
      rating: 4,
      comment: 'Good vehicle, professional driver.',
      date: '2024-01-08'
    },
    {
      id: 3,
      customer: 'Emma Davis',
      vehicle: 'Tempo Traveller',
      rating: 5,
      comment: 'Perfect for our family trip!',
      date: '2024-01-05'
    }
  ];

  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      totalBookings: 5,
      totalSpent: 12500,
      lastBooking: '2024-01-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      phone: '+1 234 567 891',
      totalBookings: 3,
      totalSpent: 8200,
      lastBooking: '2024-01-14',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1 234 567 892',
      totalBookings: 7,
      totalSpent: 15600,
      lastBooking: '2024-01-13',
      status: 'VIP'
    }
  ];

  const AddBusModal = () => {
    const [busData, setBusData] = useState({
      name: '',
      category: '',
      capacity: '',
      pricePerDay: '',
      features: '',
      description: ''
    });

    const categories = ['Bus', 'Mini Bus', 'Traveller', 'Luxury Coach', 'SUV', 'Sedan'];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold">Add New Vehicle</h3>
            <button
              onClick={() => setShowAddBusModal(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={busData.name}
                  onChange={(e) => setBusData({...busData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={busData.category}
                  onChange={(e) => setBusData({...busData, category: e.target.value})}
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={busData.capacity}
                  onChange={(e) => setBusData({...busData, capacity: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price per Day ($)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={busData.pricePerDay}
                  onChange={(e) => setBusData({...busData, pricePerDay: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Features</label>
              <input
                type="text"
                placeholder="AC, WiFi, GPS, etc."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={busData.features}
                onChange={(e) => setBusData({...busData, features: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={busData.description}
                onChange={(e) => setBusData({...busData, description: e.target.value})}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setShowAddBusModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Vehicle
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  };

  if (isLoading) {
    return <Loader fullScreen text="Loading merchant dashboard..." size="lg" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <MerchantSidebar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="p-4 lg:p-8">
          {/* Header */}
          <div className="mb-8 mt-16 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'vehicles' && 'My Vehicles'}
              {activeTab === 'bookings' && 'Bookings Management'}
              {activeTab === 'reviews' && 'Customer Reviews'}
              {activeTab === 'analytics' && 'Analytics & Reports'}
              {activeTab === 'customers' && 'Customer Management'}
              {activeTab === 'messages' && 'Messages'}
              {activeTab === 'earnings' && 'Earnings & Payouts'}
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {activeTab === 'overview' && 'Welcome back! Here\'s what\'s happening with your business.'}
              {activeTab === 'vehicles' && 'Manage your fleet and add new vehicles'}
              {activeTab === 'bookings' && 'Track and manage all your bookings'}
              {activeTab === 'reviews' && 'See what customers are saying about your service'}
              {activeTab === 'analytics' && 'Analyze your business performance'}
              {activeTab === 'customers' && 'Manage your customer relationships'}
              {activeTab === 'messages' && 'Communicate with your customers'}
              {activeTab === 'earnings' && 'Track your earnings and manage payouts'}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {tabLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Loader text="Loading content..." size="md" />
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6 sm:space-y-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
                      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="p-2 bg-green-100 rounded-lg mb-2 sm:mb-0 self-start">
                            <DollarSign className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
                          </div>
                          <div className="sm:ml-4">
                            <p className="text-xs sm:text-sm font-medium text-gray-600">Total Sales</p>
                            <p className="text-lg sm:text-2xl font-bold text-gray-900">${dashboardStats.totalSales.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="p-2 bg-blue-100 rounded-lg mb-2 sm:mb-0 self-start">
                            <Calendar className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" />
                          </div>
                          <div className="sm:ml-4">
                            <p className="text-xs sm:text-sm font-medium text-gray-600">Total Bookings</p>
                            <p className="text-lg sm:text-2xl font-bold text-gray-900">{dashboardStats.totalBookings}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="p-2 bg-purple-100 rounded-lg mb-2 sm:mb-0 self-start">
                            <Bus className="h-4 w-4 sm:h-6 sm:w-6 text-purple-600" />
                          </div>
                          <div className="sm:ml-4">
                            <p className="text-xs sm:text-sm font-medium text-gray-600">Active Vehicles</p>
                            <p className="text-lg sm:text-2xl font-bold text-gray-900">{dashboardStats.activeVehicles}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="p-2 bg-yellow-100 rounded-lg mb-2 sm:mb-0 self-start">
                            <Star className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-600" />
                          </div>
                          <div className="sm:ml-4">
                            <p className="text-xs sm:text-sm font-medium text-gray-600">Avg Rating</p>
                            <p className="text-lg sm:text-2xl font-bold text-gray-900">{dashboardStats.averageRating}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="p-2 bg-red-100 rounded-lg mb-2 sm:mb-0 self-start">
                            <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 text-red-600" />
                          </div>
                          <div className="sm:ml-4">
                            <p className="text-xs sm:text-sm font-medium text-gray-600">Growth</p>
                            <p className="text-lg sm:text-2xl font-bold text-gray-900">+{dashboardStats.monthlyGrowth}%</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Bookings */}
                    <div className="bg-white rounded-xl shadow-sm border">
                      <div className="p-4 sm:p-6 border-b">
                        <h3 className="text-lg font-semibold">Recent Bookings</h3>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vehicle</th>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {recentBookings.map((booking) => (
                              <tr key={booking.id}>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.customer}</td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.vehicle}</td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.date}</td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">${booking.amount}</td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    booking.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    {booking.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* Vehicles Tab */}
                {activeTab === 'vehicles' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold">My Vehicles</h2>
                        <p className="text-gray-600 text-sm sm:text-base">Manage your fleet and track performance</p>
                      </div>
                      <button
                        onClick={() => setShowAddBusModal(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2 text-sm sm:text-base"
                      >
                        <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span>Add Vehicle</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                      {vehicles.map((vehicle) => (
                        <div key={vehicle.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-40 sm:h-48 object-cover"
                          />
                          <div className="p-4 sm:p-6">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-sm sm:text-lg font-semibold">{vehicle.name}</h3>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                vehicle.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {vehicle.status}
                              </span>
                            </div>
                            <p className="text-gray-600 text-xs sm:text-sm mb-4">{vehicle.category} • {vehicle.capacity} seats</p>
                            
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center justify-between">
                                <span className="text-xs sm:text-sm text-gray-600">Rating</span>
                                <div className="flex items-center">
                                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                                  <span className="text-xs sm:text-sm font-medium ml-1">{vehicle.rating}</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs sm:text-sm text-gray-600">Bookings</span>
                                <span className="text-xs sm:text-sm font-medium">{vehicle.totalBookings}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs sm:text-sm text-gray-600">Revenue</span>
                                <span className="text-xs sm:text-sm font-medium">${vehicle.revenue.toLocaleString()}</span>
                              </div>
                            </div>

                            <div className="flex space-x-2">
                              <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-1 text-xs sm:text-sm">
                                <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>View</span>
                              </button>
                              <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 flex items-center justify-center space-x-1 text-xs sm:text-sm">
                                <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>Edit</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Customers Tab */}
                {activeTab === 'customers' && (
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border">
                      <div className="p-4 sm:p-6 border-b">
                        <h3 className="text-lg font-semibold">Customer Database</h3>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bookings</th>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Spent</th>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Booking</th>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {customers.map((customer) => (
                              <tr key={customer.id}>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-xs sm:text-sm font-medium text-gray-900">{customer.name}</div>
                                      <div className="text-xs text-gray-500">{customer.email}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{customer.phone}</td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{customer.totalBookings}</td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">${customer.totalSpent.toLocaleString()}</td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{customer.lastBooking}</td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    customer.status === 'VIP' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                                  }`}>
                                    {customer.status}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm">
                                  <button className="text-blue-600 hover:text-blue-900">View Details</button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <User className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm sm:text-base">{review.customer}</h4>
                                <p className="text-xs sm:text-sm text-gray-600">{review.vehicle}</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700 mb-3 text-sm sm:text-base">"{review.comment}"</p>
                          <p className="text-xs sm:text-sm text-gray-500">{review.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Other tabs content */}
                {(activeTab === 'bookings' || activeTab === 'analytics' || activeTab === 'messages' || activeTab === 'earnings') && (
                  <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
                    <div className="text-gray-400 mb-4">
                      <Bus className="h-12 w-12 sm:h-16 sm:w-16 mx-auto" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      This section is under development. Content will be added soon.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Add Bus Modal */}
      <AnimatePresence>
        {showAddBusModal && <AddBusModal />}
      </AnimatePresence>
    </div>
  );
};

export default MerchantDashboard;