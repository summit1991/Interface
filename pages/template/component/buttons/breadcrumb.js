import Playground from "../../../../components/layouts/Playground";

export default function breadcrumb() {
  return (
    <div>
      <div>브레드크럼</div>
    </div>
  )
}

breadcrumb.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
