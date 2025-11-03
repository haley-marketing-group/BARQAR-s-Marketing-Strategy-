import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';

const ContactForm = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Submit to Cloudflare Worker
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      
      setIsSuccess(true);
      reset();
      
      // Close modal after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose?.();
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="mb-4 text-barqar-green text-6xl">✓</div>
        <h3 className="text-2xl font-headline text-barqar-blue mb-2">
          Thank You!
        </h3>
        <p className="text-barqar-grey">
          The team at BARQAR will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        name="honeypot"
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
        {...register('honeypot')}
      />

      <Input
        label="Full Name"
        name="fullName"
        placeholder="John Doe"
        required
        error={errors.fullName?.message}
        {...register('fullName', {
          required: 'Full name is required',
          minLength: {
            value: 2,
            message: 'Name must be at least 2 characters'
          }
        })}
      />

      <Input
        label="Email Address"
        type="email"
        name="email"
        placeholder="john@company.com"
        required
        error={errors.email?.message}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
      />

      <Input
        label="Company Name"
        name="company"
        placeholder="Your Company"
        required
        error={errors.company?.message}
        {...register('company', {
          required: 'Company name is required'
        })}
      />

      <Input
        label="Phone Number"
        type="tel"
        name="phone"
        placeholder="(555) 123-4567"
        error={errors.phone?.message}
        {...register('phone', {
          pattern: {
            value: /^[\d\s\-\(\)]+$/,
            message: 'Invalid phone number'
          }
        })}
      />

      <div className="flex items-start">
        <input
          type="checkbox"
          id="consent"
          className="mt-1 h-4 w-4 text-barqar-green border-gray-300 rounded focus:ring-barqar-green"
          {...register('consent', {
            required: 'You must agree to receive communications'
          })}
        />
        <label htmlFor="consent" className="ml-2 text-sm text-barqar-grey">
          I agree to receive communications from BARQAR <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-red-500 -mt-4">{errors.consent.message}</p>
      )}

      <div className="pt-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Get My Blueprint'}
        </Button>
      </div>

      <p className="text-xs text-center text-barqar-grey mt-4">
        We respect your privacy. Your information will never be shared with third parties.
      </p>
    </form>
  );
};

export default ContactForm;

