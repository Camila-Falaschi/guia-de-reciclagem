
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WasteCategoryProps {
  title: string;
  color: string;
  icon: LucideIcon;
  recyclableItems: string[];
  nonRecyclableItems: string[];
  disposalTip: string;
}

const WasteCategory: React.FC<WasteCategoryProps> = ({
  title,
  color,
  icon: Icon,
  recyclableItems,
  nonRecyclableItems,
  disposalTip
}) => {
  return (
    <div className="waste-card animate-fade-in">
      <div className="waste-card-header" style={{ backgroundColor: `${color}10` }}>
        <div className="waste-icon" style={{ backgroundColor: color }}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      
      <div className="p-5 space-y-4">
        <div>
          <p className="list-heading">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            Itens Recicláveis
          </p>
          <ul className="waste-list pl-5">
            {recyclableItems.map((item, index) => (
              <li key={index} className="list-disc ml-4">{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <p className="list-heading">
            <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
            Itens Não-Recicláveis
          </p>
          <ul className="waste-list pl-5">
            {nonRecyclableItems.map((item, index) => (
              <li key={index} className="list-disc ml-4">{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="tip-box">
          <p className="text-sm font-medium">Dica de Descarte</p>
          <p className="text-sm mt-1">{disposalTip}</p>
        </div>
      </div>
    </div>
  );
};

export default WasteCategory;
