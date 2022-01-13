/* eslint-disable react/require-default-props */
import { useEffect, useState } from 'react';

interface ButtonProps {
  buttonLabel: string;
  buttonClass?: string;
  activeClass?: string;
  inactiveClass?: string;
  onChange: any;
}

export default function ToggleButton({
  buttonLabel,
  buttonClass = 'text-white font-bold py-2 px-4 rounded-lg',
  activeClass = 'bg-green-700 hover:bg-green-900',
  inactiveClass = 'bg-indigo-600 hover:bg-indigo-800',
  onChange,
}: ButtonProps) {
  const [active, setActive] = useState(false);
  const [internalButtonClass, setInternalButtonClass] = useState(buttonClass);

  useEffect(() => {
    const buttonClassModifier = active ? activeClass : inactiveClass;
    setInternalButtonClass(`${buttonClass} ${buttonClassModifier}`);

    onChange(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <button
      type="button"
      className={internalButtonClass}
      onClick={() => setActive(!active)}
    >
      {buttonLabel}
    </button>
  );
}
