import Playground from "../../../components/layouts/Playground";
import { NumericFormat } from "react-number-format";

export default function wonToHangle() {
  return (
    <div>
      <div>Colors 페이지. asdf asjhdf oiasdjhf ioasdh ioahsdfio ahsdiof hasdiof hasiodf haiodfs h응디</div>
    </div>
  )
}

wonToHangle.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
