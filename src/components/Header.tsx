
import React from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary/90 to-primary py-10 md:py-16 text-white">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-3 flex-col text-center">
          <Leaf className="w-12 h-12 md:w-16 md:h-16" />
          <h1 className="font-bold">Como Separar Resíduos Corretamente</h1>
          <p className="max-w-2xl mt-2 text-lg md:text-xl opacity-90">
            Tornando a reciclagem eficaz através da separação correta de resíduos
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
