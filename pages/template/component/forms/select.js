import Playground from "../../../../components/layouts/Playground";

export default function select() {
  return (
    <div>
      <div>셀렉트</div>
    </div>
  )
}

select.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
