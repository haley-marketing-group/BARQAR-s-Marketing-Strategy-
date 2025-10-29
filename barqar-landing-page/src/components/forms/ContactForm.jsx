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
      // TODO: Integrate with Cloudflare Worker for form submission
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form data:', data);
      setIsSuccess(true);
      reset();
      
      // Close modal after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose?.();
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
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
          We've received your request and will be in touch soon.
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

      <Textarea
        label="Current Marketing Challenges"
        name="challenges"
        placeholder="Tell us about your marketing goals and challenges..."
        rows={4}
        error={errors.challenges?.message}
        {...register('challenges')}
      />

      <div className="space-y-2">
        <label htmlFor="referral" className="block text-sm font-body text-barqar-grey">
          How did you hear about us?
        </label>
        <select
          id="referral"
          name="referral"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-cabin font-body focus:outline-none focus:ring-2 focus:ring-barqar-green focus:border-barqar-green"
          {...register('referral')}
        >
          <option value="">Select an option</option>
          <option value="search">Search Engine</option>
          <option value="social">Social Media</option>
          <option value="referral">Referral</option>
          <option value="email">Email</option>
          <option value="other">Other</option>
        </select>
      </div>

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

