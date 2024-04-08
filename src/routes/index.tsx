import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useAuthSession } from "~/routes/plugin@auth";

// import Header from "~/components/starter/header"

export default component$(() => {
  const session = useAuthSession();

  return (
    <>
      <div>Email: {session.value?.user?.email}</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Voting App",
  meta: [],
};
