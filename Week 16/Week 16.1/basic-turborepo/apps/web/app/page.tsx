import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      Hello from the web app
      <br />
      <Button children="click me" appName="web" />
    </div>
  );
}
