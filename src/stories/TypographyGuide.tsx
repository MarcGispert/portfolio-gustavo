import React from 'react';

// Definimos los tokens que queremos auditar
const typographyLevels = [
  { label: 'H1 - Heading 1', token: 'text-h1', sample: 'Hello! I\'m Gustavo' },
  { label: 'H2 - Heading 2', token: 'text-h2', sample: 'How I help motorcycle brands' },
  { label: 'H3 - Heading 3', token: 'text-h3', sample: 'FROM IDEA TO CONCEPT' },
  { label: 'H4 - Heading 4', token: 'text-h4', sample: 'Sport Naked 450' },
  { label: 'Body Large', token: 'text-body-lg', sample: 'Degree in product design engineering...' },
  { label: 'Body Medium', token: 'text-body-md', sample: 'Links de navegación' },
  { label: 'Body Small', token: 'text-body-sm', sample: '© 2026 Gustavo Higón' },
];

export const TypographyGuide = () => {
  return (
    <div className="p-12 bg-black min-h-screen">
      <h1 className="text-white text-3xl mb-12 font-bold border-b border-gray-700 pb-4">
        Typography Calibration System
      </h1>
      
      <div className="space-y-12">
        {typographyLevels.map((level) => (
          <div key={level.token} className="grid grid-cols-12 gap-8 items-baseline group">
            {/* Columna de Información Técnica */}
            <div className="col-span-3 text-right">
              <code className="text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded text-sm block mb-1">
                .{level.token}
              </code>
              <span className="text-gray-500 text-xs uppercase tracking-wider">
                {level.label}
              </span>
            </div>

            {/* Columna de Visualización (La Verdad) */}
            <div className="col-span-9">
              <div className={`${level.token} text-white group-hover:text-cyan-200 transition-colors`}>
                {level.sample}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};