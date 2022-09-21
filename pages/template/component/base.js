import Playground from "../../../components/layouts/Playground";

export default function base() {
  return (
    <div>
      <div>베이스</div>
    </div>
  )
}

base.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
