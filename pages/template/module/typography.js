import Playground from "../../../components/layouts/Playground";

export default function typography() {
  return (
    <div>
      <div>Typography 페이지</div>
    </div>
  )
}

typography.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
