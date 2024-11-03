"use client"

import styles from './modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
}

export default function Modal({ isOpen, onClose, title, description, content, imageUrl }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose} // Close modal when clicking outside
        >
            <div
                className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-4xl mx-auto h-5/6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <img src={imageUrl} alt={title} className="w-full h-60 object-cover rounded mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                    {content}
                </p>
            </div>
        </div>
    );
}
