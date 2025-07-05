const companies = [
    "amazon.png",
    "CocaCola.png",
    "netflix.png",
    "unity.png",
    "citibank.png",
    "amex.png",
    "Samsung.png",
    "BMW.png",
    "honeywell.png",
    "NASA.png",
  ];
<section className="mt-12 w-full max-w-5xl mx-auto flex flex-col items-center">
<h2 className="text-lg font-bold text-white text-center">
   Not Just for Solo Devs. Solving Git Problems for 100K+ Dev Teams
</h2>
<div className="mt-12 flex flex-wrap justify-center items-center gap-6">
    {companies.map((logo) => (
    <img key={logo} src={`/images/${logo}`} alt="GitKraken AI teams" className="w-20" />
    ))}
</div>
</section>