import { londrinaOutline } from "@/lib/fonts";

export default function DnaSequenceMarquee() {
    const seq =
      "CGGTCGGTTCCGGGGCCCTATTCATATGAAACTTTTAAAAGTAGCGGTCGGTTCCGGGGCCCTATTCATATGAAACTTTTAAAAGTAGCGGTCGGTTCCGGGGCCCTATTCATATGAAACTTTTAA";
  
    return (
      <div className={`overflow-hidden bg-herobackground py-0.5 ${londrinaOutline.className}`}>
        <div
          className="
            flex
            w-max
            animate-dna-scroll
            whitespace-nowrap
            text-2xl
            xl:text-4xl
            text-white
            tracking-widest
          "
        >
          <span>{seq}</span>
          <span>{seq}</span>
        </div>
      </div>
    );
  }