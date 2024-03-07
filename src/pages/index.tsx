import AcordionItem from "@/components/AcordionItem";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  const accordiondata = [
    {
      title: "Primeiro acordion",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa maiores, quas blanditiis est placeat pariatur dolorem delectus in voluptatum vel, corporis perferendis, sit eius ipsam aspernatur sequi itaque? Rem.",
    },
    {
      title: "Segundo acordion",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa maiores, quas blanditiis est placeat pariatur dolorem delectus in voluptatum vel, corporis perferendis, sit eius ipsam aspernatur sequi itaque? Rem.",
    },
    {
      title: "Terceiro acordion",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa maiores, quas blanditiis est placeat pariatur dolorem delectus in voluptatum vel, corporis perferendis, sit eius ipsam aspernatur sequi itaque? Rem.",
    },
    {
      title: "Terceiro acordion",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa maiores, quas blanditiis est placeat pariatur dolorem delectus in voluptatum vel, corporis perferendis, sit eius ipsam aspernatur sequi itaque? Rem.",
    },
  ];

  return (
    <main>
      <div className="bg-[#3d3db9] h-screen grid place-items-center  " >
        <div className="px-[40px] max-w-[800px] ">
          {accordiondata.map((data, index: number) => (
            <AcordionItem
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
