import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Modal } from './Modal';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: formData.title,
          name: formData.name,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('¡Mensaje enviado con éxito!');
      onClose();
      setFormData({ title: '', name: '', message: '' });
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intente nuevamente.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="text-2xl font-bold text-white mb-6">Contáctanos</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Asunto"
          required
          className="w-full px-4 py-2 rounded-lg bg-[#2A2A2A] text-white placeholder-gray-400"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <input
          type="text"
          placeholder="Nombre"
          required
          className="w-full px-4 py-2 rounded-lg bg-[#2A2A2A] text-white placeholder-gray-400"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <textarea
          placeholder="Mensaje"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-[#2A2A2A] text-white placeholder-gray-400"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#cbe850] text-black px-8 py-3 rounded-lg hover:bg-[#b5d046] transition-colors font-semibold disabled:opacity-50"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    </Modal>
  );
}