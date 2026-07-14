import type { ReactNode } from "react";

export const siteConfig = {
  topicWord: "Sikkerhed",
  sourceLine: (
    <>
      Risikodata baseret på{" "}
      <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQw0Pk4uwdimbx8SGAXuAeDvTRP_0Hvtlamm1LYjWtP7oOEcVGFOCKXAeq81qscsamlqfcqdEPKZJke/pubhtml" target="_blank" rel="noopener noreferrer">MIT AI Risk Repository</a>{" "}
      og{" "}
      <a href="https://genai.owasp.org/" target="_blank" rel="noopener noreferrer">OWASP GenAI Security Project</a>. For alle detaljer, besøg de originale repositories.
    </>
  ) as ReactNode,
};
