// components/CompanyLogos.tsx
import Image from "next/image";

const companies = [
  "amazon.png", "CocaCola.png", "netflix.png", "unity.png",
  "citibank.png", "amex.png", "Samsung.png", "BMW.png",
  "honeywell.png", "NASA.png"
];

export default function CompanyLogos() {
  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col items-center">     
      <div className="flex flex-wrap justify-center items-center gap-6">
        {companies.map((logo) => (
          <Image
            key={logo}
            src={`/images/${logo}`}
            alt={logo.replace('.png', '')}
            width={80}
            height={40}
            className="object-contain grayscale opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
}
