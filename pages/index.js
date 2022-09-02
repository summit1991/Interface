import Introduce from "../components/layouts/Introduce";

export default function Index() {
  return (
    <div>인덱스가 바로 소개페이지로 쓰이는 것이지 말입니다.</div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Introduce>{page}</Introduce>
  )
}
