

"use client";
import Link from "next/link";
import { useState } from "react";
 
const charityImages = [
  {
    src: "/images/charity_work/image10.jpeg",
    alt: "Green Power Systems team presenting donations at Chiwamba Hospital",
    caption: "Handing over essentials to hospital staff",
  },
  {
    src: "/images/charity_work/image2 (1).jpeg",
    alt: "Team with mothers and babies at Chiwamba Hospital under-5 ward",
    caption: "With mothers in the Under-5 Department",
  },
  {
    src: "/images/charity_work/image3 (1).jpeg",
    alt: "Donation items — pampers, soap, and soya pieces laid out",
    caption: "Pampers, soap & soya pieces ready for distribution",
  },
  {
    src: "/images/charity_work/image5.jpeg",
    alt: "Green Power Systems staff at Chiwamba Hospital maternity ward",
    caption: "Visiting the maternity & antenatal ward",
  },
  {
    src: "/images/charity_work/image8.jpeg",
    alt: "Company representatives with pregnant mothers at Chiwamba Hospital Lilongwe",
    caption: "Supporting expectant mothers at Chiwamba",
  },
];
 
const donated = [
  {
    icon: "M12 3c-1.2 5.4-5 7.5-5 12a5 5 0 0 0 10 0c0-4.5-3.8-6.6-5-12z",
    label: "Pampers (Nappies)",
    desc: "Packs of nappies for newborns and infants in the under-5 ward.",
  },
  {
    icon: "M7 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-4-4H7zm5 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    label: "Bathing Soap",
    desc: "Hygiene soap for mothers and their newborns during hospital stays.",
  },
  {
    icon: "M3 6h18M3 12h18M3 18h18",
    label: "Soya Pieces",
    desc: "Nutritious soya pieces to support the dietary needs of new and expectant mothers.",
  },
];

