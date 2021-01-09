import { useState } from 'react';
import Qty from 'js-quantities';

import { Ingredient } from './components/Ingredient';

import './App.css';

if (typeof window === 'object') {
  window.Qty = Qty;
}

const DEFAULT_MEASUREMENT_KIND = 'volume';

function App() {
  const [recipeMeasurementKind, setRecipeMeasurementKind] = useState(DEFAULT_MEASUREMENT_KIND);

  return (
    <div className="app">
      <div className="measurement-kind">
        <h2>Measure by:</h2>
        <select
          onChange={(e) => {
            console.log('select on change: ', e.target.value);
            setRecipeMeasurementKind(e.target.value);
          }}
          value={recipeMeasurementKind}
        >
          {Qty.getKinds().map((kind) => (
            <option
              value={kind}
              key={kind}
            >
              {kind}
            </option>
          ))}
        </select>
      </div>
      <Ingredient globalMeasurementKind={recipeMeasurementKind} />
    </div>
  );
}

export default App;
