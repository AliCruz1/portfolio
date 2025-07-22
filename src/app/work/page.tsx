import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0, textAlign: "center" }}>Interactive Generative Art with p5.js</h2>
        <p style={{ maxWidth: 500, textAlign: "center", color: "#666", margin: 0 }}>
          This project is an exploration of generative art using the p5.js JavaScript library. The canvas below is fully interactive, try clicking or moving your mouse to see how the visuals respond! Built as part of my creative coding journey.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 500, height: 500, boxShadow: "0 2px 16px rgba(0,0,0,0.08)", borderRadius: 12, background: "#fff" }}>
          <iframe
            src="https://editor.p5js.org/a.c.shasho/full/NB3uVSL8T"
            width={500}
            height={500}
            style={{ border: "none", borderRadius: 12, background: "#fff" }}
            allowFullScreen
            title="p5.js Project by Ali Cruz III"
          />
        </div>
      </div>
    </Column>
  );
}
