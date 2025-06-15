import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import AnimatedPage from '../components/AnimatedPage.jsx';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '', server: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    if (name === 'name') {
      setErrors({ ...errors, name: value.length < 2 ? 'Name must be at least 2 characters' : '' });
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({ ...errors, email: !emailRegex.test(value) ? 'Invalid email format' : '' });
    }
    if (name === 'password') {
      setErrors({
        ...errors,
        password: value.length < 6 ? 'Password must be at least 6 characters' : '',
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({ ...errors, server: '' });

    // Final validation before submission
    if (!formData.name || !formData.email || !formData.password) {
      setErrors({
        name: !formData.name ? 'Name is required' : errors.name,
        email: !formData.email ? 'Email is required' : errors.email,
        password: !formData.password ? 'Password is required' : errors.password,
        server: '',
      });
      setIsSubmitting(false);
      return;
    }

    if (errors.name || errors.email || errors.password) {
      setIsSubmitting(false);
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/auth/signup', formData);
      setErrors({ name: '', email: '', password: '', server: 'Signup successful! Redirecting...' });
      setFormData({ name: '', email: '', password: '' });
      // Optional: Redirect to login after 2 seconds
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    } catch (err) {
      setErrors({
        ...errors,
        server: err.response?.data?.error || 'Signup failed. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedPage>
      {/* Font Awesome for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg"
        >
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-3xl font-bold text-gray-900 text-center mb-6"
          >
            Create Your Account
          </motion.h2>
          <p className="text-center text-gray-600 mb-8">
            Join our EdTech platform to master coding for placements!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                <i className="fas fa-user mr-2"></i>Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 w-full p-3 bg-[#e5f4ff] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] transition-all duration-200 ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                <i className="fas fa-envelope mr-2"></i>Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 w-full p-3 bg-[#e5f4ff] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] transition-all duration-200 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </motion.div>

            {/* Password Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                <i className="fas fa-lock mr-2"></i>Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 w-full p-3 bg-[#e5f4ff] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] transition-all duration-200 ${
                  errors.password ? 'border-red-500' : ''
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </motion.div>

            {/* Server Error/Success Message */}
            {errors.server && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-sm text-center ${
                  errors.server.includes('successful') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {errors.server}
              </motion.p>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className={`w-full py-3 px-4 bg-[#2563eb] text-white font-semibold rounded-lg shadow-md hover:bg-[#1e40af] transition-all duration-200 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <i className="fas fa-spinner fa-spin mr-2"></i>Signing Up...
                </span>
              ) : (
                'Sign Up'
              )}
            </motion.button>
          </form>

          {/* Login Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="mt-6 text-center text-gray-600"
          >
            Already have an account?{' '}
            <a href="/login" className="text-[#2563eb] hover:underline">
              Log In
            </a>
          </motion.p>
        </motion.div>
      </section>
    </AnimatedPage>
  );
};

export default Signup;