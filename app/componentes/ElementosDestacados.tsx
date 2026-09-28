interface ElementosDestacadosProps {
  text: React.ReactNode;
}

export default function ElementosDestacados({ text }: ElementosDestacadosProps) {
  return (
    <li className="flex gap-4">
      <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
      <p className="text-neutral-300">{text}</p>
    </li>
  );
}