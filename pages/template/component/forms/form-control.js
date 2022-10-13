import Playground from "../../../../components/layouts/Playground";
import { NumberFormatBase, NumericFormat } from "react-number-format";
import { Box, Button, TextField } from "@mui/material";
import BaseForm from "../../../../components/contents/BaseForm";

export default function formControl() {
  return (
    <BaseForm/>
  )
}

formControl.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
