// Editorial-style heading: small number, serif title, hairline rule.
function SectionHeading({ number, title }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-serif text-sm tracking-widest text-coffee-600 dark:text-coffee-400">
        {number}
      </span>
      <h2 className="font-serif text-3xl font-semibold text-stone-900 dark:text-stone-100">
        {title}
      </h2>
      <div className="h-px flex-1 translate-y-[-0.4rem] bg-stone-200 dark:bg-stone-800" />
    </div>
  )
}

export default SectionHeading
