import React, { ReactNode } from 'react';


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: '#fff',
                    borderRadius: 8,
                    padding: 24,
                    minWidth: 300,
                    maxWidth: '90vw',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    position: 'relative',
                }}
                onClick={e => e.stopPropagation()}
            >
                {title && (
                    <div style={{ marginBottom: 16, fontWeight: 'bold', fontSize: 18 }}>
                        {title}
                    </div>
                )}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        background: 'transparent',
                        border: 'none',
                        fontSize: 20,
                        cursor: 'pointer',
                    }}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;