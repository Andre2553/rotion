import { Editor } from "../components/Editor";
import { ToC } from "../components/ToC";
export function Document() {
  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-rotion-300 font-bold text-xs">
          Table of Content
        </span>
        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>Introduction</ToC.Link>
            <ToC.Link>Database</ToC.Link>
          </ToC.Section>
          <ToC.Link>Front-end</ToC.Link>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center ">
         <Editor/>
      </section>
    </main>
  );
}
