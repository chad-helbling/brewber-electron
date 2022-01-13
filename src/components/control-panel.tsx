import ToggleButton from './ui-components/toggle-button';

interface ControlPanelProps {
  mashTemp: string;
  updateMashTemp: any;
  // pumpToggle: boolean;
  togglePump: any;
  // rimsToggle: boolean;
  toggleRims: any;
}

export default function ControlPanel({
  mashTemp,
  updateMashTemp,
  // pumpToggle,
  togglePump,
  // rimsToggle,
  toggleRims,
}: ControlPanelProps) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <div>
      <h1 className="text-grey text-3xl m-5 font-mono">Control Panel</h1>
      <form>
        <div className="grid grid-rows-3 gap-4">
          <label htmlFor="mashtemp">
            <span className="pr-4">Mash Temp</span>
            <input
              type="text"
              name="mashtemp"
              value={mashTemp}
              onChange={updateMashTemp}
              id="mashtemp"
            />
          </label>
          <ToggleButton onChange={togglePump} buttonLabel="Track Temperature" />
          <ToggleButton onChange={togglePump} buttonLabel="Pump" />
          <ToggleButton onChange={toggleRims} buttonLabel="RIMS" />
        </div>
      </form>
    </div>
  );
}
