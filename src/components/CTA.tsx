import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Modal } from './Modal';

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      toast.success('¡Mensaje enviado con éxito!');
      setIsModalOpen(false);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          El Software NO Debería Ser Un Dolor de Cabeza
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Hablemos sobre cómo podemos ayudarte a implementar soluciones tecnológicas efectivas en tu entorno
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition flex items-center mx-auto"
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Envíanos un Correo
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h3 className="text-2xl font-bold text-white mb-6">Contáctanos</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <textarea
              placeholder="Mensaje"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition flex items-center justify-center disabled:opacity-50"
            >
              <Send className="mr-2 h-5 w-5" />
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </Modal>
      </div>
    </section>
  );
}