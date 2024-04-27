import { Clock } from "./Clock";
import { IForm } from "../Form/Form";

export interface IClockItems {
    items: IForm[],
    remove: (formdata: IForm) => void
}
export const ClockItems = ({items, remove}: IClockItems) => {

  return (
    <div className="clock-items">
        {items.map((item, index) => {
            return (
                <Clock key={index} item={item} remove={remove} />
            )
        })}
    </div>
  )
}
