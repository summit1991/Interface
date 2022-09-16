import Playground from "../../../components/layouts/Playground";

export default function colors() {
  return (
    <div>
      <div>Colors 페이지</div>
    </div>
  )
}

colors.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
