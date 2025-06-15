import { Cross, Minimize2 } from 'lucide-react';
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }: any) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex
                        items-center justify-center
                        bg-black bg-opacity-50">
            <div className="bg-white rounded-lg
                            shadow-lg p-6 max-w-screen-lg
                            max-h-full
                            h-3/4
                            w-full relative
                            flex flex-row flex-wrap overflow-y-auto gap-4">
                <button
                    className="absolute top-5 right-5
                               text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <Minimize2 size={16}/> {/* Close button */}
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;