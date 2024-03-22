import { useSignal } from "@preact/signals";
import { PageProps } from "$fresh/server.ts";

export default function Home() {
  return (
    <div class="home">
      <p>Welcome to my agenda!</p>
    </div>
  );
}
