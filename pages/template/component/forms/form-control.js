import Playground from "../../../../components/layouts/Playground";

export default function formControl() {
  return (
    <div>
      <div>아코뎐</div>
    </div>
  )
}

formControl.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
