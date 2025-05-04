import React, { useEffect } from 'react';

const ModalItem = ({ isOpen, onClose, title, content, icon, theme = { primaryColor: "#2E8B57", secondaryColor: "#3CB371" } }) => {
    // Prevenir scroll do body quando o modal estiver aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Fechar ao pressionar ESC
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-sm transition-all duration-300"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden animate-fadeIn transform transition-all duration-300">
                {/* Decorative elements */}
                <div 
                    className="absolute top-0 left-0 w-24 h-24 -translate-x-12 -translate-y-12 rounded-full opacity-20" 
                    style={{ background: theme.primaryColor }}
                />
                <div 
                    className="absolute bottom-0 right-0 w-32 h-32 translate-x-16 translate-y-16 rounded-full opacity-20" 
                    style={{ background: theme.secondaryColor }}
                />
                
                {/* Header */}
                <div 
                    className="p-6 pb-4 relative"
                    style={{ background: `linear-gradient(to right, ${theme.primaryColor}, ${theme.secondaryColor})` }}
                >
                    <div className="flex items-center">
                        {icon && (
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4 text-white shadow-inner">
                                {icon}
                            </div>
                        )}
                        <h2 className="text-2xl font-bold text-white drop-shadow-sm">{title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
                        aria-label="Fechar"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 max-h-[60vh] overflow-y-auto relative">
                    <div className="relative z-10">
                        {content}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-5 border-t border-gray-100 flex justify-end relative z-10 bg-white/80 backdrop-blur-sm">
                    <button
                        onClick={onClose}
                        className="px-6 py-3 rounded-full text-white font-medium transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                        style={{ background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})` }}
                    >
                        Fechar
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalItem;