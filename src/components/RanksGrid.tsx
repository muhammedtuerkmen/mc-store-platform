import { RankProduct } from "@/data/siteConfig"

export default function RanksGrid({ products }: { products: RankProduct[] }) {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="rank-card">
          <div className={`rank-art ${product.accent}`} aria-hidden="true" />
          <div className="tile-title text-lg uppercase">{product.name}</div>
          <div className="mt-2 text-sm text-white text-opacity-70">{product.price}</div>
          <button className="primary-button mt-5 w-full" type="button">
            Add to Basket
          </button>
        </div>
      ))}
    </section>
  )
}
