import { useState } from "react";
import HollowFullPyramid from "./component/HollowFullPyramid";
import HollowInventedHalf from "./component/HollowInventedHalf";
import SimplePyramid from "./component/simplePyramid";
import SimplePyramidNum from "./component/SimplePyramidNum";
import InvertedHalfPeramyd from './component/InvertedHalfPeramyd';
import Blackin12 from './component/Blackin12';
import Blackin11 from './component/Blackin11';
import FullPyramid from "./component/FullPyramid";
import ReverseFullPyramid from "./component/ReverseFullPyramid";
import FullDiamond from "./component/FullDiamond";
import HollowDiamond from "./component/HollowDiamond";
import SolidHalfDiamond from "./component/SolidHalfDiamond";
import InvertedHalfPyramidNum from "./component/InvertedHalfPyramidNum";
import HollowInvertedHalfNum from "./component/HollowInvertedHalfNum";
import HollowFullPyramidNum from "./component/HollowFullPyramidNum";
import FullPyramidNum from "./component/FullPyramidNum";
import Blackin6 from "./component/Blackin6";
import BlackIn5 from "./component/BlackIn5";
import BlackIn7 from "./component/BlackIn7";
import NewLineNumPyramid from "./component/NewLineNumPyramid";
import HollowHalfNumber from "./component/HollowHalfNumber";
import Black8 from "./component/Black8";
import Black10 from "./component/Black10";
import Black13 from "./component/Black13";
import Black9 from "./component/Black9";
import Other1 from "./component/Other1";
import Other2 from "./component/Other2";
import Other3 from "./component/Other3";
import Other4 from "./component/Other4";
import Other5 from "./component/Other5";


const InputPattern = () => {
  const [input, setInput] = useState(0);
  const checkNumber = (e) => {
    setInput(e.target.value)
  };
  return (
    <div>
      <input type="number" onChange={checkNumber} />
      {Black13(input).map((el,index) => (
        <div key={index}>{el}</div>
      ))}
    </div>
  );
};

export default InputPattern;

// 