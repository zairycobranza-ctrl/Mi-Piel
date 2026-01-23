"use client"; // Necesario para manejo de errores

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Opcional: Aquí podrías enviar el error a un servicio de logs
    console.error(error);
  }, [error]);

  return (
    // Fondo negro y centrado
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-black text-white px-6">
      
      {/* Icono de Alerta Estilizado */}
      <div className="mb-8 p-6 rounded-full bg-zinc-900/50 border border-white/10 shadow-[0_0_30px_rgba(239,93,168,0.15)]">
        <AlertTriangle size={48} strokeWidth={1.5} className="text-[#EF5DA8]" />
      </div>

      {/* Título Elegante */}
      <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-tight">
        Algo salió mal
      </h2>
      
      {/* Mensaje amigable */}
      <p className="text-zinc-400 mb-8 max-w-md text-center font-light leading-relaxed">
        Ocurrió un error inesperado al cargar esta sección. <br />
        No te preocupes, tu piel sigue a salvo.
      </p>
      
      {/* Mensaje técnico pequeño (útil para ti como desarrollador) */}
      <div className="mb-8 px-4 py-2 bg-zinc-900 rounded border border-white/5 font-mono text-[10px] text-zinc-500 max-w-lg truncate">
        Error: {error.message || "Desconocido"}
      </div>

      {/* Botón de Reintentar estilo Luxury */}
      <button
        onClick={() => reset()}
        className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#EF5DA8] hover:text-white transition-all duration-300"
      >
        <RotateCcw size={16} className="group-hover:rotate-180 transition-transform duration-500" />
        Intentar de nuevo
      </button>
    </div>
  );
}

