import Playground from "../../../../components/layouts/Playground";

export default function select() {
  return (
    <div>
      <div>아코뎐</div>
    </div>
  )
}

select.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
