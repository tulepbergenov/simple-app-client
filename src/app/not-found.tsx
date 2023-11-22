import { appTitle } from "@/shared/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Not Found"),
};

const NotFound = () => {
  return (
    <section>
      <header>
        <h1>Not Found</h1>
      </header>
    </section>
  );
};

export default NotFound;
