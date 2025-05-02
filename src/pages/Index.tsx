
import React from 'react';
import Header from '../components/Header';
import WasteCategory from '../components/WasteCategory';
import ScrollToTop from '../components/ScrollToTop';
import {
  Archive,
  Book,
  Wine,
  CircleSlash,
  Beaker,
  Leaf,
  Recycle,
  Medal
} from 'lucide-react';

const Index = () => {
  const wasteCategories = [
    {
      title: 'Papel',
      color: '#3498db', // Blue
      icon: Book,
      recyclableItems: [
        'Jornais e revistas',
        'Folhas de caderno e papel de impressora',
        'Caixas de papelão (achatadas)',
        'Sacolas de papel',
        'Envelopes (sem janelas plásticas)'
      ],
      nonRecyclableItems: [
        'Papel engordurado ou manchado de comida',
        'Papel higiênico e lenços',
        'Papel encerado',
        'Papel com etiquetas adesivas',
        'Notas fiscais (papel térmico)'
      ],
      disposalTip: 'Certifique-se de que os itens de papel estejam limpos e secos. Remova quaisquer capas plásticas, janelas ou encadernações de metal antes de reciclar.'
    },
    {
      title: 'Plástico',
      color: '#e74c3c', // Red
      icon: Beaker,
      recyclableItems: [
        'Garrafas PET (água, refrigerante)',
        'Recipientes HDPE (galões de leite, frascos de detergente)',
        'Recipientes PP (potes de iogurte)',
        'Tampas plásticas (se coletadas na sua região)',
        'Sacolinhas plásticas limpas (se aceitas)'
      ],
      nonRecyclableItems: [
        'Isopor e poliestireno',
        'Plásticos metalizados (embalagens de salgadinhos e doces)',
        'Talheres plásticos',
        'Canudos',
        'Recipientes plásticos sujos'
      ],
      disposalTip: 'Lave os recipientes antes de reciclar e verifique os números de reciclagem (geralmente de 1 a 7) para garantir que possam ser reciclados em sua região.'
    },
    {
      title: 'Vidro',
      color: '#2ecc71', // Green
      icon: Wine,
      recyclableItems: [
        'Garrafas de vidro (todas as cores)',
        'Potes de vidro',
        'Recipientes de alimentos',
        'Garrafas de bebidas',
        'Potes de condimentos'
      ],
      nonRecyclableItems: [
        'Espelhos',
        'Vidros de janelas',
        'Vidro temperado',
        'Cerâmicas e porcelanas',
        'Lâmpadas (maioria dos tipos)'
      ],
      disposalTip: 'Sempre esvazie e enxágue os recipientes de vidro. Remova tampas e rótulos antes de reciclar (estes geralmente vão para fluxos de reciclagem separados).'
    },
    {
      title: 'Metal',
      color: '#95a5a6', // Gray
      icon: Medal,
      recyclableItems: [
        'Latas de alumínio',
        'Latas de aço/estanho',
        'Tampas metálicas de garrafas',
        'Papel alumínio (limpo)',
        'Embalagens metálicas de alimentos'
      ],
      nonRecyclableItems: [
        'Latas de tinta com resíduos',
        'Latas de aerossol (a menos que vazias)',
        'Cabides de arame',
        'Pequenos pedaços de metal',
        'Grampos'
      ],
      disposalTip: 'Certifique-se de que os itens de metal estejam vazios e limpos. Itens metálicos maiores devem ser levados a centros de reciclagem especializados ou ferros-velhos.'
    },
    {
      title: 'Orgânico',
      color: '#f39c12', // Orange
      icon: Leaf,
      recyclableItems: [
        'Restos de frutas e legumes',
        'Borra de café e filtros',
        'Resíduos de jardim (folhas, aparas de grama)',
        'Cascas de ovos',
        'Cascas de nozes'
      ],
      nonRecyclableItems: [
        'Restos de carne ou peixe',
        'Produtos lácteos',
        'Óleos e gorduras',
        'Dejetos de animais',
        'Plantas doentes'
      ],
      disposalTip: 'Composte resíduos orgânicos quando possível. Muitas comunidades oferecem coleta de resíduos orgânicos, ou você pode criar um compostor em casa.'
    },
    {
      title: 'Resíduos Gerais',
      color: '#34495e', // Dark blue
      icon: Archive,
      recyclableItems: [
        'Itens que podem ser reutilizados ou reaproveitados',
        'Eletrônicos (leve para centros de lixo eletrônico)',
        'Baterias (coleta especial)',
        'Lâmpadas (coleta especial)',
        'Roupas (doe se estiverem em bom estado)'
      ],
      nonRecyclableItems: [
        'Fraldas e produtos higiênicos',
        'Itens de materiais mistos',
        'Itens domésticos quebrados',
        'Embalagens contaminadas',
        'Plásticos não recicláveis'
      ],
      disposalTip: 'Tente reduzir resíduos gerais escolhendo alternativas reutilizáveis ou recicláveis. Considere se os itens podem ser doados antes de descartá-los.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-10 md:py-16">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="mb-4">Guia de Separação de Resíduos</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              A separação correta dos resíduos é crucial para uma reciclagem eficaz. Aprenda a classificar seus resíduos corretamente para reduzir o lixo em aterros e aumentar as taxas de reciclagem.
            </p>
            <div className="flex justify-center mt-6">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Recycle className="w-5 h-5 mr-2" />
                <span>Reduzir • Reutilizar • Reciclar</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wasteCategories.map((category, index) => (
              <WasteCategory
                key={index}
                title={category.title}
                color={category.color}
                icon={category.icon}
                recyclableItems={category.recyclableItems}
                nonRecyclableItems={category.nonRecyclableItems}
                disposalTip={category.disposalTip}
              />
            ))}
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container-custom text-center">
          <h3 className="text-2xl mb-4 flex items-center justify-center gap-2">
            <CircleSlash className="w-6 h-6" /> 
            <span>Reduza o Lixo Hoje</span>
          </h3>
          <p className="max-w-2xl mx-auto mb-6">
            Lembre-se de que a melhor maneira de gerenciar resíduos é criar menos. Escolha produtos reutilizáveis, evite embalagens desnecessárias e faça escolhas sustentáveis sempre que possível.
          </p>
          <div className="text-sm opacity-80">
            © {new Date().getFullYear()} Guia de Separação de Resíduos
          </div>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
