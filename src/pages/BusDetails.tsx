import 
// React, 
{ useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  MapPin, 
  // Calendar, 
  // Clock, 
  Shield, 
  Wifi, 
  Snowflake, 
  Music, 
  Phone, 
  Mail, 
  Heart,
  Share2,
  CheckCircle,
  AlertCircle,
  Camera,
  Navigation,
  Fuel,
  Settings,
  Award,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const BusDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bus, setBus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - replace with API call
  useEffect(() => {
    const fetchBusDetails = async () => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setBus({
          id: id,
          name: 'Luxury Coach AC Premium',
          company: 'Premium Travels & Tours',
          category: 'Luxury Bus',
          capacity: 45,
          rating: 4.9,
          reviewCount: 234,
          price: 2500,
          originalPrice: 3000,
          discount: 17,
          location: 'Mumbai, Maharashtra',
          availability: 'Available',
          description: 'Experience the ultimate in comfort and luxury with our premium coach service. Perfect for long-distance travel, corporate events, and group tours. Our vehicles are equipped with state-of-the-art amenities to ensure your journey is as comfortable as your destination.',
          images: [
            'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&fit=crop',
            'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&fit=crop',
            'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&fit=crop',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop',
            'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=800&fit=crop'
          ],
          features: [
            { icon: <Snowflake className="h-5 w-5" />, name: 'Air Conditioning', description: 'Climate controlled environment' },
            { icon: <Wifi className="h-5 w-5" />, name: 'Free WiFi', description: 'High-speed internet access' },
            { icon: <Music className="h-5 w-5" />, name: 'Entertainment System', description: 'LCD screens with movies & music' },
            { icon: <Shield className="h-5 w-5" />, name: 'GPS Tracking', description: 'Real-time location tracking' },
            { icon: <Settings className="h-5 w-5" />, name: 'Reclining Seats', description: 'Comfortable adjustable seating' },
            { icon: <Navigation className="h-5 w-5" />, name: 'Professional Driver', description: 'Experienced & licensed drivers' },
            { icon: <Fuel className="h-5 w-5" />, name: 'Fuel Efficient', description: 'Eco-friendly BS6 engine' },
            { icon: <CheckCircle className="h-5 w-5" />, name: 'Safety Certified', description: 'All safety standards met' }
          ],
          specifications: {
            model: '2023 Volvo B11R',
            engine: 'BS6 Diesel Engine',
            transmission: 'Automatic',
            fuelType: 'Diesel',
            mileage: '8.5 km/l',
            seatingLayout: '2+2 Configuration',
            luggage: '500kg Capacity',
            insurance: 'Comprehensive Coverage'
          },
          driver: {
            name: 'Rajesh Kumar',
            experience: '12 years',
            rating: 4.8,
            phone: '+91 98765 43210',
            languages: ['Hindi', 'English', 'Marathi'],
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
          },
          reviews: [
            {
              id: 1,
              user: 'Priya Sharma',
              rating: 5,
              date: '2024-01-15',
              comment: 'Excellent service! The bus was very comfortable and the driver was professional. Highly recommended for long trips.',
              helpful: 12,
              image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=50&h=50&fit=crop'
            },
            {
              id: 2,
              user: 'Amit Patel',
              rating: 5,
              date: '2024-01-10',
              comment: 'Amazing experience! The bus was clean, punctual, and had all the amenities as promised. Will definitely book again.',
              helpful: 8,
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop'
            },
            {
              id: 3,
              user: 'Sneha Reddy',
              rating: 4,
              date: '2024-01-05',
              comment: 'Good service overall. The journey was comfortable and safe. Minor delay but driver kept us informed.',
              helpful: 5,
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'
            }
          ],
          policies: {
            cancellation: 'Free cancellation up to 24 hours before departure',
            refund: 'Full refund for cancellations made 48+ hours in advance',
            modification: 'Trip modifications allowed up to 12 hours before departure',
            luggage: 'Up to 20kg per passenger included',
            pets: 'Pets allowed with prior notification',
            smoking: 'Strictly no smoking inside the vehicle'
          }
        });
        setIsLoading(false);
      }, 1500);
    };

    fetchBusDetails();
  }, [id]);

  const BookingModal = () => {
    const [bookingData, setBookingData] = useState({
      pickupDate: '',
      returnDate: '',
      pickupLocation: '',
      destination: '',
      passengers: 1,
      pickupTime: '09:00',
      specialRequests: '',
      contactName: '',
      contactPhone: '',
      contactEmail: ''
    });

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const nextStep = () => {
      if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
      if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">Book {bus?.name}</h3>
                <p className="text-blue-100">Step {currentStep} of {totalSteps}</p>
              </div>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className={currentStep >= 1 ? 'text-white' : 'text-blue-200'}>Trip Details</span>
                <span className={currentStep >= 2 ? 'text-white' : 'text-blue-200'}>Contact Info</span>
                <span className={currentStep >= 3 ? 'text-white' : 'text-blue-200'}>Confirmation</span>
              </div>
              <div className="w-full bg-blue-400 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            <AnimatePresence mode="wait">
              {/* Step 1: Trip Details */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <img
                        src={bus?.images[0]}
                        alt={bus?.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-lg">{bus?.name}</h4>
                        <p className="text-gray-600">{bus?.company}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-2xl font-bold text-blue-600">₹{bus?.price}/day</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1 font-medium">{bus?.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
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
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                          <input
                            type="number"
                            min="1"
                            max={bus?.capacity}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            value={bookingData.passengers}
                            onChange={(e) => setBookingData({...bookingData, passengers: parseInt(e.target.value)})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Time</label>
                          <input
                            type="time"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            value={bookingData.pickupTime}
                            onChange={(e) => setBookingData({...bookingData, pickupTime: e.target.value})}
                          />
                        </div>
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
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-semibold">Contact Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your full name"
                          value={bookingData.contactName}
                          onChange={(e) => setBookingData({...bookingData, contactName: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your phone number"
                          value={bookingData.contactPhone}
                          onChange={(e) => setBookingData({...bookingData, contactPhone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your email"
                          value={bookingData.contactEmail}
                          onChange={(e) => setBookingData({...bookingData, contactEmail: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h5 className="font-semibold mb-4">Booking Summary</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Vehicle:</span>
                          <span className="font-medium">{bus?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pickup Date:</span>
                          <span className="font-medium">{bookingData.pickupDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Return Date:</span>
                          <span className="font-medium">{bookingData.returnDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Passengers:</span>
                          <span className="font-medium">{bookingData.passengers}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pickup Time:</span>
                          <span className="font-medium">{bookingData.pickupTime}</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total Amount:</span>
                          <span className="text-blue-600">₹{bus?.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold">Booking Confirmed!</h4>
                  <p className="text-gray-600">
                    Your booking has been successfully submitted. You will receive a confirmation email shortly.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg text-left max-w-md mx-auto">
                    <h5 className="font-semibold mb-3">Booking Details</h5>
                    <div className="space-y-2 text-sm">
                      <div><strong>Booking ID:</strong> TW{Date.now()}</div>
                      <div><strong>Vehicle:</strong> {bus?.name}</div>
                      <div><strong>Date:</strong> {bookingData.pickupDate}</div>
                      <div><strong>Contact:</strong> {bookingData.contactName}</div>
                      <div><strong>Phone:</strong> {bookingData.contactPhone}</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="border-t p-6 bg-gray-50">
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {currentStep < totalSteps ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Done
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  const ImageModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <button
          onClick={() => setShowImageModal(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X className="h-8 w-8" />
        </button>
        
        <button
          onClick={() => setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : bus.images.length - 1)}
          className="absolute left-4 text-white hover:text-gray-300 z-10"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        
        <img
          src={bus?.images[selectedImageIndex]}
          alt={`${bus?.name} - Image ${selectedImageIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
        
        <button
          onClick={() => setSelectedImageIndex(selectedImageIndex < bus.images.length - 1 ? selectedImageIndex + 1 : 0)}
          className="absolute right-4 text-white hover:text-gray-300 z-10"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
          {selectedImageIndex + 1} / {bus?.images.length}
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <Loader fullScreen text="Loading bus details..." size="lg" />;
  }

  if (!bus) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Bus Not Found</h2>
          <p className="text-gray-600 mb-4">The bus you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Search</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Gallery */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative"
              >
                <img
                  src={bus.images[selectedImageIndex]}
                  alt={bus.name}
                  className="w-full h-96 object-cover rounded-2xl cursor-pointer"
                  onClick={() => setShowImageModal(true)}
                />
                <button
                  onClick={() => setShowImageModal(true)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70 transition-all"
                >
                  <Camera className="h-5 w-5" />
                </button>
                
                {/* Image Navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {bus.images.map((_:any, index:any) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === selectedImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-5 gap-2">
                {bus.images.map((image:any, index:any) => (
                  <motion.img
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    src={image}
                    alt={`${bus.name} - ${index + 1}`}
                    className={`w-full h-20 object-cover rounded-lg cursor-pointer transition-all ${
                      index === selectedImageIndex ? 'ring-2 ring-blue-500' : 'hover:opacity-80'
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>

              {/* Tabs */}
              <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
                <div className="border-b">
                  <nav className="flex space-x-8 px-6">
                    {[
                      { id: 'overview', label: 'Overview' },
                      { id: 'features', label: 'Features' },
                      { id: 'specifications', label: 'Specifications' },
                      { id: 'reviews', label: 'Reviews' },
                      { id: 'policies', label: 'Policies' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === tab.id
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-xl font-semibold mb-3">About This Vehicle</h3>
                          <p className="text-gray-600 leading-relaxed">{bus.description}</p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">Driver Information</h3>
                          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                            <img
                              src={bus.driver.image}
                              alt={bus.driver.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold">{bus.driver.name}</h4>
                              <p className="text-gray-600">{bus.driver.experience} experience</p>
                              <div className="flex items-center space-x-4 mt-1">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span className="ml-1 text-sm font-medium">{bus.driver.rating}</span>
                                </div>
                                <span className="text-sm text-gray-500">
                                  Languages: {bus.driver.languages.join(', ')}
                                </span>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                <Phone className="h-4 w-4" />
                              </button>
                              <button className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                                <MessageSquare className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'features' && (
                      <motion.div
                        key="features"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <h3 className="text-xl font-semibold mb-4">Vehicle Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {bus.features.map((feature:any, index:any) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                            >
                              <div className="text-blue-600 mt-1">{feature.icon}</div>
                              <div>
                                <h4 className="font-semibold">{feature.name}</h4>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'specifications' && (
                      <motion.div
                        key="specifications"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(bus.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="text-gray-600">{String(value)}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'reviews' && (
                      <motion.div
                        key="reviews"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">Customer Reviews</h3>
                          <div className="flex items-center space-x-2">
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                            <span className="font-semibold">{bus.rating}</span>
                            <span className="text-gray-600">({bus.reviewCount} reviews)</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {bus.reviews.map((review:any) => (
                            <div key={review.id} className="p-4 bg-gray-50 rounded-lg">
                              <div className="flex items-start space-x-3">
                                <img
                                  src={review.image}
                                  alt={review.user}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold">{review.user}</h4>
                                    <span className="text-sm text-gray-500">{review.date}</span>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <p className="text-gray-600 mb-2">{review.comment}</p>
                                  <button className="text-sm text-blue-600 hover:text-blue-700">
                                    Helpful ({review.helpful})
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'policies' && (
                      <motion.div
                        key="policies"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <h3 className="text-xl font-semibold mb-4">Booking Policies</h3>
                        <div className="space-y-4">
                          {Object.entries(bus.policies).map(([key, value]) => (
                            <div key={key} className="p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-semibold capitalize mb-2">{key.replace(/([A-Z])/g, ' $1')}</h4>
                              <p className="text-gray-600">{String(value)}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-24 bg-white rounded-2xl shadow-lg border p-6 space-y-6"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold">{bus.name}</h2>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={`p-2 rounded-lg transition-colors ${
                          isFavorite ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600">{bus.company}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 font-medium">{bus.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({bus.reviewCount})</span>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      bus.availability === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {bus.availability}
                    </span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="border-t border-b py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl font-bold text-blue-600">₹{bus.price}</span>
                        <span className="text-gray-500">/day</span>
                      </div>
                      {bus.originalPrice > bus.price && (
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-gray-500 line-through">₹{bus.originalPrice}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded-full">
                            {bus.discount}% OFF
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">Up to {bus.capacity} passengers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{bus.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{bus.category}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => setShowBookingModal(true)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Book Now
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>Call</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Mail className="h-4 w-4" />
                      <span>Email</span>
                    </button>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">Safety Guaranteed</span>
                  </div>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Verified driver and vehicle</li>
                    <li>• 24/7 customer support</li>
                    <li>• Comprehensive insurance</li>
                    <li>• GPS tracking enabled</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modals */}
      <AnimatePresence>
        {showImageModal && <ImageModal />}
        {showBookingModal && <BookingModal />}
      </AnimatePresence>
    </div>
  );
};

export default BusDetails;