import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    Rocket,
    Clock,
    Palette,
    Check,
    ArrowRight,
    Instagram,
    Linkedin,
} from "lucide-react";

export function LandingPageService() {
    useEffect(() => {
        const loadMercadoPago = () => {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://secure.mlstatic.com/mptools/render.js";
            document.body.appendChild(script);
            window.$MPC_loaded = true;
        };

        if (!window.$MPC_loaded) {
            loadMercadoPago();
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
            <nav className="container mx-auto px-6 py-6">
                <Link
                    to="/"
                    className="inline-flex items-center text-white hover:text-gray-300 transition"
                >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Volver al inicio
                </Link>
            </nav>

            <main className="container mx-auto px-6">
                <section className="py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Landing Pages Profesionales en 72 Horas
                        </h1>
                        <p className="text-xl text-gray-300 mb-12">
                            Transformamos tu visión en una landing page moderna
                            y efectiva que convierte visitantes en clientes
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                            alt="Landing Page Design"
                            className="rounded-2xl shadow-2xl mb-12"
                        />
                    </div>
                </section>

                <section className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm">
                            <Rocket className="h-12 w-12 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">
                                Diseño Profesional
                            </h3>
                            <p className="text-gray-300">
                                Diseños únicos y personalizados que reflejan la
                                identidad de tu marca y cautivan a tus
                                visitantes
                            </p>
                        </div>
                        <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm">
                            <Clock className="h-12 w-12 text-green-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">
                                Entrega Rápida
                            </h3>
                            <p className="text-gray-300">
                                Tu landing page lista en 72 horas, permitiéndote
                                comenzar a captar clientes de inmediato
                            </p>
                        </div>
                        <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm">
                            <Palette className="h-12 w-12 text-purple-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">
                                Todo Incluido
                            </h3>
                            <p className="text-gray-300">
                                Hosting, dominio, SSL y mantenimiento mensual
                                incluidos en una suscripción simple
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Landing Page Básica
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <div className="text-4xl font-bold text-white mb-4">
                                    $39.900{" "}
                                    <span className="text-xl text-gray-400">
                                        /mes
                                    </span>
                                </div>
                                <p className="text-gray-300 mb-8">
                                    Inversión única inicial: $1.100.000
                                </p>
                                <a
                                    href="https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380849672de3a01967ac0e6ac034d"
                                    className="inline-flex items-center justify-center w-full bg-[#3483FA] hover:bg-[#2a68c8] text-white py-3 px-6 rounded-lg transition duration-300 font-medium"
                                    data-mp-button
                                >
                                    Comenzar Ahora
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Diseño Personalizado",
                                    "Optimización para Móviles",
                                    "Hosting Premium",
                                    "Dominio Personalizado",
                                    "Certificado SSL",
                                    "Soporte Mensual",
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center text-gray-300"
                                    >
                                        <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-gray-800 mt-20">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <img
                                src="https://i.postimg.cc/HLHgyCSj/parzik-White-Background.png"
                                alt="Parzik Logo"
                                className="h-6 w-auto"
                            />
                            <span className="text-xl font-bold text-white">
                                Parzik
                            </span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a
                                href="https://www.instagram.com/parzik_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition"
                            >
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/parzik"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © 2025 Parzik. Todos los derechos reservados.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
