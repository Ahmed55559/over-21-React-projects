import "./App.css";
import ScrollToButtons from "./Components/scroll-to-top/ScrollToButtons";
import { FeatureFlagProvider } from "./Components/featureFlags/context/context";
import TestUseFetchHook from "./Components/use-fetch/test";
import Accordian from "./Components/accordian/accordian";
import RandomColor from "./Components/random-color/randomColor";
import Rating from "./Components/rating-indicator/Rating";
import Slider from "./Components/image-slider/Slider";
import LoadMoreItems from "./Components/load-more-items/LoadMoreItems";
import TreeMenu from "./Components/NestedNavBar/tree-menu";
import menus from "./Components/NestedNavBar/data";
import QrGenerator from "./Components/Qr-generator/QrGenerator";
import ToggleTheme from "./Components/ToggleTheme/ToggleTheme";
import ScrollIndicator from "./Components/scroll-indicator/ScrollIndicator";
import CustomTabs from "./Components/custom-tabs/CustomTabs";
import tabs from "./Components/custom-tabs/tabs";
import CustomModalTest from "./Components/custom-modal/CustomModal-test";
import GithubFinder from "./Components/github-profile-finder/GithubFinder";
import SearchAutoComplete from "./Components/search-auto-complete/SearchAutoComplete";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import FeatureFlagComponent from "./Components/featureFlags/FeatureFlags";
import UseOnClickOutsideTest from "./Components/use-onclick-outside/test";
import UseWindowResizeTest from "./Components/use-window-resize/test";
function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <Rating numOfStars={5} />
      <Slider url="https://picsum.photos/v2/list" page={1} limit={10} />
      <LoadMoreItems />
      <TreeMenu menus={menus} />
      <QrGenerator />
      <ToggleTheme />
      <ScrollIndicator />
      <CustomTabs tabs={tabs} />
      <CustomModalTest />
      <GithubFinder />
      <SearchAutoComplete />
      <TicTacToe />
      <FeatureFlagProvider>
        <FeatureFlagComponent />
      </FeatureFlagProvider>
      <TestUseFetchHook />
      <UseOnClickOutsideTest />
      <UseWindowResizeTest />
      <ScrollToButtons />
    </div>
  );
}

export default App;
