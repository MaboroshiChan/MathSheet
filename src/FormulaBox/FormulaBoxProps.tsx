type FormulaBoxPropsType = {
  addLine : (floorNum : number, box: JSX.Element) => void,
  deleteLine : (floorNum : number) => void,
  index : number,
  content : string,
}

export default FormulaBoxPropsType;