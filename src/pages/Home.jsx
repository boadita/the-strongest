import React from 'react';

const Home = () => {
  return (
    <div className="space-y-6">
      <div className="font-bold text-5xl text-center p-3">
        KALATAKAYA HUARIKASAYA
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-yellow-100 p-4 rounded-xl shadow lg:w-1/2">
          <h3 className="font-bold text-xl mb-1 text-center">ÚLTIMO PARTIDO</h3>
          <div className="flex items-center gap-2 p-1">
            <h4 className="font-bold text-2x1">FECHA: </h4>
            <span className="text-2x1">10-2-2026</span>
          </div>
          <div className="flex items-center gap-2 p-1">
            <h4 className="font-bold text-2x1">CIUDAD: </h4>
            <span className="text-2x1">LA PAZ</span>
          </div>
          <div className="flex items-center gap-2 p-1">
            <h4 className="font-bold text-2x1">ESTADIO: </h4>
            <span className="text-2x1">PUEBLO NUEVO</span>
          </div>
          <div className="flex items-center gap-2 p-1">
            <h4 className="font-bold text-2x1">TORNEO: </h4>
            <span className="text-2x1">LIBERTADORES</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 gap-2 border border-black rounded-lg">
            <div className="font-bold text-lg">TÁCHIRA</div>
            <div className="text-2x1 text-black">0 (5) - 0 (3)</div>
            <div className="font-bold text-lg">THE STRONGEST</div>
          </div>
        </div>
        <div className="bg-black text-white p-4 rounded-xl shadow lg:w-1/2">
          <h3 className="font-bold text-xl mb-1 text-center">PRÓXIMO PARTIDO</h3>
          <div className="flex items-center gap-2 p-1">
            <h4 className="font-bold text-2x1">FECHA: </h4>
            <span className="text-2x1">1-3-2026</span>
          </div>
          <div className="flex items-center gap-2 p-1">
            <h4 className="font-bold text-2x1">CIUDAD: </h4>
            <span className="text-2x1">POTOSÍ</span>
          </div>
          <div className="flex items-center gap-2 p-1">
            <h4 className="font-bold text-2x1">ESTADIO: </h4>
            <span className="text-2x1">VÍCTOR AGUSTÍN UGARTE</span>
          </div>
          <div className="flex items-center gap-2 p-1">
            <h4 className="font-bold text-2x1">TORNEO: </h4>
            <span className="text-2x1">VERANO</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 gap-2 border border-white rounded-lg">
            <div className="font-bold text-lg">NACIONAL POTOSÍ</div>
            <div className="text-2x1 text-white">vs</div>
            <div className="font-bold text-lg">THE STRONGEST</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
