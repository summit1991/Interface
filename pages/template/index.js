import Playground from "../../components/layouts/Playground";

export default function Index() {
  return (
    <div>
      <div>인덱스 페이지</div>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
