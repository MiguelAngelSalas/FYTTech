interface ElementoTecnologicoProps {
  label: string;
  value: string;
  border?: boolean;
}

export default function ElementoTecnologico({ label, value, border = true }: ElementoTecnologicoProps) {
  return (
    <div className={`flex items-center justify-between ${border ? 'border-b border-neutral-800 pb-3' : 'pb-3'}`}>
      <span className="text-neutral-400">{label}</span>
      <span className="text-white font-semibold">{value}</span>
    </div>
  );
}