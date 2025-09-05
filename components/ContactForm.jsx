'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Spinner from '@/ui/Spinner';



export default function ContactForm() {
  // Only subject and content (message) are needed from user
  const [formData, setFormData] = useState({
    subject: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send only subject and content to backend
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: formData.subject,
          content: formData.content
        }),
      });

      if (response.ok) {
        toast.success('Email sent successfully!');
        setFormData({ subject: '', content: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast.error('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border border-white rounded-lg w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 backdrop-blur-3xl border-amber-50 rounded-lg shadow-md" autoComplete="off">
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            autoComplete="off"
            className="w-full px-3 py-2 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your Subject...."
          />
        </div>

        <div className="mb-6">
          <label htmlFor="content" className="block text-sm font-medium text-white mb-2">
            Message
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={5}
            autoComplete="off"
            className="w-full text-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Spinner />
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}