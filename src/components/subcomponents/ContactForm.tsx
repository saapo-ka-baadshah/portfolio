import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import STATIC_STRINGS from '../../statics/strings.statics';


export default function ContactForm() {
    // Test FORM: mqabqnro
  const [state, handleSubmit] = useForm(
    process.env.REACT_APP_FORMSPREE_FORM_ID ?? "YOUR_BACKUP_FORMSPREE_FORM_ID"
  );
  
    if (state.succeeded) {
      return <p>
            <div className="text-xl font-bold mb-6 text-white">
                {STATIC_STRINGS.ContactFormResponseGreet}
            </div>
            <p className="text-l text-gray-200 max-w-2xl mx-auto">
                {STATIC_STRINGS.ContactFormResponseMessage}
            </p>
        </p>;
    }

    // If the formspree id is not provided, show the feature to be coming soon
    if (process.env.REACT_APP_FORMSPREE_FORM_ID == null) {
        return (
            <div className="space-y-6">
                <p>
                    <div className="text-xl font-bold mb-6 text-white">
                        {STATIC_STRINGS.ContactFormNotAvailableGreet}
                    </div>
                    <p className="text-l text-gray-200 max-w-2xl mx-auto">
                        {STATIC_STRINGS.ContactFormNotAvailableResponseMessage}
                    </p>
                </p> 
            </div>
        );
    }

    return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <input
            className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            id="name"
            name="name"
            placeholder="Your Name"
            required
        />
      </div>
      <div>
        <input
            className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            id="email"
            name="email"
            placeholder="Your Email"
            required
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
      </div>
      <div>
        <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
            id="message"
            name="message"
            rows={4}
            required
        />
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div>
        <button
            className="w-full bg-white text-gray-900 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
