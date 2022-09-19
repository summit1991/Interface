import Introduce from "../components/layouts/Introduce"
import Button from '@mui/material/Button'

export default function Index() {
  return (
    <div>
      <div>인덱스가 바로 소개페이지로 쓰이는 것이지 말입니다.</div>
      <Button variant="contained">이거 너무한 거 아니냐고</Button>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Introduce>{page}</Introduce>
  )
}
