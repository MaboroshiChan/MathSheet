import { boolean } from "fp-ts";

type FormulaBoxPropsType = {
  addLine : (floorNum : number, box: JSX.Element) => void,
  deleteLine : (floorNum : number) => void,
  index : number,
  content : string,
  selected: boolean
}

export default FormulaBoxPropsType;