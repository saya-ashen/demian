#let accent = rgb("#2b5268")
#let ink = rgb("#17242c")
#let muted = rgb("#52636d")
#let rule = rgb("#9fb2bd")

#let resume(body, name: "", contact: [], tagline: []) = {
  set document(title: name + " — Public Resume", author: name)
  set page(
    paper: "a4",
    margin: (left: 1.35cm, right: 1.35cm, top: 1cm, bottom: 1cm),
  )
  set text(font: "Libertinus Serif", size: 10.1pt, fill: ink)
  set par(leading: 0.52em, spacing: 0.34em, justify: true)
  set list(indent: 10pt, body-indent: 3.8pt, spacing: 0.27em)
  show link: it => text(fill: accent, it)

  align(center)[
    #text(size: 24pt, weight: "bold", fill: accent)[#name]
    #v(2pt)
    #text(size: 9.1pt, fill: muted)[#contact]
    #v(1.6pt)
    #text(size: 9.3pt, weight: "semibold", fill: ink)[#tagline]
  ]
  v(4pt)
  line(length: 100%, stroke: 0.75pt + accent)
  v(1.5pt)
  body
}

#let section(title) = {
  v(4.6pt)
  grid(
    columns: (auto, 1fr),
    column-gutter: 6pt,
    align: horizon,
    text(size: 10.7pt, weight: "bold", fill: accent)[#upper(title)],
    line(length: 100%, stroke: 0.45pt + rule),
  )
  v(1.8pt)
}

#let entry(title, meta: none) = {
  if meta == none {
    text(weight: "bold")[#title]
  } else {
    grid(
      columns: (1fr, auto),
      column-gutter: 8pt,
      align: horizon,
      text(weight: "bold")[#title],
      text(size: 9.1pt, fill: muted)[#meta],
    )
  }
}

#let compact-note(body) = block(
  inset: (left: 5pt, right: 4pt, top: 2pt, bottom: 2pt),
  stroke: (left: 1pt + rule),
  fill: rgb("#f4f7f8"),
  text(size: 8.75pt, fill: muted, body),
)

#let compact(body) = text(size: 9.2pt, body)
