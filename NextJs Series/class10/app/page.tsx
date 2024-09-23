import { ContextProvider } from "@/context/MyContext";
import ParentComp from "./Components/ParentComp/ParentComp";

export default function Home() {
  return (
    <div>
      <ContextProvider>
        <ParentComp />
      </ContextProvider>
    </div>
  );
}
