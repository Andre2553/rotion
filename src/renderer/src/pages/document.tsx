import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Editor } from "../components/Editor";
import { ToC } from "../components/ToC";
import { useMemo } from "react";

interface EditorProps {
  content: string;
}

export function Document() {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching } = useQuery(["document", id], async () => {
    const response = await window.api.fetchDocument({ id: id! });
    return response.data;
  });

  const initialContent = useMemo(() => {
    if (data) {
      return `<h1>${data.title}</h1>${data.content ?? '<p></p>'}`;
    }
    return "";
  }, [data]);

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
       { !isFetching && data && <Editor content={initialContent}/>} 
      </section>
    </main>
  );
}
