import {useRouter} from 'next/router'

import {HomeWidget, HomeWidgetHeader} from '../../components/Home/Widget/styles'
export default function Quiz() {
  const {query} = useRouter()
  return (
    <HomeWidget>
      <HomeWidgetHeader>Bem vindo {query.name}</HomeWidgetHeader>
    </HomeWidget>
  )
}
