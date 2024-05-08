import AHeader from "./components/AHeader";
import ABanner from "./components/ABanner";
import AComputation from "./components/AComputation";
import ADesign from "./components/ADesign";
import ATab from "./components/ATab";
import AFooter from "./components/AFooter";
import AEditCode from "./components/AEditCode";


export default function Home() {
  return (
    <>
      <AHeader />
      <ABanner />
      <AComputation />
      <ADesign />
      <AEditCode />
      <ATab />
      <AFooter />
    </>
  );
}
