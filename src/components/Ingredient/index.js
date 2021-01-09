import { useState, useCallback } from 'react';
import Qty from 'js-quantities';

export function Ingredient({ globalMeasurementKind }) {
  const [scalar, setScalar] = useState(0);
  const [unit, setUnit] = useState(() => (
    globalMeasurementKind === 'volume' ? 'fluid-ounce' : Qty.getUnits(globalMeasurementKind)[0]
  ));

  const scalarCb = useCallback((e) => {
    console.log('e.target.value: ', e.target.value);
    try {
      console.log('qty parsed: ', Qty.parse(e.target.value));
      setScalar(e.target.value);
    } catch (err) {
      console.log('could not parse qty: ', err);
    }
  }, [])

  const unitCb = useCallback((e) => {
    console.log('e.target.value: ', e.target.value);
    try {
      console.log('qty parsed: ', Qty.parse(e.target.value));
      setUnit(e.target.value);
    } catch (err) {
      console.log('could not parse qty: ', err);
    }
  }, [])

  return (
    <div>
      <input
        className="amount"
        onChange={scalarCb}
        type="number"
        value={scalar}
        min={0}
        step={0.25}
      />
      <select onChange={unitCb} value={unit}>
        {Qty.getUnits(globalMeasurementKind).map((unitOption) => (
          <option
            key={unitOption}
            value={unitOption}
          >
            {Qty.getAliases(unitOption)[0]}
          </option>
        ))}
      </select>
    </div>
  );
}
