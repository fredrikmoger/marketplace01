import { ProductRow } from "./components/ProductRow";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
      <div className="max-w-3xl mx-auto text-2xl sm:text-5xl lg:text-6xl font-semibold text-center">
        <h1>En trygg start på et livslangt vennskap</h1>
        <p className="lg:text-lg text-muted-foreground mx-auto mt-5 w-[90%] font-normal text-base">
        Knytt kontakt med pålitelige oppdrettere og omplasseringshjem
        </p>
      </div>
      <ProductRow category="nyeste" />
      <ProductRow category="hunder" />
      <ProductRow category="katter" />
    </section>
  );
}
