import React from 'react';
import STATIC_STRINGS from '../statics/strings.statics';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {STATIC_STRINGS.Copyright}
          </p>
        </div>
    </footer>
  )
}
