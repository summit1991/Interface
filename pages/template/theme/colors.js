import Playground from "../../../components/layouts/Playground";

export default function colors() {
  return (
    <div>
      <div>Colors 페이지. asdf asjhdf oiasdjhf ioasdh ioahsdfio ahsdiof hasdiof hasiodf haiodfs h응디</div>
    </div>
  )
}

colors.getLayout = function getLayout(page) {
  return (
    <Playground>{page}</Playground>
  )
}
