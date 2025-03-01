import Accordian from "../accordian/accordian";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import QrGenerator from "../Qr-generator/QrGenerator";
import CustomModalTest from "../custom-modal/CustomModal-test";
import { useContext } from "react";
import { FeatureFlagContext } from "./context/context";

export default function FeatureFlagComponent() {
  const { loading, enabledFeatures } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "Accordian",
      component: <Accordian />,
    },
    {
      key: "WhiteBlackTheme",
      component: <ToggleTheme />,
    },
    {
      key: "Qrgenerator",
      component: <QrGenerator />,
    },
    {
      key: "CustomModal",
      component: <CustomModalTest />,
    },
  ];
  function checkEnabled(getCurrentKey) {
    return (
      enabledFeatures.hasOwnProperty(getCurrentKey) &&
      enabledFeatures[getCurrentKey]
    );
  }
  if (loading) return <h2>loading</h2>;
  return (
    <div>
      <h1>FeatureFlags</h1>
      {componentsToRender.map((c) => {
        return checkEnabled(c.key) ? c.component : null;
      })}
    </div>
  );
}
