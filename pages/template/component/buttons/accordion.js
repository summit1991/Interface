import Playground from "../../../../components/layouts/Playground";

export default function accordion() {
  return (
    <div>
      <div>아코뎐</div>
    </div>
  )
}

accordion.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
