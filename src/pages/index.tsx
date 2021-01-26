import {HomeContainer, HomeContent} from '../components/Home/styles'
import Logo from '../components/Home/Logo'
import GitHubCorner from '../components/GitHubCorner'
import Footer from '../components/Footer'
import {
  HomeWidget,
  HomeWidgetHeader,
  HomeWidgetContent,
} from '../components/Home/Widget/styles'
import {bg, title, description} from '../data/db.json'

export default function Home(): JSX.Element {
  return (
    <HomeContainer backgroundImage={bg}>
      <HomeContent>
        <Logo className="logo" />
        <HomeWidget>
          <HomeWidgetHeader>
            <h1>{title}</h1>
          </HomeWidgetHeader>
          <HomeWidgetContent>
            <p>{description}</p>
          </HomeWidgetContent>
        </HomeWidget>
        <HomeWidget>
          <HomeWidgetContent>
            <h3>Where does it come from?</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </HomeWidgetContent>
        </HomeWidget>
        <Footer />
      </HomeContent>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </HomeContainer>
  )
}
