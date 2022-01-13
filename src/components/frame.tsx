import { TemperatureGraph } from 'components/temperature-graph';
import BreweryIcon from 'components/ui-components/brewery-icon';
import ControlPanel from 'components/control-panel';
import { useState } from 'react';

export default function Frame() {
  const [mashTemp, setMashTemp] = useState('150');
  const [pumpToggle, setPumpToggle] = useState(false);
  const [rimsToggle, setRimsToggle] = useState(false);

  return (
    <div className="bg-gray-600 bg-clip-border border-4 h-screen w-screen">
      <header className="flex flex-row flex-nowrap bg-gray-700 m-6 p-6 rounded shadow-lg">
        <BreweryIcon />
        <h1 className="text-white text-3xl ml-5 mt-5 font-mono">Brewber</h1>
      </header>

      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 gap-1">
        <div className="flex col-span-2 row-span-2 bg-gray-200 m-6 p-2 rounded shadow-lg">
          <TemperatureGraph mashTemp={mashTemp} />
        </div>
        <div className="flex justify-evenly bg-gray-200 m-6 p-2 rounded shadow-lg">
          <ControlPanel
            mashTemp={mashTemp}
            updateMashTemp={(event: any) => setMashTemp(event.target.value)}
            // pumpToggle={pumpToggle}
            togglePump={(active: boolean) => setPumpToggle(active)}
            // rimsToggle={rimsToggle}
            toggleRims={(active: boolean) => setRimsToggle(active)}
          />
        </div>
      </div>
    </div>
  );
}
